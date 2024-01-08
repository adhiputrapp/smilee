<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Belanja;
use App\Models\Anggaran;

class DashboardController extends Controller
{
    public function index()
    {
        $dataBelanja = $this->tampilkanGrafik();
        $anggaran = $this->anggaran();
        return view('dashboard', ['dataBelanja' => $dataBelanja, 'anggaran'=> $anggaran]);
    }

    public function tampilkanGrafik()
    {
        $dataBelanja = Belanja::selectRaw('SUM(pengeluaran) as total_pengeluaran, MONTH(tanggal_belanja) as bulan')
            ->groupBy('bulan')
            ->get();

        $dataBelanja->transform(function ($item) {
            $item['bulan'] = date('F', mktime(0, 0, 0, $item['bulan'], 1));
            return $item;
        });      

        return $dataBelanja;
    }

    public function anggaran()
    {
        $anggaran = Anggaran::selectRaw('SUM(jumlah_anggaran) as total_anggaran, MONTH(tanggal_anggaran) as bulan_anggaran')
        ->groupBy('bulan_anggaran')
        ->get();

        $anggaran->transform(function ($item) {
            $item['bulan_anggaran'] = date('F', mktime(0, 0, 0, $item['bulan_anggaran'], 1));
            return $item;
        });      

        return $anggaran;
    }
}
