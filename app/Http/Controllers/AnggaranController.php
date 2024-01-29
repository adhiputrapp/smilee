<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\View\View;
use App\Models\Anggaran;
use App\Models\Kegiatan;
use App\Models\SubKegiatan;
use App\Models\Kodering;
use Illuminate\Http\JsonResponse;

class AnggaranController extends Controller
{
    public function index(): View
    {
        return view('user.anggaran.index',[
            'anggarans' => Anggaran::orderby('tanggal_anggaran','ASC')
            ->with('subkegiatan', 'kodering')
            ->get()
        ]);
    }

    public function create(Request $request): View
    {
        $user = $request->user()->biro;
        $program = Program::latest()->get();
        $kegiatan = Kegiatan::whereIn('nama_program_relasi', $program->pluck('nama_program'))->get();
        $subKegiatan = SubKegiatan::whereIn('nama_kegiatan_relasi', $kegiatan->pluck('nama_kegiatan'))->get();
        $kodering = Kodering::latest()->get();

        return view('user.anggaran.create',[
            'koderings' => $kodering,
            'subkegiatans' => $subKegiatan
        ]);
    }

    public function searchForSubKegiatan(Request $request) : JsonResponse {
        $data = SubKegiatan::where('id', $request->nama_sub_kegiatan)->first();

        return response()->json([
            'data' => $data
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'sub_kegiatan_id' => 'required',
            'kodering_id' => 'required',
            'tanggal_anggaran' => 'required',
            'jumlah_anggaran' => 'required',
            'uraian' => 'required',
        ]);

        Anggaran::create([
            'id' => Str::uuid(),
            'subkegiatan_id' => $request->sub_kegiatan_id,
            'kodering_id' => $request->kodering_id,
            'tanggal_anggaran' => $request->tanggal_anggaran,
            'jumlah_anggaran' => $request->jumlah_anggaran,
            'uraian' => $request->uraian,
        ]);

        return redirect()->route('anggarans.index');
    }

    public function edit($id): View
    {
        $anggarans = Anggaran::find($id);
        $subkegiatans = SubKegiatan::all();
        $koderings = Kodering::all();

        return view('user.anggaran.edit', compact('anggarans','id', 'subkegiatans', 'koderings'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'subkegiatan_id' => 'required',
            'kodering_id' => 'required',
            'tanggal_anggaran' => 'required',
            'jumlah_anggaran' => 'required',
            'uraian' => 'required',
        ]);

        $anggarans = Anggaran::find($id);

        $anggarans->update([
            'subkgeiatan_id' => $request->subkgeiatan_id,
            'kodering_id' => $request->kodering_id,
            'tanggal_anggaran' => $request->tanggal_anggaran,
            'jumlah_anggaran' => $request->jumlah_anggaran,
            'uraian' => $request->uraian,
        ]);

        return redirect()->route('anggarans.index')->with('success', 'Anggaran berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $anggarans = Anggaran::find($id);
        $anggarans->delete();

        return redirect()->route('anggarans.index')->with('success', 'Biro berhasil dihapus.');
    }
}
