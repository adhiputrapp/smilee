<x-app-layout>
    <h1 class="text-3xl font-bold border-b-2">Edit Anggaran</h1>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-gradient-to-tr from-slate-300 to-slate-400 overflow-hidden shadow-sm sm:rounded-lg p-4 mb-4">
                <form action="{{ route('anggarans.update', ['id' => $anggarans->id]) }}" method="POST">
                    @csrf
                    @method('PUT')

                   <!-- Sub Kegiatan -->
                   <div class="form-group mb-5">
                        <x-input-label for="subkegiatan_id" :value="__('Sub Kegiatan')"/>
                        <select id="nama_subkegiatan_relasi" name="subkegiatan_id" class="block mt-1 w-full" required>
                            @foreach ($subkegiatans as $subkegiatan)
                                <option value="{{$subkegiatan->id}}" {{ $anggarans->subkegiatan_id == $subkegiatan->id ? 'selected' : '' }}>{{$subkegiatan->nama_sub_kegiatan}}</option>
                            @endforeach
                        </select>
                    </div>

                    <!-- Kodering -->
                    <div class="form-group mb-5">
                        <x-input-label for="kodering_id" :value="__('Kodering')"/>
                        <select id="nama_kodering_relasi" name="kodering_id" class="block mt-1 w-full" required>
                            @foreach ($koderings as $kodering)
                                <option value="{{$kodering->id}}" {{ $anggarans->kodering_id == $kodering->id ? 'selected' : '' }}>{{$kodering->nama_kodering}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="tanggal_anggaran" :value="__('Tanggal')"/>
                        <x-text-input type="date" name="tanggal_anggaran" id="tanggal_anggaran" class="block mt-1 w-full" required value="{{$anggarans->tanggal_anggaran}}"/>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="jumlah_anggaran" :value="__('Jumlah Anggaran')"/>
                        <x-text-input type="number" name="jumlah_anggaran" id="jumlah_anggaran" class="block mt-1 w-full" required value="{{$anggarans->jumlah_anggaran}}"/>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="uraian" :value="__('Uraian')"/>
                        <x-text-input type="uraian" name="uraian" id="uraian" class="block mt-1 w-full" required value="{{$anggarans->uraian}}"/>
                    </div>

                    <button type="submit" class="btn btn-primary inline-block rounded bg-gradient-to-r from-blue-700 to-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        Update
                    </button>
                </form> 
            </div>
        </div>
    </div>   
</x-app-layout>