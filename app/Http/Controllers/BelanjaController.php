<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\View\View;
use App\Exports\RincianExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\Biro;
use App\Models\Pelimpahan;
use App\Models\SubKegiatan;
use App\Models\Kegiatan;
use App\Models\Program;
use App\Models\Kodering;
use App\Models\Belanja;

class BelanjaController extends Controller
{
    public function index(): View
    {
        return view('user.belanja.index',[
            'belanjas' => Belanja::orderby('tanggal_belanja', 'ASC')
            ->with('biro','program','kegiatan','subkegiatan','kodering')
            ->get()
        ]);
    }

    public function create(): View
    {
        return view('user.belanja.create',[
            'biros' => Biro::all(),
            'programs' => Program::all(),
            'kegiatans' => Kegiatan::all(),
            'subkegiatans' => SubKegiatan::all(),
            'koderings' => Kodering::all()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'tanggal_belanja' => 'required',
            'biro_id' => 'required',
            'program_id' => 'required',
            'kegiatan_id' => 'required',
            'subkegiatan_id' => 'required',
            'kodering_id' => 'required',
            'jenis_belanja' => 'required',
            'nobukti' => 'required',
            'pengeluaran' => 'required',
            'uraian' => 'required',
        ]);

        Belanja::create([
            'id' => Str::uuid(),
            'tanggal_belanja' => $request->tanggal_belanja,
            'biro_id' => $request->biro_id,
            'program_id' => $request->program_id,
            'kegiatan_id' => $request->kegiatan_id,
            'subkegiatan_id' => $request->subkegiatan_id,
            'kodering_id' => $request->kodering_id,
            'jenis_belanja' => $request->jenis_belanja,
            'nobukti' => $request->nobukti,
            'pengeluaran' => $request->pengeluaran,
            'uraian' => $request->uraian,
        ]);

        return redirect()->route('belanjas.index');
    }

    public function edit($id)
    {
        $belanja = Belanja::find($id);

        return view('user.belanja.edit', [
            'belanja' => $belanja,
            'biros' => Biro::all(),
            'programs' => Program::all(),
            'kegiatans' => Kegiatan::all(),
            'subkegiatans' => SubKegiatan::all(),
            'koderings' => Kodering::all()
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'tanggal_belanja' => 'required',
            'jenis_belanja' => 'required',
            'biro_id' => 'required',
            'program_id' => 'required',
            'kegiatan_id' => 'required',
            'subkegiatan_id' => 'required',
            'kodering_id' => 'required',
            'nobukti' => 'required',
            'pengeluaran' => 'required',
            'uraian' => 'required',
        ]);

        $belanja = Belanja::find($id);

        $belanja->update([
            'biro_id' => $request->biro_id,
            'tanggal_belanja' => $request->tanggal_belanja,
            'jenis_belanja' => $request->jenis_belanja,
            'program_id' => $request->program_id,
            'kegiatan_id' => $request->kegiatan_id,
            'subkegiatan_id' => $request->subkegiatan_id,
            'kodering_id' => $request->kodering_id,
            'nobukti' => $request->nobukti,
            'pengeluaran' => $request->pengeluaran,
            'uraian' => $request->uraian,
        ]);

        return redirect()->route('belanjas.index')->with('success', 'Belanja berhasil diperbarui.');
    }


    public function destroy($id)
    {
        $belankas = Belanja::find($id);
        $belankas->delete();

        return redirect()->route('belanjas.index')->with('success', 'Pelimpahan berhasil dihapus.');
    }

    public function export() 
    {
        return Excel::download(new RincianExport, 'rincian.xlsx');
    }
}
