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
        return view('verifikasi.index',[
            'verifikasis' => Verifikasi::with('belanja')->get()
        ]);
    }
}
