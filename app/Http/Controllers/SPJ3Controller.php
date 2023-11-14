<?php

namespace App\Http\Controllers;

use App\Exports\SPJ3Export;
use App\Models\Kegiatan;
use App\Models\SubKegiatan;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Maatwebsite\Excel\Facades\Excel;

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
        $tahun = explode('-', $this->request->tanggal);
        $subKegiatan = SubKegiatan::with('kegiatan')->find($this->request->sub_kegiatan);
        $kegiatan = Kegiatan::with('program')->find($subKegiatan->kegiatan->id);

        return Excel::download(new SPJ3Export(
            $tahun,
            $subKegiatan,
            $kegiatan,
            $kegiatan->program
        ), 'SPJ3.xlsx');

        return view('laporan.spj3.export', [
            'tahun' => $tahun,
            'subKegiatan' => $subKegiatan,
            'kegiatan' => $kegiatan,
            'program' => $kegiatan->program
        ]);
    }
}
