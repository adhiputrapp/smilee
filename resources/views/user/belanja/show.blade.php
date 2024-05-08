<x-app-layout>
    <h1>Detail Belanja</h1>

    
    <div>
        <p>Tanggal Belanja: {{ $belanja->tanggal_belanja }}</p>
        <p>Biro: {{ $belanja->biro->nama_biro }}</p>
        <p>Program: {{ $belanja->program->nama_program }}</p>
        <p>Kegiatan: {{ $belanja->kegiatan->nama_kegiatan }}</p>
        <p>Sub Kegiatan: {{ $belanja->subkegiatan->nama_sub_kegiatan }}</p>
        <p>Kodering: {{ $belanja->kodering->nama_kodering }}</p>
        <p>No Bukti: {{ $belanja->nobukti }}</p>
        <p>Jenis Belanja: {{ $belanja->jenis_belanja }}</p>
        <p>Pengeluaran: {{ $belanja->pengeluaran }}</p>
        <p>Uraian: {{ $belanja->uraian }}</p>
        <!-- Tambahkan informasi lainnya sesuai kebutuhan -->
    </div>

    {{-- @dd($belanja) --}}

    <!-- Jika terdapat data pajak -->
    @if($belanja->pajak->isNotEmpty())
    <h2>Detail Pajak</h2>
        @foreach ($belanja->pajak as $item)     
            <p>Keterangan Pajak: {{ $item->keterangan }}</p>
            <p>Jumlah Pajak: {{ $item->nominal }}</p>
        @endforeach
        <!-- Tambahkan informasi lainnya sesuai dengan struktur pajak -->
    @endif

    <!-- Jika terdapat file terlampir -->
    @if($belanja->files->isNotEmpty())
        <h2>File Terlampir</h2>
        <ul>
            @foreach($belanja->file as $file)
                <li><a href="{{ $file->url }}">{{ $file->nama }}</a></li>
            @endforeach
        </ul>
    @endif
</x-app-layout>