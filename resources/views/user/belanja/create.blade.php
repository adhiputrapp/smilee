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
                    <div class="form-group mb-5 flex gap-x-2">
                        <div class="flex-grow">
                            <x-input-label for="kode_biro" :value="__('Kode Biro')"/>
                            <x-text-input type="text" name="kode_biro" id="kode_biro" value="{{$biros->kode_biro}}" class="block mt-1 w-full" required readonly/>
                        </div>
                        <div class="flex-grow">
                            <x-input-label for="nama_biro" :value="__('Nama Biro')"/>
                            <x-text-input type="text" name="nama_biro" id="nama_biro" value="{{$biros->nama_biro}}" class="block mt-1 w-full" required readonly/>
                        </div>
                        <x-text-input type="hidden" name="biro_id" id="biro_id" value="{{$biros->id}}" class="block mt-1 w-full" required readonly/>
                    </div>
                    <div class="form-group mb-5 flex gap-x-2">
                        <div class="flex-grow">
                            <x-input-label for="kode_program" :value="__('Kode Program')"/>
                            <x-text-input type="text" name="kode_program" id="kode_program" class="block mt-1 w-full" required readonly/>
                        </div>
                        <div class="flex-grow">
                            <x-input-label for="nama_program" :value="__('Nama Program')"/>
                            <x-text-input type="text" name="nama_program" id="nama_program" class="block mt-1 w-full" required readonly/>
                        </div>
                        <x-text-input type="hidden" name="program_id" id="program_id" class="block mt-1 w-full" required readonly/>
                    </div>
                    <div class="form-group mb-5 flex gap-x-2">
                        <div class="flex-grow">
                            <x-input-label for="kode_kegiatan" :value="__('Kode Kegiatan')"/>
                            <x-text-input type="text" name="kode_kegiatan" id="kode_kegiatan" class="block mt-1 w-full" required readonly/>
                        </div>
                        <div class="flex-grow">
                            <x-input-label for="nama_kegiatan" :value="__('Nama Kegiatan')"/>
                            <x-text-input type="text" name="nama_kegiatan" id="nama_kegiatan" class="block mt-1 w-full" required readonly/>
                        </div>
                        <x-text-input type="hidden" name="kegiatan_id" id="kegiatan_id" class="block mt-1 w-full" required readonly/>
                    </div>
                    <div class="form-group mb-5 flex gap-x-2">
                        {{-- <div class="flex-grow">
                            <x-input-label for="kode_sub_kegiatan" :value="__('Kode Sub Kegiatan')"/>
                            <x-text-input type="text" name="kode_sub_kegiatan" id="kode_sub_kegiatan" class="block mt-1 w-full" required readonly/>
                        </div> --}}
                        <div class="flex-grow">
                            <x-input-label for="nama_sub_kegiatan" :value="__('Nama Sub Kegiatan')"/>
                            {{-- <x-text-input type="text" name="nama_sub_kegiatan" id="nama_sub_kegiatan" class="block mt-1 w-full" required readonly/> --}}
                            <select id="nama_sub_kegiatan" name="sub_kegiatan_id" class="block mt-1 w-full" required>
                                <option value="">-</option>
                                @foreach ($subkegiatans as $subkegiatan)
                                    <option value="{{$subkegiatan->id}}">{{ $subkegiatan->kode_sub_kegiatan }} | {{$subkegiatan->nama_sub_kegiatan}}</option>
                                @endforeach
                            </select>
                        </div>
                        {{-- <x-text-input type="hidden" name="sub_kegiatan_id" id="sub_kegiatan_id" class="block mt-1 w-full" required readonly/> --}}
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="nama_kodering_relasi" :value="__('Kodering')"/>
                        <select id="nama_kodering_relasi" name="kodering_id" class="block mt-1 w-full" required>
                            <option value="">-</option>
                            @foreach ($koderings as $kodering)
                                <option value="{{$kodering->id}}">{{ $kodering->kode_kodering }} | {{$kodering->nama_kodering}}</option>
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
                        <x-input-label for="nobukti" :value="__('No Bukti')"/>
                        <x-text-input type="number" name="nobukti" id="nobukti" class="block mt-1 w-full" required/>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="pengeluaran" :value="__('Pengeluaran')"/>
                        <x-text-input type="number" name="pengeluaran" id="pengeluaran" class="block mt-1 w-full" required/>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="keterangan" :value="__('Keterangan Pajak')"/>
                        <x-text-input type="text" name="keterangan[]" id="keterangan" class="block mt-1 w-full" required/>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="nominal" :value="__('Nominal Pajak')"/>
                        <x-text-input type="number" name="nominal[]" id="nominal" class="block mt-1 w-full" required/>
                    </div>

                    <div id="tax-container">
                        
                    </div>

                    <button type="button" id="add-tax" class="btn btn-primary inline-block rounded bg-gradient-to-r from-blue-700 to-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Tambah Pajak</button>

                    <div class="form-group mb-5">
                        <x-input-label for="uraian" :value="__('Uraian')"/>
                        <x-text-input type="text" name="uraian" id="uraian" class="block mt-1 w-full" required/>
                    </div>
                    
                    <div class="form-group mb-5">
                        <x-input-label for="file" :value="__('file')"/>
                        <x-text-input type="file" name="file" id="file" class="block mt-1 w-full" required/>
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
            $('#nama_sub_kegiatan').select2({
                placeholder: 'Cari nama SubKegiatan',
                allowClear: true,
            });

            $('#nama_kodering_relasi').select2({
                placeholder: 'Cari nama Kodering',
                allowClear: true,
            });

            $('#nama_sub_kegiatan').on('select2:select', function(e) {
                e.preventDefault()

                e.preventDefault()

                $.ajax({
                    url: "{{ route('belanjas.search') }}",
                    type: "GET",
                    dataType: 'JSON',
                    data: {
                        sub_kegiatan_id: e.target.value
                    },
                    success: (res) => {
                        // $("#kode_sub_kegiatan").val(res.data.subkegiatan.kode_sub_kegiatan)
                        // $("#nama_sub_kegiatan").val(res.data.subkegiatan.nama_sub_kegiatan)
                        // $("#sub_kegiatan_id").val(res.data.subkegiatan.id)
                        
                        $("#kode_kegiatan").val(res.data.kegiatan.kode_kegiatan)
                        $("#nama_kegiatan").val(res.data.kegiatan.nama_kegiatan)
                        $("#kegiatan_id").val(res.data.kegiatan.id)
                        
                        $("#kode_program").val(res.data.kegiatan.program.kode_program)
                        $("#nama_program").val(res.data.kegiatan.program.nama_program)
                        $("#program_id").val(res.data.kegiatan.program.id)
                        
                        // $("#kode_biro").val(res.data.kegiatan.program.biro.kode_biro)
                        // $("#nama_biro").val(res.data.kegiatan.program.biro.nama_biro)
                        // $("#biro_id").val(res.data.kegiatan.program.biro.id)
                    },
                    error: (error) => {
                        console.log(error);
                    }
                })
            })
        });
    </script>
    <script>
        $(document).ready(function () {
            $("#add-tax").click(function () {
                $("#tax-container").append(`
                    <div class="form-group mb-5">
                        <x-input-label for="keterangan" :value="__('Keterangan Pajak')"/>
                        <x-text-input type="text" name="keterangan[]" class="block mt-1 w-full" required/>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="nominal" :value="__('Nominal Pajak')"/>
                        <x-text-input type="number" name="nominal[]" class="block mt-1 w-full" required/>
                    </div>
                `);
            });
        });
    </script>
    @endpush
</x-app-layout>