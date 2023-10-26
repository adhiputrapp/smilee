<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\View\View;
use App\Models\Anggaran;

class AnggaranController extends Controller
{
    public function index(): View
    {
        return view('user.anggaran.index',[
            'anggarans' => Anggaran::orderby('tanggal_anggaran','ASC')->get()
        ]);
    }

    public function create(): View
    {
        return view('user.anggaran.create');
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'dari' => 'required|string|max:255',
            'tanggal_anggaran' => 'required',
            'jumlah_anggaran' => 'required',
            'note' => 'required|string|max:255',
        ]);

        Anggaran::create([
            'id' => Str::uuid(),
            'dari' => $request->dari,
            'tanggal_anggaran' => $request->tanggal_anggaran,
            'jumlah_anggaran' => $request->jumlah_anggaran,
            'note' => $request->note,
        ]);

        return redirect()->route('anggarans.index');
    }

    public function edit($id): View
    {
        $anggarans = Anggaran::find($id);

        return view('user.anggaran.edit', compact('anggarans','id'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'dari' => 'required|string|max:255',
            'tanggal_anggaran' => 'required',
            'jumlah_anggaran' => 'required',
            'note' => 'required|string|max:255',
        ]);

        $anggarans = Anggaran::find($id);

        $anggarans->update([
            'dari' => $request->dari,
            'tanggal_anggaran' => $request->tanggal_anggaran,
            'jumlah_anggaran' => $request->jumlah_anggaran,
            'note' => $request->note,
        ]);

        return redirect()->route('anggarans.index')->with('success', 'Biro berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $anggarans = Anggaran::find($id);
        $anggarans->delete();

        return redirect()->route('anggarans.index')->with('success', 'Biro berhasil dihapus.');
    }
}
