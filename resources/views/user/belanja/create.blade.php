<x-app-layout>
    <h1 class="text-3xl font-bold border-b-2">Input Belanja</h1>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-gradient-to-tr from-slate-300 to-slate-400 overflow-hidden shadow-sm sm:rounded-lg p-4 mb-4">

                <form action="{{ route('belanjas.store') }}" method="POST">
                    @csrf
                    <div class="form-group mb-5">
                        <x-input-label for="tanggal_belanja" :value="__('Tanggal Belanja')"/>
                        <x-text-input type="date" name="tanggal_belanja" id="tanggal_belanja" class="block mt-1 w-full" required/>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="biro_id" :value="__('Biro')"/>
                        <select id="nama_biro_relasi" name="biro_id" class="block mt-1 w-full" required>
                            @foreach ($biros as $biro)
                            <option value="{{$biro->id}}">{{$biro->nama_biro}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="program_id" :value="__('Program')"/>
                        <select id="nama_prgoram_relasi" name="program_id" class="block mt-1 w-full" required>
                            @foreach ($programs as $program)
                            <option value="{{$program->id}}">{{$program->nama_program}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="kegiatan_id" :value="__('Kegiatan')"/>
                        <select id="nama_kegiatan_relasi" name="kegiatan_id" class="block mt-1 w-full" required>
                            @foreach ($kegiatans as $kegiatan)
                            <option value="{{$kegiatan->id}}">{{$kegiatan->nama_kegiatan}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="subkegiatan_id" :value="__('Sub Kegiatan')"/>
                        <select id="nama_subkegiatan_relasi" name="subkegiatan_id" class="block mt-1 w-full" required>
                            @foreach ($subkegiatans as $subkegiatan)
                            <option value="{{$subkegiatan->id}}">{{$subkegiatan->nama_sub_kegiatan}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="kodering_id" :value="__('Kodering')"/>
                        <select id="nama_kodering_relasi" name="kodering_id" class="block mt-1 w-full" required>
                            @foreach ($koderings as $kodering)
                            <option value="{{$kodering->id}}">{{$kodering->nama_kodering}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="jenis_belanja" :value="__('Jenis Belanja')"/>
                        <select name="jenis_belanja" id="jenis_belanja" class="block mt-1 w-full" required>
                        <option value="UP/GU">UP/GU</option>
                        <option value="LS">LS</option>
                        <option value="TU">TU</option>
                        </select>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="nourut" :value="__('No Urut')"/>
                        <x-text-input type="text" name="nourut" id="nourut" class="block mt-1 w-full" required/>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="notbp" :value="__('No TBP')"/>
                        <x-text-input type="text" name="notbp" id="notbp" class="block mt-1 w-full" required/>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="pengeluaran" :value="__('Pengeluaran')"/>
                        <x-text-input type="number" name="pengeluaran" id="pengeluaran" class="block mt-1 w-full" required/>
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
            $('#nama_biro_relasi').select2({
                placeholder: 'Cari nama biro',
                allowClear: true,
            });

            $('#nama_prgoram_relasi').select2({
                placeholder: 'Cari nama program',
                allowClear: true,
            });

            $('#nama_kegiatan_relasi').select2({
                placeholder: 'Cari nama kegiatan',
                allowClear: true,
            });

            $('#nama_subkegiatan_relasi').select2({
                placeholder: 'Cari nama sub kegiatan',
                allowClear: true,
            });

            $('#nama_kodering_relasi').select2({
                placeholder: 'Cari nama kodering',
                allowClear: true,
            });
        });
        
    </script>
    @endpush
</x-app-layout>