<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\View\View;
use App\Models\Biro;

class BiroController extends Controller
{
    public function index(): View
    {
        return view('master.biro.index',[
            'biros' => Biro::orderby('kode_biro','ASC')->get()
        ]);
    }

    public function create(): View
    {
        return view('master.biro.create');
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'nama_biro' => 'required|string|max:255',
            'kode_biro' => 'required|string|max:255',
        ]);

        Biro::create([
            'id' => Str::uuid(),
            'nama_biro' => $request->nama_biro,
            'kode_biro' => $request->kode_biro,
        ]);

        return redirect()->route('biros.index');
    }

    public function edit($id): View
    {
        $biros = Biro::find($id);

        return view('master.biro.edit', compact('biros','id'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nama_biro' => 'required|string|max:255',
            'kode_biro' => 'required|string|max:255',
        ]);

        $biro = Biro::find($id);

        $biro->update([
            'nama_biro' => $request->nama_biro,
            'kode_biro' => $request->kode_biro,
        ]);

        return redirect()->route('biros.index')->with('success', 'Biro berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $biro = Biro::find($id);
        $biro->delete();

        return redirect()->route('biros.index')->with('success', 'Biro berhasil dihapus.');
    }
}
