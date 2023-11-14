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
        $verifiedBelanja = Belanja::with('biro','program','kegiatan','subkegiatan','kodering')
        ->whereHas('verifikasi', function ($query) {
            $query->where('verif', 'verified');
        })->get();

        return view('pengesahan.index', compact('verifiedBelanja'));
    }

    public function showPengesahanForm($belanja_id)
    {
        $belanja = Belanja::findOrFail($belanja_id);
        return view('pengesahan.create', compact('belanja'));
    }

    public function pengesahan(Request $request, $belanja_id)
    {
        $request->validate([
            'sah' => 'required|in:disetujui,ditolak', // Sesuaikan dengan opsi pengesahan
        ]);

        Pengesahan::updateOrCreate(
            ['belanja_id' => $belanja_id],
            [
                'sah' => $request->sah,
                'uraian' => $request->uraian
            ]
        );

        return redirect()->route('pengesahans.index')->with('success', 'Pengesahan berhasil disimpan.');
    }
}
