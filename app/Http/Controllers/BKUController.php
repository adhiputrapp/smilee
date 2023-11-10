<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\View\View;
use App\Models\Belanja;
use App\Models\SubKegiatan;
use App\Models\Kodering;
use App\Exports\BKUExport;
use Maatwebsite\Excel\Facades\Excel;

class BKUController extends Controller
{
    public function index()
    {
        $subkegiatans = SubKegiatan::all(); // Mengambil semua subkegiatan
        return view('user.laporan.index', compact('subkegiatans'));
    }

    public function search()
    {

    }

    public function export(Request $request)
    {
        // Validasi form
        $request->validate([
            'bulan' => 'required',
            'tahun' => 'required',
            'sukegiatan_id' => 'required',
        ]);

        // Ambil data belanja berdasarkan filter
        $belanjas = Belanja::whereHas('pengesahan', function ($query) {
                $query->where('sah', 'disetujui');
            })
            ->with('biro','program','kegiatan','subkegiatan','kodering', 'verifikasi')
            ->whereMonth('tanggal_belanja', $request->bulan)
            ->whereYear('tanggal_belanja', $request->tahun)
            ->where('subkegiatan_id', $request->subkegiatan_id)
            ->get();
            $tahunAnggaran = $request->tahun;
            $exportData = $belanjas->map(function ($item) {
                return [
                    'No' => $item->id,
                    'Tanggal' => $item->tanggal_belanja,
                    'Nobukti' => $item->nobukti,
                    'Uraian' => $item->uraian,
                    'Kode Rekening' => $item->kodering->kode_rekening,
                    // 'Penerimaan' => $item->penerimaan,
                    'Pengeluaran' => $item->pengeluaran,
                    'Sub Kegiatan' => $item->subKegiatan->nama_sub_kegiatan, 
                    // 'Saldo' => $item->saldo,
                    // Sesuaikan dengan kolom-kolom lain yang dibutuhkan
                ];
            });           

        // $view = view('user.laporan.bku', compact('belanjas', 'request'))->render();

        // return Excel::download(new BKUExport($belanjas), 'BKU.xlsx');

        return view('user.laporan.bku',[
            'belanjas' => $belanjas,
            'tahun' => $tahunAnggaran
        ]);
    }

    

    // public function export()
    // {
    //     $belanjas = Belanjaa::whereHas('subkegiatan');
    // }
}
