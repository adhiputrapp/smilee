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

    public function __construct(Request $request) {
        $this->request = $request;
    }

    public function index() : View {
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

    public function searchForSubKegiatan() : JsonResponse {
        $data = Kodering::where('id', $this->request->kodering)->first();

        return response()->json([
            'data' => $data
        ]);
    }

    public function export() {
        $data = Belanja::whereHas('pengesahan', function($query) {
            $query->where('sah', 'disetujui');
        })
            ->where('subkegiatan_id', $this->request->sub_kegiatan_id)
            ->where('kodering_id', $this->request->kodering)
            ->whereMonth('tanggal_belanja', explode('-', $this->request->tanggal)[1])
            ->whereYear('tanggal_belanja', explode('-', $this->request->tanggal)[0])
            ->get();
        $kodering = Kodering::find($this->request->kodering);
        $anggaran = Anggaran::where('kodering_id', $kodering->id)->first();
        $pelimpahan = Pelimpahan::where('biro_id', $this->request->user()->biro->id)->first();

        // dd($data);

        return Excel::download(new RincianObjekExport(
            $data, 
            explode('-', $this->request->tanggal)[0],
            $data->where('jenis_belanja', 'LS')->pluck('pengeluaran')->sum(),
            $data->where('jenis_belanja', 'TU')->pluck('pengeluaran')->sum(),
            $data->where('jenis_belanja', 'UP/GU')->pluck('pengeluaran')->sum(),
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
