<x-app-layout>
    <h1 class="text-3xl font-bold border-b-2">Input Anggaran</h1>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-gradient-to-tr from-slate-300 to-slate-400 overflow-hidden shadow-sm sm:rounded-lg p-4 mb-4">

                <form action="{{ route('anggarans.store') }}" method="POST">
                    @csrf
                    <div class="form-group mb-5">
                        <x-input-label for="subkegiatan_id" :value="__('Nama Sub Kegiatan')"/>
                        <select id="subkegiatan_id" name="subkegiatan_id" class="block mt-1 w-full" required>
                            @foreach ($subkegiatans as $subkegiatan)
                                <option value="{{$subkegiatan->id}}">{{$subkegiatan->nama_sub_kegiatan}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="kodering_id" :value="__('Nama Kodering')"/>
                        <select id="kodering_id" name="kodering_id" class="block mt-1 w-full" required>
                            @foreach ($koderings as $kodering)
                                <option value="{{$kodering->id}}">{{$kodering->nama_kodering}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="tanggal_anggaran" :value="__('Tanggal')"/>
                        <x-text-input type="date" name="tanggal_anggaran" id="tanggal_anggaran" class="block mt-1 w-full" required/>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="jumlah_anggaran" :value="__('Nominal')"/>
                        <x-text-input type="number" name="jumlah_anggaran" id="jumlah_anggaran" class="block mt-1 w-full" required/>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="uraian" :value="__('Uraian')"/>
                        <x-text-input type="text" name="uraian" id="uraian" class="block mt-1 w-full" required/>
                    </div>
                    <button type="submit" class="btn btn-primary inline-block rounded bg-gradient-to-r from-blue-700 to-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Simpan</button>
                </form> 
            </div>
        </div>
    </div>   
    @push('script')
        <script>
        $(document).ready(function() {
            $('#subkegiatan_id').select2({
                placeholder: 'Cari nama subkegiatan',
                allowClear: true,
            });
            $('#kodering_id').select2({
                placeholder: 'Cari nama subkegiatan',
                allowClear: true,
            });
        });
        </script>
    @endpush
</x-app-layout>