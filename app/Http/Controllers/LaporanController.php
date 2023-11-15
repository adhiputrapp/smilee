<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Str;
use Illuminate\View\View;
use App\Models\Belanja;
use App\Exports\RincianExport;
use Maatwebsite\Excel\Facades\Excel;

class LaporanController extends Controller
{
    public function index(): view
    {
        // $bkuData = Belanja::whereHas('pengesahan', function ($query) {
        //     $query->where('sah', 'disetujui');
        // })->with('kodering','subkegiatan')
        // ->get();
        
        // return view('user.laporan.index', compact('bkuData'));
    } 

    public function exportBKU(Request $request) 
    {   
        return Excel::download(new RincianExport(),'rincian.xls');
    }
}
