<?php

namespace App\Http\Controllers;

use App\Exports\RincianObjekExport;
use App\Models\Anggaran;
use App\Models\Belanja;
use App\Models\Kegiatan;
use App\Models\Kodering;
use App\Models\Pelimpahan;
use App\Models\Program;
use App\Models\SubKegiatan;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Maatwebsite\Excel\Facades\Excel;

class RincianObjekController extends Controller
{
    public $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function index(): View
    {
        $user = $this->request->user()->biro;
        $program = Program::latest()->get();
        $kegiatan = Kegiatan::whereIn('nama_program_relasi', $program->pluck('nama_program'))->get();
        $subKegiatan = SubKegiatan::whereIn('nama_kegiatan_relasi', $kegiatan->pluck('nama_kegiatan'))->get();
        $kodering = Kodering::latest()->get();

        return view('laporan.rincian-objek.index', [
            'koderings' => $kodering,
            'subkegiatans' => $subKegiatan,
            'user' => $user
        ]);
    }

    public function searchForSubKegiatan(): JsonResponse
    {
        $data = Kodering::where('id', $this->request->kodering)->first();

        return response()->json([
            'data' => $data
        ]);
    }

    public function export()
    {
        // Validasi form
        $this->request->validate([
            'sub_kegiatan_id' => 'required',
            'kodering' => 'required',
            'tanggal' => 'required',
        ]);

        $belanjas = Belanja::where('subkegiatan_id', $this->request->sub_kegiatan_id)
            ->where('kodering_id', $this->request->kodering)
            ->whereMonth('tanggal_belanja', explode('-', $this->request->tanggal)[1])
            ->whereYear('tanggal_belanja', explode('-', $this->request->tanggal)[0])
            ->get();
        $kodering = Kodering::find($this->request->kodering);
        $anggaran = Anggaran::where('kodering_id', $kodering->id)->first()->load('saldoanggaran');

        $pelimpahan = Pelimpahan::whereMonth('tanggal_pelimpahan', explode('-', $this->request->tanggal)[1])
            ->whereYear('tanggal_pelimpahan', explode('-', $this->request->tanggal)[0])
            ->where('subkegiatan_id', $this->request->sub_kegiatan_id)
            ->first();

        $exportData = [];

        if (!is_null($pelimpahan)) {
            $exportData[0] = [
                'No' => "",
                "Tanggal" => "",
                "NoBKU" => "",
                "Uraian" => "Saldo Awal Bulan " . Carbon::now()->month(explode('-', $this->request->tanggal)[1])->locale('id')->monthName,
                "JenisBelanja" => "",
                "Pengeluaran" => "",
                "Saldo" => $pelimpahan->jumlah_pelimpahan
            ];

            foreach ($belanjas as $key => $item) {
                $saldo = "";

                if ($item->jenis_belanja == "UP/GU") {
                    $saldo = "=H" . ($key + 17) . "-G" . $key + 18;
                } else if ($item->jenis_belanja == "TU") {
                    $saldo = "=H" . ($key + 17) . "-F" . $key + 18;
                } else {
                    $saldo = "=H" . ($key + 17) . "-E" . $key + 18;
                }

                $exportData[] = [
                    'No' => $key + 1,
                    "Tanggal" => Carbon::parse($item->tanggal_belanja)->settings([
                        'locale' => 'id',
                        'timezone' => 'Asia/Jakarta',
                    ])->translatedFormat('d F Y'),
                    "NoBKU" => $item->nobukti,
                    "Uraian" => $item->uraian,
                    "JenisBelanja" => $item->jenis_belanja,
                    "Pengeluaran" => $item->pengeluaran,
                    "Saldo" => $saldo
                ];
            }
        } else {
            $dt = Carbon::now();
            $dt->month = explode('-', $this->request->tanggal)[1];
            $dt->subMonth(1);

            $saldoPelimpahan = Belanja::with('saldo')->latest()
                ->whereMonth('tanggal_belanja', $dt->month)
                ->whereYear('tanggal_belanja', explode('-', $this->request->tanggal)[0])
                ->where('subkegiatan_id', $this->request->sub_kegiatan_id)
                ->first();

            $exportData[0] = [
                'No' => "",
                "Tanggal" => "",
                "NoBKU" => "",
                "Uraian" => "Saldo Awal Bulan " . Carbon::now()->month(explode('-', $this->request->tanggal)[1])->locale('id')->monthName,
                "JenisBelanja" => "",
                "Pengeluaran" => "",
                "Saldo" => $saldoPelimpahan->saldo->saldo
            ];

            foreach ($belanjas as $key => $item) {

                $saldo = "";

                if ($item->jenis_belanja == "UP/GU") {
                    $saldo = "=H" . ($key + 17) . "-G" . $key + 18;
                } else if ($item->jenis_belanja == "TU") {
                    $saldo = "=H" . ($key + 17) . "-F" . $key + 18;
                } else {
                    $saldo = "=H" . ($key + 17) . "-E" . $key + 18;
                }

                $exportData[] = [
                    'No' => $key + 1,
                    "Tanggal" => Carbon::parse($item->tanggal_belanja)->settings([
                        'locale' => 'id',
                        'timezone' => 'Asia/Jakarta',
                    ])->translatedFormat('d F Y'),
                    "NoBKU" => $item->nobukti,
                    "Uraian" => $item->uraian,
                    "JenisBelanja" => $item->jenis_belanja,
                    "Pengeluaran" => $item->pengeluaran,
                    "Saldo" => $saldo
                ];
            }
        }

        // dd($exportData);

        // dd($data);

        return Excel::download(new RincianObjekExport(
            $exportData,
            explode('-', $this->request->tanggal)[0],
            $kodering,
            $anggaran,
            $pelimpahan,
            Carbon::now()->month(explode('-', $this->request->tanggal)[1]),
        ), 'Rincian Objek.xlsx');

        // return view('laporan.rincian-objek.export', [
        //     'data' => $data,
        //     'tahun' => explode('-', $this->request->tanggal)[0],
        //     'sumLS' => $data->where('jenis_belanja', 'LS')->pluck('pengeluaran')->sum(),
        //     'sumTU' => $data->where('jenis_belanja', 'TU')->pluck('pengeluaran')->sum(),
        //     'sumUPGU' => $data->where('jenis_belanja', 'UP/GU')->pluck('pengeluaran')->sum(),
        //     'kodering' => $kodering,
        //     'anggaran' => $anggaran,
        //     'pelimpahan' => $pelimpahan,
        //     'eom' => Carbon::now()->month(explode('-', $this->request->tanggal)[1])
        // ]);
    }
}
