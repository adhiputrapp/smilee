<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\View\View;
use App\Models\Belanja;
use App\Models\SubKegiatan;
use App\Models\Kodering;
use App\Models\Pelimpahan;
use App\Exports\BKUExport;
use App\Models\Saldo;
use Carbon\Carbon;
use Maatwebsite\Excel\Facades\Excel;

class BKUController extends Controller
{
    public function index()
    {
        $subkegiatans = SubKegiatan::all(); // Mengambil semua subkegiatan
        return view('laporan.bku.index', compact('subkegiatans'));
    }

    // public function search()
    // {

    // }

    public function export(Request $request)
    {
        // Validasi form
        $request->validate([
            'bulan' => 'required',
            'tahun' => 'required',
            'subkegiatan_id' => 'required',
        ]);

        // setlocale(LC_TIME, 'id_ID.utf8');

        $bulanAnggaran = date('m', strtotime($request->bulan));
        // Ambil data belanja berdasarkan filter
        $belanjas = Belanja::with('biro', 'program', 'kegiatan', 'subkegiatan', 'kodering', 'verifikasi')
            ->whereMonth('tanggal_belanja', $bulanAnggaran)
            ->whereYear('tanggal_belanja', $request->tahun)
            ->where('subkegiatan_id', $request->subkegiatan_id)
            ->get();
        $tahunAnggaran = $request->tahun;

        $subkegiatans = SubKegiatan::find($request->subkegiatan_id);

        $pelimpahan = Pelimpahan::whereMonth('tanggal_pelimpahan', $bulanAnggaran)
            ->whereYear('tanggal_pelimpahan', $request->tahun)
            ->where('subkegiatan_id', $request->subkegiatan_id)
            ->first();

        $exportData = [];

        $exportData[0] = [
            'No' => "",
            "Tanggal" => "",
            "NoBukti" => "",
            "Uraian" => "Saldo Awal Bulan " . Carbon::now()->month($bulanAnggaran)->locale('id')->monthName,
            "KodeRekening" => "",
            "Penerimaan" => "",
            "Pengeluaran" => "",
            "SubKegiatan" => $subkegiatans->nama_sub_kegiatan,
            "Saldo" => ""
        ];

        if (!is_null($pelimpahan)) {
            $exportData[1] = [
                'No' => 1,
                "Tanggal" => Carbon::parse($pelimpahan->tanggal_pelimpahan)->settings([
                    'locale' => 'id',
                    'timezone' => 'Asia/Jakarta',
                ])->translatedFormat('d F Y'),
                "NoBukti" => $pelimpahan->nodokumen,
                "Uraian" => $pelimpahan->note,
                "KodeRekening" => "-",
                "Penerimaan" => $pelimpahan->jumlah_pelimpahan,
                "Pengeluaran" => "-",
                "SubKegiatan" => $subkegiatans->nama_sub_kegiatan,
                "Saldo" => $pelimpahan->jumlah_pelimpahan
            ];

            foreach ($belanjas as $key => $item) {
                $exportData[] = [
                    'No' => $key + 2,
                    "Tanggal" => Carbon::parse($item->tanggal_belanja)->settings([
                        'locale' => 'id',
                        'timezone' => 'Asia/Jakarta',
                    ])->translatedFormat('d F Y'),
                    "NoBukti" => $item->nobukti,
                    "Uraian" => $item->uraian,
                    "KodeRekening" => $item->kodering->kode_kodering,
                    "Penerimaan" => "-",
                    "Pengeluaran" => $item->pengeluaran,
                    "SubKegiatan" => $subkegiatans->nama_sub_kegiatan,
                    "Saldo" => "=H" . ($key + 11) . "-G" . $key + 12
                ];
            }
        } else {
            $dt = Carbon::now();
            $dt->month = $bulanAnggaran;
            $dt->subMonth(1);

            $saldoPelimpahan = Belanja::with('saldo')->latest()
                ->whereMonth('tanggal_belanja', $dt->month)
                ->whereYear('tanggal_belanja', $request->tahun)
                ->where('subkegiatan_id', $request->subkegiatan_id)
                ->first();

            // dd($saldoPelimpahan->saldo);


            $exportData[0] = [
                'No' => "",
                "Tanggal" => "",
                "NoBukti" => "",
                "Uraian" => "Saldo Awal Bulan " . Carbon::now()->month($bulanAnggaran)->locale('id')->monthName,
                "KodeRekening" => "",
                "Penerimaan" => "",
                "Pengeluaran" => "",
                "SubKegiatan" => $subkegiatans->nama_sub_kegiatan,
                "Saldo" => $saldoPelimpahan->saldo->saldo
            ];

            foreach ($belanjas as $key => $item) {
                $exportData[] = [
                    'No' => $key + 2,
                    "Tanggal" => Carbon::parse($item->tanggal_belanja)->settings([
                        'locale' => 'id',
                        'timezone' => 'Asia/Jakarta',
                    ])->translatedFormat('d F Y'),
                    "NoBukti" => $item->nobukti,
                    "Uraian" => $item->uraian,
                    "KodeRekening" => $item->kodering->kode_kodering,
                    "Penerimaan" => "-",
                    "Pengeluaran" => $item->pengeluaran,
                    "SubKegiatan" => $subkegiatans->nama_sub_kegiatan,
                    "Saldo" => "=H" . ($key + 10) . "-G" . $key + 11
                ];
            }
        }

        // dd($belanjas);

        // $exportData = $belanjas->map(function ($item) {
        //     return [
        //         'No' => $item->id,
        //         'Tanggal' => $item->tanggal_belanja,
        //         'Nobukti' => $item->nobukti,
        //         'Uraian' => $item->uraian,
        //         'Kode Rekening' => $item->kodering->kode_rekening,
        //         'Penerimaan' => optional($item->saldo)->pelimpahan->jumlah_pelimpahan ?? 0,
        //         'Pengeluaran' => $item->pengeluaran,
        //         'Sub Kegiatan' => $item->subKegiatan->nama_sub_kegiatan,
        //         'Saldo' => optional($item->saldo)->saldo ?? 0
        //         // Sesuaikan dengan kolom-kolom lain yang dibutuhkan
        //     ];
        // });

        // $view = view('user.laporan.bku', compact('belanjas', 'request'))->render();
        // dd($belanjas);
        return Excel::download(new BKUExport(
            $exportData,
            $tahunAnggaran,
            Carbon::now()->month($bulanAnggaran)
        ), 'BKU.xlsx');
        // dd($request->subkegiatan_id);
        // return view('user.laporan.bku',[
        //     'belanjas' => $belanjas,
        //     'tahun' => $tahunAnggaran
        // ]);
    }



    // public function export()
    // {
    //     $belanjas = Belanjaa::whereHas('subkegiatan');
    // }
}
