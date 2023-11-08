<x-app-layout>
    <h1 class="text-3xl font-bold border-b-2">Edit Sub Kegiatan</h1>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-gradient-to-tr from-slate-300 to-slate-400 overflow-hidden shadow-sm sm:rounded-lg p-4 mb-4">

                <form action="{{ route('subkegiatans.update', $subkegiatans->id) }}" method="POST">
                    @csrf
                    @method('PUT') <!-- Method untuk mengupdate data -->
 
                    <div class="form-group mb-5">
                        <x-input-label for="kode" :value="__('Kode')"/>
                        <x-text-input type="text" name="kode_sub_kegiatan" id="kode_sub_kegiatan" class="block mt-1 w-full" required value="{{ $subkegiatans->kode_sub_kegiatan }}" />
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="nama_sub_kegiatan" :value="__('Nama Sub Kegiatan')"/>
                        <x-text-input type="text" name="nama_sub_kegiatan" id="nama_sub_kegiatan" class="block mt-1 w-full" required value="{{ $subkegiatans->nama_sub_kegiatan }}" />
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="nama_kegiatan_relasi" :value="__('Nama Kegiatan')"/>
                        <select id="nama_kegiatan_relasi" name="nama_kegiatan_relasi" class="block mt-1 w-full" required>
                            @foreach ($kegiatans as $kegiatan)
                                <option value="{{ $kegiatan->nama_kegiatan }}" {{ $kegiatan->nama_kegiatan === $subkegiatans->nama_kegiatan_relasi ? 'selected' : '' }} >{{ $kegiatan->nama_kegiatan }}</option>
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
            $('#nama_kegiatan_relasi').select2({
                placeholder: 'Cari nama kegiatan',
                allowClear: true,
            });
        });
    </script>
    @endpush
</x-app-layout>
