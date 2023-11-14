<x-app-layout>
    <h1 class="mb-6 text-3xl font-bold border-b-2">Laporan BKU</h1>


    <div class="mb-3 w-full">

        <form action="{{route('laporan.export')}}" method="GET">
            @csrf
            <div class="relative mb-4 flex w-full gap-x-2">
                <h1 class="mt-3 mr-1">Bulan</h1>
                <select name="bulan" id="bulan"
                    class="block mt-1 w-1/4 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                    <option value="">-</option>
                    @for ($i = 1; $i <= 12; $i++)
                    <option value="{{ date('F', mktime(0, 0, 0, $i, 1)) }}">{{ date('F', mktime(0, 0, 0, $i, 1)) }}</option>
                @endfor
                </select>
            </div>
    
            <div class="relative mb-4 flex w-full gap-x-2">
                <h1 class="mt-3">Tahun</h1>
                <select name="tahun" id="tahun"
                    class="block mt-1 w-1/4 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                    <option value="">-</option>
                    @php
                    $currentYear = date('Y');
                    $startYear = 2020;
                    @endphp
                    @for ($year = $currentYear; $year >= $startYear; $year--)
                        <option value="{{ $year }}">{{ $year }}</option>
                    @endfor
                </select>
            </div>
    </div>

    <div class="mb-3 w-full">
        <h1 class="mt-3">Sub Kegiatan</h1>

                <div class="relative mb-4 flex w-full gap-x-2">
                    <select name="subkegiatan_id" id="subkegiatan_id"
                        class="block mt-1 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                        <option value="">-</option>
                        @foreach($subkegiatans as $subkegiatan)
                            <option value="{{ $subkegiatan->id }}">{{ $subkegiatan->nama_sub_kegiatan }}</option>
                        @endforeach
                    </select>

                    <button type="submit"
                        class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        Export</button>
                </div>
            </form>

    </div>
    
    @push('script')
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    {{-- <script>
        $(document).ready(function() 
        {
            // Isi dropdown bulan
            const months = [
                'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
                'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
            ];
            const monthDropdown = $('#bulan');
            months.forEach((month, index) => {
                monthDropdown.append($('<option></option>').attr('value', index + 1).text(month));
            });
    
            // Isi dropdown tahun (contoh tahun dari 2020 hingga 2030)
            const currentYear = new Date().getFullYear();
            const yearDropdown = $('#tahun');
            for (let year = currentYear; year >= 2020; year--) {
                yearDropdown.append($('<option></option>').attr('value', year).text(year));
            };
        });
    </script> --}}
    <script>
        $(document).ready(function() {
        $('#sukegiatan_id').select2({
                placeholder: 'Cari Nama Subkegiatan',
                allowClear: true,
            });
        });
    </script>
    @endpush
</x-app-layout>