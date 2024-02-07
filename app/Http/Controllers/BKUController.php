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
use Carbon\Carbon;
use Maatwebsite\Excel\Facades\Excel;

class BKUController extends Controller
{
    public function index()
    {
        $subkegiatans = SubKegiatan::all(); // Mengambil semua subkegiatan
        return view('laporan.bku.index', compact('subkegiatans'));
    }

    public function search()
    {

    }

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
        $belanjas = Belanja::with('biro','program','kegiatan','subkegiatan','kodering', 'verifikasi', 'saldo.pelimpahan')
            ->whereMonth('tanggal_belanja', $bulanAnggaran)
            ->whereYear('tanggal_belanja', $request->tahun)
            ->where('subkegiatan_id', $request->subkegiatan_id)
            ->get();
            $tahunAnggaran = $request->tahun;
            // $bulanAnggaran = $request->bulan;

            $exportData = $belanjas->map(function ($item) {
                return [
                    'No' => $item->id,
                    'Tanggal' => $item->tanggal_belanja,
                    'Nobukti' => $item->nobukti,
                    'Uraian' => $item->uraian,
                    'Kode Rekening' => $item->kodering->kode_rekening,
                    'Penerimaan' => optional($item->saldo)->pelimpahan->jumlah_pengeluaran ?? 0,
                    'Pengeluaran' => $item->pengeluaran,
                    'Sub Kegiatan' => $item->subKegiatan->nama_sub_kegiatan,
                    'Saldo' => optional($item->saldo)->saldo ?? 0
                    // Sesuaikan dengan kolom-kolom lain yang dibutuhkan
                ];
            });

        // $view = view('user.laporan.bku', compact('belanjas', 'request'))->render();
        // dd($belanjas);
        return Excel::download(new BKUExport(
            $belanjas,
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
