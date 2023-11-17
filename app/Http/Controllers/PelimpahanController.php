<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\View\View;
use App\Models\Biro;
use App\Models\Pelimpahan;
use App\Models\Saldo;

class PelimpahanController extends Controller
{
    public function index(): View
    {
        return view('user.pelimpahan.index',[
            'pelimpahans' => Pelimpahan::orderby('tanggal_pelimpahan', 'ASC')->with('biro')->get()
        ]);
    }

    public function create(): View
    {
        return view('user.pelimpahan.create',[
            'biros' => Biro::all()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nodokumen' => 'required',
            'tanggal_pelimpahan' => 'required',
            'jumlah_pelimpahan' => 'required',
            'biro_id' => 'required',
            'note' => 'required',
        ]);

        
        $pelimpahan = Pelimpahan::create([
            'id' => Str::uuid(),
            'nodokumen' => $request->nodokumen,
            'tanggal_pelimpahan' => $request->tanggal_pelimpahan,
            'jumlah_pelimpahan' => $request->jumlah_pelimpahan,
            'biro_id' => $request->biro_id,
            'note' => $request->note,
        ]);
        
         // Periksa apakah sudah ada saldo untuk biro yang bersangkutan
        $existingSaldo = Saldo::where('biro_id', $request->biro_id)->first();

        // Jika sudah ada, tambahkan jumlah pelimpahan ke saldo yang sudah ada
        if ($existingSaldo) {
            $existingSaldo->saldo += $request->jumlah_pelimpahan;
            $existingSaldo->save();
        } else {
            // Jika belum ada, buat saldo baru
            $saldo = Saldo::create([
                'id' => Str::uuid(),
                'belanja_id' => null,
                'pelimpahan_id' => $pelimpahan->id,
                'biro_id' => $request->biro_id,
                'saldo' => $request->jumlah_pelimpahan,
            ]);
        }

        return redirect()->route('pelimpahans.index');
    }

    public function edit($id): View
    {
        $pelimpahans = Pelimpahan::with('biro')->find($id);
        $biros = Biro::all();

        return view('user.pelimpahan.edit', compact('pelimpahans','biros'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nodokumen' => 'required',
            'tanggal_pelimpahan' => 'required',
            'jumlah_pelimpahan' => 'required',
            'biro_id' => 'required',
            'note' => 'required',
        ]);

        $pelimpahans = Pelimpahan::find($id);

        $pelimpahans->nodokumen = $request->nodokumen;
        $pelimpahans->tanggal_pelimpahan = $request->tanggal_pelimpahan;
        $pelimpahans->jumlah_pelimpahan = $request->jumlah_pelimpahan;
        $pelimpahans->biro_id = $request->biro_id;
        $pelimpahans->note = $request->note;

        $pelimpahans->save();

        return redirect()->route('pelimpahans.index')->with('success', 'Program berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $pelimpahans = Pelimpahan::find($id);
        $pelimpahans->delete();

        return redirect()->route('pelimpahans.index')->with('success', 'Pelimpahan berhasil dihapus.');
    }
}
