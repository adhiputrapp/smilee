<?php

namespace App\Http\Controllers;

use App\Exports\SPJ3Export;
use App\Models\Kegiatan;
use App\Models\Belanja;
use App\Models\SubKegiatan;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Maatwebsite\Excel\Facades\Excel;
use Carbon\Carbon;

class SPJ3Controller extends Controller
{
    public $request;

    public function __construct(Request $request) {
        $this->request = $request;
    }

    public function index() : View {
        $program = $this->request->user()->biro->programs;
        $kegiatan = Kegiatan::whereIn('nama_program_relasi', $program->pluck('nama_program'))->get();
        $subKegiatan = SubKegiatan::whereIn('nama_kegiatan_relasi', $kegiatan->pluck('nama_kegiatan'))->get();

        return view('laporan.spj3.index', [
            'subKegiatan' => $subKegiatan
        ]);
    }

    public function export() {
        $spj = Belanja::whereHas('pengesahan', function($query) {
            $query->where('sah', 'disetujui');
        })
            ->with('biro','program','kegiatan','subkegiatan','kodering', 'verifikasi', 'saldo.pelimpahan')
            ->where('subkegiatan_id', $this->request->sub_kegiatan_id)
            ->whereMonth('tanggal_belanja', explode('-', $this->request->tanggal)[1])
            ->whereYear('tanggal_belanja', explode('-', $this->request->tanggal)[0])
            ->get();
        $tahun = explode('-', $this->request->tanggal);
        // $subKegiatan = SubKegiatan::with('kegiatan')->find($this->request->sub_kegiatan);
        // $kegiatan = Kegiatan::with('program')->find($subKegiatan->kegiatan->id);

        // dd($spj);

        return Excel::download(new SPJ3Export(
            $spj,
            $tahun,
            // explode('-', $this->request->tanggal)[0],
            // $data->where('jenis_belanja', 'LS')->pluck('subkegiatan_id')->sum('pengeluaran'),
            // $data->where('jenis_belanja', 'TU')->pluck('subkegiatan_id')->sum('pengeluaran'),
            // $data->where('jenis_belanja', 'UP/GU')->pluck('subkegiatan_id')->sum('pengeluaran'),
            // $subKegiatan,
            // $kegiatan,
            // $kegiatan->program,
            // Carbon::now()->month(explode('-', $this->request->tanggal)[1]),
        ), 'SPJ3.xlsx');

    //     dd($data);

    // return view('laporan.spj3.export', [
    //     'data' => $data,
    // ]);
        // return view('laporan.spj3.export', [
        //     'tahun' => $tahun,
        //     'subKegiatan' => $subKegiatan,
        //     'kegiatan' => $kegiatan,
        //     'program' => $kegiatan->program
        // ]);
    }
}
