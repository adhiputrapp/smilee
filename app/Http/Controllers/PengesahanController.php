<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\View\View;
use App\Models\Belanja;
use App\Models\Verifikasi;
use App\Models\Pengesahan;

class PengesahanController extends Controller
{
    public function index()
    {
        $verifiedBelanja = Belanja::whereHas('verifikasi', function ($query) {
            $query->where('verif', 'verified');
        })->get();

        return view('pengesahan.index', compact('unverifiedBelanja'));
    }

    public function showVerifikasiForm($belanja_id)
    {
        $belanja = Belanja::findOrFail($belanja_id);
        return view('pengesahan.create', compact('belanja'));
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
