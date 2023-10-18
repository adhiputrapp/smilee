<x-app-layout>
    <h1 class="text-3xl font-bold border-b-2">Edit Kegiatan</h1>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-gradient-to-tr from-slate-300 to-slate-400 overflow-hidden shadow-sm sm:rounded-lg p-4 mb-4">

                <form action="{{ route('kegiatans.update', $kegiatans->id) }}" method="POST">
                    @csrf
                    @method('PUT') <!-- Method untuk mengupdate data -->
 
                    <div class="form-group mb-5">
                        <x-input-label for="kode" :value="__('Kode')"/>
                        <x-text-input type="text" name="kode_kegiatan" id="kode_kegiatan" class="block mt-1 w-full" required value="{{ $kegiatans->kode_kegiatan }}" />
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="nama_kegiatan" :value="__('Nama kegiatan')"/>
                        <x-text-input type="text" name="nama_kegiatan" id="nama_kegiatan" class="block mt-1 w-full" required value="{{ $kegiatans->nama_kegiatan }}" />
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="nama_program_relasi" :value="__('Nama Program')"/>
                        <select id="nama_program_relasi" name="nama_program_relasi" class="block mt-1 w-full" required>
                            @foreach ($programs as $program)
                                <option value="{{ $program->nama_program }}" {{ $program->nama_program === $kegiatans->nama_program_relasi ? 'selected' : '' }} >{{ $program->nama_program }}</option>
                            @endforeach
                        </select>
                    </div>
                  
                    
                    <button type="submit" class="btn btn-primary inline-block rounded bg-gradient-to-r from-blue-700 to-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        Update <!-- Ganti label tombol menjadi "Update" -->
                    </button>
                </form> 
            </div>
        </div>
    </div>   
    @push('script')
    <script>
        $(document).ready(function() {
            $('#nama_program_relasi').select2({
                placeholder: 'Cari nama program',
                allowClear: true,
            });
        });
    </script>
    @endpush
</x-app-layout>
