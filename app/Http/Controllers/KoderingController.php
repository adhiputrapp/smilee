<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Str;
use Illuminate\View\View;
use App\Models\SubKegiatan;
use App\Models\Kodering;


class KoderingController extends Controller
{
    public function index(): View
    {
        return view('master.kodering.index',[
            'koderings' => Kodering::orderby('kode_kodering','ASC')->get()
        ]);
    }

    public function create(): View
    {
        return view('master.kodering.create',[
            'subkegiatans' => SubKegiatan::all()
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'nama_kodering' => 'required',
            'kode_kodering' => 'required'
        ]);

        Kodering::create([
            'id' => Str::uuid(),
            'nama_kodering' => $request->nama_kodering,
            'kode_kodering' => $request->kode_kodering,
        ]);

        return redirect()->route('koderings.index');
    }

    public function edit($id): View 
    {
        $koderings = Kodering::with('subkegiatan')->find($id);
        $subkegiatans = SubKegiatan::all();

        return view('master.kodering.edit', compact('koderings', 'subkegiatans','id'));
    }

    public function update(Request $request, $id): RedirectResponse
    {
        $request->validate([
            'nama_kodering' => 'required',
            'kode_kodering' => 'required'
        ]);
    
        $koderings = Kodering::find($id);

        $koderings->kode_kodering = $request->kode_kodering;
        $koderings->nama_kodering = $request->nama_kodering;

        $koderings->save();

        return redirect()->route('koderings.index')->with('success', 'kodering berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $koderings = Kodering::find($id);
        $koderings->delete();

        return redirect()->route('koderings.index')->with('success', 'kodering berhasil dihapus.');
    }
}
