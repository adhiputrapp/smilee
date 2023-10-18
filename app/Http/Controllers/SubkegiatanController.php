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
use App\Models\SubKegiatan;

class SubkegiatanController extends Controller
{
    public function index(): View
    {
        return view('master.subkegiatan.index',[
            'subkegiatans' => SubKegiatan::orderby('kode_sub_kegiatan','ASC')->with('kegiatan.program.biro')->get()
        ]);
    }

    public function create(): View
    {
        return view('master.subkegiatan.create',[
            'kegiatans' => Kegiatan::all()
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'nama_sub_kegiatan' => 'required',
            'kode_sub_kegiatan' => 'required',
            'nama_kegiatan_relasi' => 'required'
        ]);

        SubKegiatan::create([
            'id' => Str::uuid(),
            'nama_sub_kegiatan' => $request->nama_sub_kegiatan,
            'kode_sub_kegiatan' => $request->kode_sub_kegiatan,
            'nama_kegiatan_relasi' => $request->nama_kegiatan_relasi
        ]);

        return redirect()->route('subkegiatans.index');
    }

    public function edit($id): View 
    {
        $subkegiatans = SubKegiatan::with('kegiatan')->find($id);
        $kegiatans = Kegiatan::all();

        return view('master.subkegiatan.edit', compact('subkegiatans', 'kegiatans','id'));
    }

    public function update(Request $request, $id): RedirectResponse
    {
        $request->validate([
            'kode_sub_kegiatan' => 'required|string|max:255',
            'nama_sub_kegiatan' => 'required|string|max:255',
            'nama_kegiatan_relasi' => 'required', 
        ]);
    
        $subkegiatan = SubKegiatan::find($id);

        $subkegiatan->kode_sub_kegiatan = $request->kode_sub_kegiatan;
        $subkegiatan->nama_sub_kegiatan = $request->nama_sub_kegiatan;
        $subkegiatan->nama_kegiatan_relasi = $request->nama_kegiatan_relasi;

        $subkegiatan->save();

        return redirect()->route('subkegiatans.index')->with('success', 'subkegiatan berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $subkegiatans = SubKegiatan::find($id);
        $subkegiatans->delete();

        return redirect()->route('subkegiatans.index')->with('success', 'subkegiatan berhasil dihapus.');
    }
}
