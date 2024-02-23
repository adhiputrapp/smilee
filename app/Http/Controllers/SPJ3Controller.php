<?php

namespace App\Http\Controllers;

use App\Exports\SPJ3Export;
use App\Models\Kegiatan;
use App\Models\Belanja;
use App\Models\Kodering;
use App\Models\SubKegiatan;
use App\Models\Program;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Maatwebsite\Excel\Facades\Excel;
use Carbon\Carbon;

class SPJ3Controller extends Controller
{
    public $request;

    public function __construct(Request $request) {
        $this->request = $request;
    }

    public function index() : View {
        $user = $this->request->user()->biro;
        $program = Program::latest()->get();
        $kegiatan = Kegiatan::whereIn('nama_program_relasi', $program->pluck('nama_program'))->get();
        $subKegiatan = SubKegiatan::whereIn('nama_kegiatan_relasi', $kegiatan->pluck('nama_kegiatan'))->get();
        $kodering = Kodering::latest()->get();

        return view('laporan.spj3.index', [
            'koderings' => $kodering,
            'subKegiatan' => $subKegiatan,
            'user' => $user
        ]);
    }

    public function export() {
        $spj = Belanja::with('biro','program','kegiatan','subkegiatan','kodering', 'verifikasi', 'saldo.pelimpahan', 'pajak')
            ->where('subkegiatan_id', $this->request->sub_kegiatan_id)
            ->where('kodering_id', $this->request->kodering_id)
            ->whereMonth('tanggal_belanja', explode('-', $this->request->tanggal)[1])
            ->whereYear('tanggal_belanja', explode('-', $this->request->tanggal)[0])
            ->get();
            // $totalPajakPerKodering = [];

            // // Iterasi setiap belanja untuk menghitung total pajak per kodering
            // foreach ($spj as $belanja) {
            //     $totalPajak = $belanja->pajak->sum('nominal'); // Ambil total pajak untuk belanja ini
            //     $koderingId = $belanja->kodering_id; // Ambil ID kodering dari belanja ini
        
            //     // Jika kodering sudah ada dalam array totalPajakPerKodering, tambahkan total pajak ke total yang sudah ada
            //     // Jika belum ada, inisialisasi total pajak untuk kodering tersebut
            //     if (isset($totalPajakPerKodering[$koderingId])) {
            //         $totalPajakPerKodering[$koderingId] += $totalPajak;
            //     } else {
            //         $totalPajakPerKodering[$koderingId] = $totalPajak;
            //     }
            // }
        $eom = Carbon::createFromDate(explode('-', $this->request->tanggal)[0], 
        explode('-', $this->request->tanggal)[1], 
        1 );
        $total = $spj->groupBy('kodering_id', 'jenis_belanja')->map(function ($items) {
            return $items->pluck('pengeluaran')->sum();
        });
        $koderingId = $this->request->input('kodering_id');
        $saldoBulanLalu = $spj->filter(function ($item) use ($koderingId) {
            return $item->kodering_id == $koderingId &&
                Carbon::parse($item->tanggal_belanja)->month < explode('-', $this->request->tanggal)[1] &&
                Carbon::parse($item->tanggal_belanja)->year == explode('-', $this->request->tanggal)[0];
        })->sum('pengeluaran');
        $totalPajak = [];

        foreach ($spj as $belanja) {
            foreach ($belanja->pajak as $pajak) {
                // Jika keterangan sudah ada dalam array, tambahkan nominal pajak ke total yang ada
                if (isset($totalPajak[$pajak->keterangan])) {
                    $totalPajak[$pajak->keterangan] += $pajak->nominal;
                } else {
                    // Jika keterangan belum ada dalam array, inisialisasi total dengan nominal pajak saat ini
                    $totalPajak[$pajak->keterangan] = $pajak->nominal;
                }
            }
        }

        // Iterasi melalui setiap item Belanja
        // foreach ($spj as $belanja) {
        //     // Iterasi melalui setiap item pajak dari belanja saat ini
        //     foreach ($belanja->pajak as $pajak) {
        //         // Akumulasi nominal pajak
        //         $totalPajak += $pajak->nominal;
        //     }
        // }
    
        // $saldoBulanLalu = $spj->where('subkegiatan_id', $this->request->sub_kegiatan_id)
        // ->where('kodering_id', $this->request->koderingId) // Sesuaikan dengan id kodering yang diinginkan
        // ->whereMonth('tanggal_belanja', '<', explode('-', $this->request->tanggal)[1])
        // ->whereYear('tanggal_belanja', explode('-', $this->request->tanggal)[0])
        // ->sum('pengeluaran');
        // $total = $spj->groupBy(['kodering_id', 'jenis_belanja'])->map(function ($items) {
        //     // $koderingId = $items->first()->kodering_id;
        //   return[
        //         'total_pengeluaran' => $items->pluck('pengeluaran')->sum(),
        //         // 'kodering_id' => $items->first()->kodering_id, // Mengambil kodering_id dari salah satu item
        //     ];
        // });
        // $tahun = explode('-', $this->request->tanggal);
        // $subKegiatan = SubKegiatan::with('kegiatan')->find($this->request->sub_kegiatan);
        // $kegiatan = Kegiatan::with('program')->find($subKegiatan->kegiatan->id);

        // dd($spj);

        return Excel::download(new SPJ3Export(
            $spj,
            $eom,
            $total,
            $saldoBulanLalu,
            $totalPajak,
            // $totalPajakPerKeterangan,
            // explode('-', $this->request->tanggal)[0],
            // Carbon::now()->month(explode('-', $this->request->tanggal)[1]),
            // $tahun,
            // $data->where('jenis_belanja', 'LS')->pluck('subkegiatan_id')->sum('pengeluaran'),
            // $data->where('jenis_belanja', 'TU')->pluck('subkegiatan_id')->sum('pengeluaran'),
            // $data->where('jenis_belanja', 'UP/GU')->pluck('subkegiatan_id')->sum('pengeluaran'),
            // $subKegiatan,
            // $kegiatan,
            // $kegiatan->program,
        ), 'SPJ3.xlsx');

    //     dd($data);

    // return view('laporan.spj3.export', [
    //     'data' => $data,
    // ]);
        // return view('laporan.spj3.export', [
        //     'tahun' => $tahun,
        //     'subKegiatan' => $subKegiatan,
        //     'kegiatan' => $kegiatan,
        //     'program' => $kegiatan->program
        // ]);
    }
}
