<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\View\View;
use App\Models\Biro;
use App\Models\Program;
use App\Models\Kegiatan;


class KegiatanController extends Controller
{
    public function index(): View
    {
        return view('master.kegiatan.index',[
            'kegiatans' => Kegiatan::orderby('kode_kegiatan','ASC')->with('program.biro')->get()
        ]);
    }

    public function create(): View
    {
        return view('master.kegiatan.create',[
            'programs' => Program::all()
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'nama_kegiatan' => 'required',
            'kode_kegiatan' => 'required',
            'nama_program_relasi' => 'required'
        ]);

        Kegiatan::create([
            'id' => Str::uuid(),
            'nama_kegiatan' => $request->nama_kegiatan,
            'kode_kegiatan' => $request->kode_kegiatan,
            'nama_program_relasi' => $request->nama_program_relasi
        ]);

        return redirect()->route('kegiatans.index');
    }

    public function edit($id): View 
    {
        $kegiatans = Kegiatan::with('program')->find($id);
        $programs = Program::all();

        return view('master.kegiatan.edit', compact('programs', 'kegiatans','id'));
    }

    public function update(Request $request, $id): RedirectResponse
    {
        $request->validate([
            'kode_kegiatan' => 'required|string|max:255',
            'nama_kegiatan' => 'required|string|max:255',
            'nama_program_relasi' => 'required', 
        ]);
    
        $kegiatan = Kegiatan::find($id);

        $kegiatan->kode_kegiatan = $request->kode_kegiatan;
        $kegiatan->nama_kegiatan = $request->nama_kegiatan;
        $kegiatan->nama_program_relasi = $request->nama_program_relasi;

        $kegiatan->save();

        return redirect()->route('kegiatans.index')->with('success', 'kegiatan berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $kegiatans = Kegiatan::find($id);
        $kegiatans->delete();

        return redirect()->route('kegiatans.index')->with('success', 'kegiatan berhasil dihapus.');
    }
}

