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
                <th rowspan="5" colspan="2" class="border border-black">
                    {{-- <img src="{{ asset('logo.svg') }}" class="w-16" /> --}}
                </th>
                <th class="text-left border border-black whitespace-nowrap">PEMERINTAH PROVINSI JAWA BARAT</th>
            </tr>
            <tr>
                <th class="text-left border border-black whitespace-nowrap">BIRO UMUM SETDA PROVINSI JAWA BARAT</th>
            </tr>
            <tr>
                <th class="text-left border border-black whitespace-nowrap">TAHUN ANGGARAN {{ $tahun }}</th>
            </tr>
            <tr>
                <th class="text-left border border-black whitespace-nowrap"></th>
            </tr>
            <tr>
                <th class="text-left border border-black whitespace-nowrap"></th>
            </tr>
            <tr>
                <th class="text-left border border-black whitespace-nowrap"></th>
            </tr>
            <tr>
                <th colspan="3" class="border border-black text-left whitespace-nowrap">Kode Rekening</th>
                <th class="border border-black text-left whitespace-nowrap"> : {{ $kodering->kode_kodering }}</th>
            </tr>
            <tr>
                <th colspan="3" class="border border-black text-left whitespace-nowrap">Nama Rekening</th>
                <th class="border border-black text-left whitespace-nowrap"> : {{ $kodering->nama_kodering }}</th>
            </tr>
            <tr>
                <th colspan="3" class="border border-black text-left whitespace-nowrap">Jumlah Anggaran (DPA)</th>
                <th class="border border-black text-left whitespace-nowrap">{{ $anggaran->jumlah_anggaran }} </th>
            </tr>
            <tr>
                <th colspan="3" class="border border-black text-left whitespace-nowrap">Jumlah Anggaran (DPPA)</th>
                <th class="border border-black text-left whitespace-nowrap"> : </th>
            </tr>
            <tr>
                <th colspan="8" class="whitespace-nowrap">BUKU PEMBANTU SUB RINCIAN OBJEK BELANJA</th>
            </tr>
            <tr>
                <th colspan="8" class="whitespace-nowrap">Periode : 1 sd. {{ explode(' ', explode('-', $eom)[2])[0] }} {{ date('F Y') }}</th>
            </tr>
            <tr>
                <th colspan="8">&nbsp;</th>
            </tr>
            <tr>
                <th rowspan="2" class="border border-black">No.</th>
                <th rowspan="2" class="border border-black">Tanggal</th>
                <th rowspan="2" class="border border-black">No.BKU</th>
                <th rowspan="2" class="border border-black">URAIAN</th>
                <th rowspan="2" class="border border-black">BELANJA LS</th>
                <th rowspan="2" class="border border-black">BELANJA TU</th>
                <th rowspan="2" class="border border-black">BELANJA UP/GU</th>
                <th rowspan="2" class="border border-black">SALDO</th>
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
            </tr>
            <tr>
                <th class="border border-black">1</th>
                <th class="border border-black">2</th>
                <th class="border border-black">3</th>
                <th class="border border-black">4</th>
                <th class="border border-black">5</th>
                <th class="border border-black">6</th>
                <th class="border border-black">7</th>
                <th class="border border-black">8</th>
            </tr>
        </thead>
        <tbody>
            @php
                $totalPengeluaran = 0;
            @endphp
            <tr>
                <td class="border border-black"></td>
                <td class="border border-black"></td>
                <td class="border border-black"></td>
                <td class="border border-black whitespace-nowrap">Saldo Awal Bulan</td>
                <td class="border border-black"></td>
                <td class="border border-black"></td>
                <td class="border border-black"></td>
                <td class="border border-black">{{ $pelimpahan->jumlah_pelimpahan }}</td>
            </tr>
            @foreach ($data as $item)
                <tr>
                    <td class="border border-black text-center">{{ $loop->iteration }}</td>
                    <td class="border border-black text-center">{{ $item->tanggal_belanja->format('j F Y') }}</td>
                    <td class="border border-black text-center">{{ $item->nobukti }}</td>
                    <td class="border border-black text-left whitespace-nowrap">{{ $item->uraian }}</td>
                    <td class="border border-black text-right">
                        @if ($item->jenis_belanja == 'LS')
                            {{ $item->pengeluaran }}
                        @endif
                    </td>
                    <td class="border border-black text-right">
                        @if ($item->jenis_belanja == 'TU')
                            {{ $data }}
                        @endif
                    </td>
                    <td class="border border-black text-right">
                        @if ($item->jenis_belanja == 'UP/GU')
                            {{ $item->pengeluaran }}
                        @endif
                    </td>
                    <td class="border border-black text-right">
                        {{ $pelimpahan->jumlah_pelimpahan - $item->pengeluaran }}
                    </td>
                </tr>
                @php
                    $totalPengeluaran += $item->pengeluaran;
                @endphp
            @endforeach
        </tbody>
        <tfoot>
            <tr>
                <td class="border border-black"></td>
                <td class="border border-black"></td>
                <td class="border border-black"></td>
                <td class="border border-black text-left">Jumlah</td>
                <td class="border border-black text-right">
                    @if ($item->jenis_belanja == 'LS')
                        {{ $sumLS }}
                    @endif
                </td>
                <td class="border border-black text-right">
                    @if ($item->jenis_belanja == 'TU')
                        {{ $sumTU }}
                    @endif
                </td>
                <td class="border border-black text-right">
                    @if ($item->jenis_belanja == 'UP/GU')
                        {{ $sumUPGU }}
                    @endif
                </td>
                <td class="border border-black text-right">
                    
                </td>
            </tr>
            <tr>
                <td colspan="8">&nbsp;</td>
            </tr>
            <tr>
                <td colspan="5">&nbsp;</td>
                <td colspan="3" class="text-center">Bandung, {{ date('d F Y') }}</td>
            </tr>
            <tr>
                <td colspan="8">&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td class="text-center">Disetujui Oleh,</td>
                <td class="text-center">&nbsp;</td>
                <td class="text-center">&nbsp;</td>
                <td colspan="3" class="text-center">Disiapkan oleh,</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td class="text-center">Kuasa Pengguna Anggaran</td>
                <td class="text-center">&nbsp;</td>
                <td class="text-center">&nbsp;</td>
                <td colspan="3" class="text-center whitespace-nowrap">Bendahara Pengeluaran Pembantu,</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>