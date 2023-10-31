<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\View\View;
use App\Models\Belanja;
use App\Models\Verifikasi;

class VerifikasiController extends Controller
{
    public function index()
    {
        $unverifiedBelanja = Belanja::with('biro','program','kegiatan','subkegiatan','kodering')
        ->whereDoesntHave('verifikasi', function ($query) {
            $query->where('verif', 'verified');
        })->get();
        // dd($unverifiedBelanja);

        return view('verifikasi.index', compact('unverifiedBelanja'));
    }

    public function showVerifikasiForm($belanja_id)
    {
        $belanja = Belanja::findOrFail($belanja_id);
        return view('verifikasi.create', compact('belanja'));
    }

    public function verifikasi(Request $request, $belanja_id)
    {
        $request->validate([
            'verif' => 'required|in:verified,unverified' // Sesuaikan dengan opsi verifikasi
        ]);

        Verifikasi::updateOrCreate(
            ['belanja_id' => $belanja_id],
            ['verif' => $request->verif]
        );

        return redirect()->route('verifikasis.index')->with('success', 'Verifikasi berhasil disimpan.');
    }
}
