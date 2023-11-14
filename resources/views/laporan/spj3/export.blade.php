<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
    <table class="table-auto">
        <thead>
            <tr>
                <th rowspan="5" class="border border-black">
                    {{-- <img src="{{ asset('logo.svg') }}" class="w-16" /> --}}
                </th>
                <th class="text-left border border-black whitespace-nowrap">PEMERINTAH PROVINSI JAWA BARAT</th>
            </tr>
            <tr>
                <th class="text-left border border-black whitespace-nowrap">BIRO UMUM SETDA PROVINSI JAWA BARAT</th>
            </tr>
            <tr>
                <th class="text-left border border-black whitespace-nowrap">TAHUN ANGGARAN {{ $tahun[0] }}</th>
            </tr>
            <tr>
                <th class="text-left border border-black whitespace-nowrap"></th>
            </tr>
            <tr>
                <th class="text-left border border-black whitespace-nowrap"></th>
            </tr>
            <tr>
                <th colspan="14" class="whitespace-nowrap">LAPORAN PERTANGGUNGJAWABAN BENDAHARA PENGELUARAN PEMBANTU</th>
            </tr>
            <tr>
                <th colspan="14" class="whitespace-nowrap">SPJ Administratif</th>
            </tr>
            <tr>
                <th colspan="14" class="whitespace-nowrap">Bulan : {{ Carbon\Carbon::now()->month($tahun[1])->locale('id')->monthName }} {{ $tahun[0] }}</th>
            </tr>
            <tr>
                <th colspan="2" class="border border-black text-left whitespace-nowrap">Kuasa Pengguna Anggaran </th>
                <th class="border border-black text-left whitespace-nowrap"> : </th>
            </tr>
            <tr>
                <th colspan="2" class="border border-black text-left whitespace-nowrap">Bendahara Pengeluaran Pembantu</th>
                <th class="border border-black text-left whitespace-nowrap"> : </th>
            </tr>
            <tr>
                <th colspan="2" class="border border-black text-left whitespace-nowrap">Program</th>
                <th class="border border-black text-left whitespace-nowrap"> : {{ $program->kode_program }} {{ $program->nama_program }}</th>
            </tr>
            <tr>
                <th colspan="2" class="border border-black text-left whitespace-nowrap">Kegiatan</th>
                <th class="border border-black text-left whitespace-nowrap"> : {{ $kegiatan->kode_kegiatan }} {{ $kegiatan->nama_kegiatan }}</th>
            </tr>
            <tr>
                <th colspan="2" class="border border-black text-left whitespace-nowrap">Sub Kegiatan</th>
                <th class="border border-black text-left whitespace-nowrap"> : {{ $subKegiatan->kode_sub_kegiatan }} {{ $subKegiatan->nama_sub_kegiatan }}</th>
            </tr>
            <tr>
                <th colspan="2" class="border border-black text-left whitespace-nowrap">Tahun Anggaran </th>
                <th class="border border-black text-left whitespace-nowrap"> : {{ $tahun[0] }}</th>
            </tr>
            <tr>
                <th colspan="14" class="border border-black text-left whitespace-nowrap"></th>
            </tr>
            <tr>
                <th rowspan="3" class="border border-black">KODE REKENING</th>
                <th rowspan="3" colspan="2" class="border border-black">URAIAN</th>
                <th rowspan="3" class="border border-black">JUMLAH ANGGARAN</th>
                <th colspan="3" class="border border-black">SPJ - LS GAJI</th>
                <th colspan="3" class="border border-black">SPJ - LS BARANG &amp; JASA</th>
                <th colspan="3" class="border border-black">SPJ - UP / GU / TU</th>
                <th rowspan="3" class="border border-black">JUMLAH SPJ (LS+UP+GU+TU) Sd. BULAN INI</th>
                <th rowspan="3" class="border border-black">SISA PAGU ANGGARAN</th>
            </tr>
            <tr>
                <th rowspan="2" class="border border-black">Sd. BULAN LALU</th>
                <th rowspan="2" class="border border-black">BULAN INI</th>
                <th rowspan="2" class="border border-black">Sd. BULAN INI</th>
                <th rowspan="2" class="border border-black">Sd. BULAN LALU</th>
                <th rowspan="2" class="border border-black">BULAN INI</th>
                <th rowspan="2" class="border border-black">Sd. BULAN INI</th>
                <th rowspan="2" class="border border-black">Sd. BULAN LALU</th>
                <th rowspan="2" class="border border-black">BULAN INI</th>
                <th rowspan="2" class="border border-black">Sd. BULAN INI</th>
            </tr>
            <tr>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
            </tr>
            <tr>
                <th class="border border-black">1</th>
                <th colspan="2" class="border border-black">2</th>
                <th class="border border-black">3</th>
                <th class="border border-black">4</th>
                <th class="border border-black">5</th>
                <th class="border border-black">6</th>
                <th class="border border-black">7</th>
                <th class="border border-black">8</th>
                <th class="border border-black">9</th>
                <th class="border border-black">10</th>
                <th class="border border-black">11</th>
                <th class="border border-black">12</th>
                <th class="border border-black">13</th>
                <th class="border border-black">14</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th class="border border-black"></th>
                <th class="border border-black" colspan="2"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th class="border border-black"></th>
                <th class="border border-black" colspan="2"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black">Bandung, {{ date('d F Y') }}</th>
                <th class="border border-black"></th>
            </tr>
            <tr>
                <th class="border border-black"></th>
                <th class="border border-black">Disetujui oleh,</th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black">Disiapkan oleh,</th>
                <th class="border border-black"></th>
            </tr>
            <tr>
                <th class="border border-black"></th>
                <th class="border border-black">Kuasa Pengguna Anggaran</th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black"></th>
                <th class="border border-black">Bendahara Pengeluaran Pembantu</th>
                <th class="border border-black"></th>
            </tr>
        </tfoot>
    </table>
</body>
</html>