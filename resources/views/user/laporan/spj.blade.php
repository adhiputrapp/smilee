<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    @vite(['resources/css/app.css', 'resources/js/app.js'])

</head>
<body class="max-w-max">
    <table class="text-xs table-auto border-collapse" id="table">
        <thead>
            <tr>
                <th colspan="2" rowspan="4" class="border p-2" style="border-color: black;">FOTO</th>
            </tr>
            <tr>       
                <th colspan="6" class="border p-2" style="border-color: black;">PEMERINTAH PROVINSI JAWA BARAT</th>
            </tr>
            <tr>
                <th colspan="6" class="border p-2" style="border-color: black;">BIRO UMUM SETDA PROVINSI JAWA BARAT</th>  
            </tr>
            <tr>
                <th colspan="6" class="border p-2" style="border-color: black;" >TAHUN ANGGARAN 2023</th>
            </tr>
            <tr>
                <th colspan="8" class="border p-2" style="border-color: black;" >BUKU KAS UMUM</th>
            </tr>
            <tr>
                <th colspan="8" class="border p-2" style="border-color: black;" >SUB KEGIATAN PELAKSANAAN PENATAUSAHAAN DAN PENGUJIAN/VERIFIKASI KEUANGAN SKPD</th>
            </tr>
            <tr>
                <th colspan="8" class="border p-2" style="border-color: black;" >PERIODE : 1 s.d. 30 Juni 2023</th>
            </tr>
            <tr>
                <th class="border p-2" style="border-color: black;">No</th>
                <th class="border p-2" style="border-color: black;">Tanggal</th>
                <th class="border p-2" style="border-color: black;">No. Bukti</th>
                <th class="border p-2" style="border-color: black;">Uraian</th>
                <th class="border p-2" style="border-color: black;">Kode Rekening</th>
                <th class="border p-2" style="border-color: black;">Penerimaan</th>
                <th class="border p-2" style="border-color: black;">Pengeluaran</th>
                <th class="border p-2" style="border-color: black;">Saldo</th>
            </tr>
            <tr>
                <th class="border p-2" style="border-color: black;">1</th>
                <th class="border p-2" style="border-color: black;">2</th>
                <th class="border p-2" style="border-color: black;">3</th>
                <th class="border p-2" style="border-color: black;">4</th>
                <th class="border p-2" style="border-color: black;">5</th>
                <th class="border p-2" style="border-color: black;">6</th>
                <th class="border p-2" style="border-color: black;">7</th>
                <th class="border p-2" style="border-color: black;">8</th>
            </tr>
        </thead>
        <tbody>
            <td class="border p-2 text-center" style="border-color: black;">
                {{-- {{ $loop->iteration }} --}}1
            </td>
            <td class="border p-2 text-center" style="border-color: black;">
                {{-- {{ $loop->iteration }} --}}1
            </td>
            <td class="border p-2 text-center" style="border-color: black;">
                {{-- {{ $loop->iteration }} --}}1
            </td>
            <td class="border p-2 text-center" style="border-color: black;">
                {{-- {{ $loop->iteration }} --}}1
            </td>
            <td class="border p-2 text-center" style="border-color: black;">
                {{-- {{ $loop->iteration }} --}}1
            </td>
            <td class="border p-2 text-center" style="border-color: black;">
                {{-- {{ $loop->iteration }} --}}1
            </td>
            <td class="border p-2 text-center" style="border-color: black;">
                {{-- {{ $loop->iteration }} --}}1
            </td>
            <td class="border p-2 text-center" style="border-color: black;">
                {{-- {{ $loop->iteration }} --}}1
            </td>
        </tbody>
    </table>
    
</body>
</html>