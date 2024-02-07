<x-app-layout>
    <h1 class="text-3xl font-bold border-b-2">Edit Belanja</h1>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-gradient-to-tr from-slate-300 to-slate-400 overflow-hidden shadow-sm sm:rounded-lg p-4 mb-4">
                <form action="{{ route('belanjas.update', $belanja->id) }}" method="POST">
                    @csrf
                    @method('PUT') <!-- Gunakan metode PUT untuk pengeditan -->

                    <!-- Tanggal Belanja -->
                    <div class="form-group mb-5">
                        <x-input-label for="tanggal_belanja" :value="__('Tanggal Belanja')"/>
                        <x-text-input type="date" name="tanggal_belanja" id="tanggal_belanja" class="block mt-1 w-full" required value="{{ $belanja->tanggal_belanja->format('d-m-y') }}"/>
                    </div>

                    <!-- Biro -->
                    {{-- <div class="form-group mb-5">
                        <x-input-label for="biro_id" :value="__('Biro')"/>
                        <select id="nama_biro_relasi" name="biro_id" class="block mt-1 w-full" required>
                            @foreach ($biros as $biro)
                                <option value="{{$biro->id}}" {{ $belanja->biro_id == $biro->id ? 'selected' : '' }}>{{$biro->nama_biro}}</option>
                            @endforeach
                        </select>
                    </div>

                    <!-- Program -->
                    <div class="form-group mb-5">
                        <x-input-label for="program_id" :value="__('Program')"/>
                        <select id="nama_prgoram_relasi" name="program_id" class="block mt-1 w-full" required>
                            @foreach ($programs as $program)
                                <option value="{{$program->id}}" {{ $belanja->program_id == $program->id ? 'selected' : '' }}>{{$program->nama_program}}</option>
                            @endforeach
                        </select>
                    </div>

                    <!-- Kegiatan -->
                    <div class="form-group mb-5">
                        <x-input-label for="kegiatan_id" :value="__('Kegiatan')"/>
                        <select id="nama_kegiatan_relasi" name="kegiatan_id" class="block mt-1 w-full" required>
                            @foreach ($kegiatans as $kegiatan)
                                <option value="{{$kegiatan->id}}" {{ $belanja->kegiatan_id == $kegiatan->id ? 'selected' : '' }}>{{$kegiatan->nama_kegiatan}}</option>
                            @endforeach
                        </select>
                    </div> --}}
                    
                    <div class="form-group mb-5 flex gap-x-2">
                        <div class="flex-grow">
                            <x-input-label for="kode_biro" :value="__('Kode Biro')"/>
                            <x-text-input type="text" name="kode_biro" id="kode_biro" class="block mt-1 w-full" required readonly value="{{ $belanja->biro->kode_biro }}"/>
                        </div>
                        <div class="flex-grow">
                            <x-input-label for="nama_biro" :value="__('Nama Biro')"/>
                            <x-text-input type="text" name="nama_biro" id="nama_biro" class="block mt-1 w-full" required readonly value="{{ $belanja->biro->nama_biro }}"/>
                        </div>
                        <x-text-input type="hidden" name="biro_id" id="biro_id" class="block mt-1 w-full" value="{{ $belanja->biro->id }}" required readonly/>
                    </div>
                    
                    <div class="form-group mb-5 flex gap-x-2">
                        <div class="flex-grow">
                            <x-input-label for="kode_program" :value="__('Kode Program')"/>
                            <x-text-input type="text" name="kode_program" id="kode_program" class="block mt-1 w-full" required readonly value="{{ $belanja->program->kode_program }}"/>
                        </div>
                        <div class="flex-grow">
                            <x-input-label for="nama_program" :value="__('Nama Program')"/>
                            <x-text-input type="text" name="nama_program" id="nama_program" class="block mt-1 w-full" required readonly value="{{ $belanja->program->nama_program }}"/>
                        </div>
                        <x-text-input type="hidden" name="program_id" id="program_id" class="block mt-1 w-full" required readonly value="{{ $belanja->program->id }}"/>
                    </div>

                    <div class="form-group mb-5 flex gap-x-2">
                        <div class="flex-grow">
                            <x-input-label for="kode_kegiatan" :value="__('Kode Kegiatan')"/>
                            <x-text-input type="text" name="kode_kegiatan" id="kode_kegiatan" class="block mt-1 w-full" required readonly value="{{ $belanja->kegiatan->kode_kegiatan }}"/>
                        </div>
                        <div class="flex-grow">
                            <x-input-label for="nama_kegiatan" :value="__('Nama Kegiatan')"/>
                            <x-text-input type="text" name="nama_kegiatan" id="nama_kegiatan" class="block mt-1 w-full" required readonly value="{{ $belanja->kegiatan->nama_kegiatan }}"/>
                        </div>
                        <x-text-input type="hidden" name="kegiatan_id" id="kegiatan_id" class="block mt-1 w-full" required readonly value="{{ $belanja->kegiatan->id }}"/>
                    </div>

                    <!-- Sub Kegiatan -->
                    {{-- <div class="form-group mb-5">
                        <x-input-label for="subkegiatan_id" :value="__('Sub Kegiatan')"/>
                        <select id="nama_subkegiatan_relasi" name="subkegiatan_id" class="block mt-1 w-full" required>
                            @foreach ($subkegiatans as $subkegiatan)
                                <option value="{{$subkegiatan->id}}" {{ $belanja->subkegiatan_id == $subkegiatan->id ? 'selected' : '' }}>{{$subkegiatan->nama_sub_kegiatan}}</option>
                            @endforeach
                        </select>
                    </div> --}}
                    <div class="form-group mb-5 flex gap-x-2">
                        {{-- <div class="flex-grow"> --}}
                            <div class="flex-grow">
                                <x-input-label for="nama_sub_kegiatan" :value="__('Nama Sub Kegiatan')"/>
                                {{-- <x-text-input type="text" name="nama_sub_kegiatan" id="nama_sub_kegiatan" class="block mt-1 w-full" required readonly/> --}}
                                <select id="nama_sub_kegiatan" name="sub_kegiatan_id" class="block mt-1 w-full" required>
                                    <option value="">-</option>
                                    @foreach ($subkegiatans as $subkegiatan)
                                        <option value="{{$subkegiatan->id}}"{{ $belanja->subkegiatan_id == $subkegiatan->id ? 'selected' : '' }}>{{ $subkegiatan->kode_sub_kegiatan }} | {{$subkegiatan->nama_sub_kegiatan}}</option>
                                    @endforeach
                                </select>
                            </div>
                            {{-- <x-input-label for="kode_sub_kegiatan" :value="__('Kode Sub Kegiatan')"/>
                            <x-text-input type="text" name="kode_sub_kegiatan" id="kode_sub_kegiatan" class="block mt-1 w-full" required readonly value="{{ $belanja->subkegiatan->kode_sub_kegiatan }}"/>
                        </div>
                        <div class="flex-grow">
                            <x-input-label for="nama_sub_kegiatan" :value="__('Nama Sub Kegiatan')"/>
                            <x-text-input type="text" name="nama_sub_kegiatan" id="nama_sub_kegiatan" class="block mt-1 w-full" required readonly value="{{ $belanja->subkegiatan->nama_sub_kegiatan }}"/>
                        </div>
                        <x-text-input type="hidden" name="sub_kegiatan_id" id="sub_kegiatan_id" class="block mt-1 w-full" required readonly value="{{ $belanja->subkegiatan->id }}"/> --}}
                    </div>

                    <!-- Kodering -->
                    <div class="form-group mb-5">
                        <x-input-label for="kodering_id" :value="__('Kodering')"/>
                        <select id="nama_kodering_relasi" name="kodering_id" class="block mt-1 w-full" required>
                            @foreach ($koderings as $kodering)
                                <option value="{{$kodering->id}}" {{ $belanja->kodering_id == $kodering->id ? 'selected' : '' }}>{{$kodering->kode_kodering}} | {{$kodering->nama_kodering}}</option>
                            @endforeach
                        </select>
                    </div>

                    <!-- Jenis Belanja -->
                    <div class="form-group mb-5">
                        <x-input-label for="jenis_belanja" :value="__('Jenis Belanja')"/>
                        <select name="jenis_belanja" id="jenis_belanja" class="block mt-1 w-full" required>
                            <option value="UP/GU" {{ $belanja->jenis_belanja === 'UP/GU' ? 'selected' : '' }}>UP/GU</option>
                            <option value="LS" {{ $belanja->jenis_belanja === 'LS' ? 'selected' : '' }}>LS</option>
                            <option value="TU" {{ $belanja->jenis_belanja === 'TU' ? 'selected' : '' }}>TU</option>
                        </select>
                    </div>

                    <div class="form-group mb-5">
                        <x-input-label for="nobukti" :value="__('No Bukti')"/>
                        <x-text-input type="number" name="nobukti" id="nobukti" class="block mt-1 w-full" required value="{{ $belanja->nobukti}}"/>
                    </div>

                    <!-- No Urut -->
                    <div class="form-group mb-5">
                        <x-input-label for="pengeluaran" :value="__('Pengeluaran')"/>
                        <x-text-input type="number" name="pengeluaran" id="pengeluaran" class="block mt-1 w-full" required value="{{ $belanja->pengeluaran }}"/>
                    </div>

                    <!-- No Urut -->
                    <div class="form-group mb-5">
                        <x-input-label for="uraian" :value="__('Uraian')"/>
                        <x-text-input type="text" name="uraian" id="uraian" class="block mt-1 w-full" required value="{{ $belanja->uraian }}"/>
                    </div>


                    <button type="submit" class="btn btn-primary inline-block rounded bg-gradient-to-r from-blue-700 to-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        Update
                    </button>
                </form> 
            </div>
        </div>
    </div>    
    @push('script')
    <script>
        $(document).ready(function() {
            // $('#nama_biro_relasi').select2({
            //     placeholder: 'Cari nama biro',
            //     allowClear: true,
            // });
            // $('#nama_program_relasi').select2({
            //     placeholder: 'Cari nama program',
            //     allowClear: true,
            // });
            // $('#nama_kegiatan_relasi').select2({
            //     placeholder: 'Cari nama kegiatan',
            //     allowClear: true,
            // });
            $('#nama_sub_kegiatan').select2({
                placeholder: 'Cari nama subkegiatan',
                allowClear: true,
            });
            $('#nama_kodering_relasi').select2({
                placeholder: 'Cari nama kodering',
                allowClear: true,
            });

            
            $('#nama_kodering_relasi').on('select2:select', function(e) {
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
                        
                        // $("#kode_biro").val(res.data.subkegiatan.kegiatan.program.biro.kode_biro)
                        // $("#nama_biro").val(res.data.subkegiatan.kegiatan.program.biro.nama_biro)
                        // $("#biro_id").val(res.data.subkegiatan.kegiatan.program.biro.id)
                    },
                    error: (error) => {
                        console.log(error);
                    }
                })
            })
        });
    </script>
    @endpush
</x-app-layout>