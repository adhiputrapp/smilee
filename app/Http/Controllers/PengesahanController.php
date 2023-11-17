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
use App\Models\Saldo;
use App\Models\Pelimpahan;

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

        $pengesahan = Pengesahan::updateOrCreate(
            ['belanja_id' => $belanja_id],
            [
                'sah' => $request->sah,
                'uraian' => $request->uraian
            ]
        );

        // if ($pengesahan->sah === 'disetujui') {
        //     try {
        //         // Pastikan bahwa belanja dengan ID yang sesuai benar-benar ada
        //         $belanja = Belanja::findOrFail($belanja_id);
    
        //         // Cek apakah ada pelimpahan terkait
        //         $pelimpahan = Pelimpahan::where('belanja_id', $belanja_id)->first();
    
        //         // Periksa apakah sudah ada saldo untuk biro yang bersangkutan
        //         $existingSaldo = Saldo::where('biro_id', $belanja->biro_id)
        //             ->where(function ($query) use ($belanja_id, $pelimpahan) {
        //                 $query->where('belanja_id', $belanja_id)
        //                     ->orWhere('pelimpahan_id', optional($pelimpahan)->id);
        //             })
        //             ->first();
    
        //         // Jika sudah ada saldo, buat data saldo baru
        //         if ($existingSaldo) {
        //             Saldo::create([
        //                 'belanja_id' => $belanja_id,
        //                 'biro_id' => $belanja->biro_id,
        //                 'pelimpahan_id' => optional($pelimpahan)->id,
        //                 'saldo' => $existingSaldo->saldo - $belanja->pengeluaran,
        //             ]);
        //         } else {
        //             // Jika belum ada saldo, buat saldo baru
        //             Saldo::create([
        //                 'belanja_id' => $belanja_id,
        //                 'biro_id' => $belanja->biro_id,
        //                 'saldo' => -$belanja->pengeluaran,
        //                 'pelimpahan_id' => optional($pelimpahan)->id,
        //             ]);
        //         }
        //     } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
        //         // Tangani kesalahan jika belanja tidak ditemukan
        //         return redirect()->back()->with('error', 'Belanja tidak ditemukan.');
        //     }
        // }
    

        return redirect()->route('pengesahans.index')->with('success', 'Pengesahan berhasil disimpan.');
    }

    // public function updateOrCreateSaldo($belanja_id)
    // {
    //     try {
    //         // Pastikan bahwa belanja dengan ID yang sesuai benar-benar ada
    //         $belanja = Belanja::findOrFail($belanja_id);

    //         // Cek apakah ada pelimpahan terkait
    //         $pelimpahan = Pelimpahan::where('belanja_id', $belanja_id)->first();

    //         // Periksa apakah sudah ada saldo untuk biro yang bersangkutan
    //         $existingSaldo = Saldo::where('biro_id', $belanja->biro_id)
    //             ->where(function ($query) use ($belanja_id, $pelimpahan) {
    //                 $query->where('belanja_id', $belanja_id)
    //                     ->orWhere('pelimpahan_id', optional($pelimpahan)->id);
    //             })
    //             ->first();

    //         // Jika sudah ada saldo, buat data saldo baru
    //         if ($existingSaldo) {
    //             Saldo::create([
    //                 'belanja_id' => $belanja_id,
    //                 'biro_id' => $belanja->biro_id,
    //                 'pelimpahan_id' => optional($pelimpahan)->id,
    //                 'saldo' => $existingSaldo->saldo - $belanja->pengeluaran,
    //             ]);
    //         } else {
    //             // Jika belum ada saldo, buat saldo baru
    //             Saldo::create([
    //                 'belanja_id' => $belanja_id,
    //                 'biro_id' => $belanja->biro_id,
    //                 'saldo' => -$belanja->pengeluaran,
    //                 'pelimpahan_id' => optional($pelimpahan)->id,
    //             ]);
    //         }
    //     } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
    //         // Tangani kesalahan jika belanja tidak ditemukan
    //         return redirect()->back()->with('error', 'Belanja tidak ditemukan.');
    //     } catch (\Exception $e) {
    //         // Tangani kesalahan lainnya
    //         return redirect()->back()->with('error', 'Terjadi kesalahan. Silakan coba lagi.');
    //     }
    // }

    // public function tambahSaldo($belanja_id, $pelimpahan_id)
    // {
    //     // try {
    //     //     // Pastikan bahwa belanja dengan ID yang sesuai benar-benar ada
    //     //     $belanja = Belanja::findOrFail($belanja_id);

    //     //     // Periksa apakah sudah ada saldo untuk biro yang bersangkutan
    //     //     $saldo = Saldo::where('biro_id', $belanja->biro_id)->first();

    //     //     // Jika sudah ada saldo, tambahkan jumlah pengeluaran belanja ke saldo
    //     //     if ($saldo) {
    //     //         $saldo->saldo -= $belanja->pengeluaran;
    //     //         $saldo->save();
    //     //     } else {
    //     //         // Jika belum ada saldo, buat saldo baru
    //     //         Saldo::create([
    //     //             'belanja_id' => $belanja_id,
    //     //             'biro_id' => $belanja->biro_id,
    //     //             'saldo' => -$belanja->pengeluaran,
    //     //         ]);
    //     //     }
    //     try {
    //         // Pastikan bahwa belanja dengan ID yang sesuai benar-benar ada
    //         $belanja = Belanja::findOrFail($belanja_id);
    
    //         // Periksa apakah sudah ada saldo untuk biro yang bersangkutan
    //         $existingSaldo = Saldo::where('biro_id', $belanja->biro_id)->first();
    
    //         // Jika sudah ada saldo, buat data saldo baru dengan catatan
    //         if ($existingSaldo) {
    //             Saldo::create([
    //                 'belanja_id' => $belanja_id,
    //                 'pelimpahan_id' => $pelimpahan_id,
    //                 'biro_id' => $belanja->biro_id,
    //                 'saldo' => $existingSaldo->saldo - $belanja->pengeluaran,
    //             ]);
    //         } else {
    //             // Jika belum ada saldo, buat saldo baru
    //             Saldo::create([
    //                 'belanja_id' => $belanja_id,
    //                 'pelimpahan_id' => $pelimpahan_id,
    //                 'biro_id' => $belanja->biro_id,
    //                 'saldo' => -$belanja->pengeluaran,
    //             ]);
    //         }
    
    //         return redirect()->back()->with('success', 'Saldo berhasil ditambahkan.');
    //     } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
    //         return redirect()->back()->with('error', 'Belanja tidak ditemukan.');
    //     }
    // }
}
