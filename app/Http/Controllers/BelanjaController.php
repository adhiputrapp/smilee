<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\View\View;
use App\Exports\RincianExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\Biro;
use App\Models\SubKegiatan;
use App\Models\Kegiatan;
use App\Models\Program;
use App\Models\Kodering;
use App\Models\Belanja;
use Illuminate\Http\JsonResponse;

class BelanjaController extends Controller
{
    public function index(): View
    {
        $belanjas = Belanja::orderBy('tanggal_belanja', 'ASC')
            ->with('biro', 'program', 'kegiatan', 'subkegiatan', 'kodering', 'verifikasi')
            ->get();


        return view('user.belanja.index', [
            'belanjas' => $belanjas,
        ]);
    }

    public function create(Request $request): View
    {
        $biro = $request->user()->biro;
        $program = Program::latest()->get();
        $kegiatan = Kegiatan::whereIn('nama_program_relasi', $program->pluck('nama_program'))->get();
        $subKegiatan = SubKegiatan::whereIn('nama_kegiatan_relasi', $kegiatan->pluck('nama_kegiatan'))->get();
        $kodering = Kodering::latest()->get();

        return view('user.belanja.create',[
            'koderings' => $kodering,
            'subkegiatans' => $subKegiatan,
            'biros' => $biro
        ]);
    }

    public function searchForSubKegiatan(Request $request) : JsonResponse {
        $data = SubKegiatan::where('id', $request->sub_kegiatan_id)->with('kegiatan.program')->first();

        return response()->json([
            'data' => $data
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'tanggal_belanja' => 'required',
            'biro_id' => 'required',
            'program_id' => 'required',
            'kegiatan_id' => 'required',
            'sub_kegiatan_id' => 'required',
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
            'subkegiatan_id' => $request->sub_kegiatan_id,
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
        $belanja = Belanja::with('kodering', 'subkegiatan', 'program', 'kegiatan', 'biro')
        ->find($id);
 
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
            'biro_id' => 'required',
            'program_id' => 'required',
            'kegiatan_id' => 'required',
            'sub_kegiatan_id' => 'required',
            'kodering_id' => 'required',
            'jenis_belanja' => 'required',
            'nobukti' => 'required',
            'pengeluaran' => 'required',
            'uraian' => 'required',
        ]);

        $belanja = Belanja::find($id);

        $belanja->update([
            'tanggal_belanja' => $request->tanggal_belanja,
            'biro_id' => $request->biro_id,
            'program_id' => $request->program_id,
            'kegiatan_id' => $request->kegiatan_id,
            'sub_kegiatan_id' => $request->sub_kegiatan_id,
            'kodering_id' => $request->kodering_id,
            'jenis_belanja' => $request->jenis_belanja,
            'nobukti' => $request->nobukti,
            'pengeluaran' => $request->pengeluaran,
            'uraian' => $request->uraian,
        ]);

        return redirect()->route('belanjas.index')->with('success', 'Belanja berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $belanjas = Belanja::with('verifikasi', 'pengesahan')->find($id);
        // dd($belanjas);
        if ($belanjas->pengesahan->sah == 'disetujui' && $belanjas->verifikasi->verif == 'verified') {
            // Hapus entitas jika pengesahan sudah dilakukan dan verifikasi sudah diverifikasi
            $belanjas->delete();
    
            return redirect()->route('belanjas.index')->with('success', 'Pelimpahan berhasil dihapus.');
        } else {
            return redirect()->route('belanjas.index')->with('error', 'Tidak dapat menghapus pelimpahan yang belum diverifikasi atau belum disahkan.');
        }

    }

    public function export() 
    {
        $belanjas = Belanja::all();
        return Excel::download(new RincianExport($belanjas), 'rincian.xlsx');
    }
}
