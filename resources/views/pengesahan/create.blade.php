<x-app-layout>
    <h1 class="text-3xl font-bold border-b-2">Input Pelimpahan</h1>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-gradient-to-tr from-slate-300 to-slate-400 overflow-hidden shadow-sm sm:rounded-lg p-4 mb-4">

                {{-- <form action="{{ route('pelimpahans.store') }}" method="POST">
                    @csrf
                    <div class="form-group mb-5">
                        <x-input-label for="tanggal_pelimpahan" :value="__('Tanggal Pelimpahan')"/>
                        <x-text-input type="date" name="tanggal_pelimpahan" id="tanggal_pelimpahan" class="block mt-1 w-full" required/>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="jumlah_pelimpahan" :value="__('Jumlah Pelimpahan')"/>
                        <x-text-input type="number" name="jumlah_pelimpahan" id="jumlah_pelimpahan" class="block mt-1 w-full" required/>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="biro_id" :value="__('Nama Biro')"/>
                        <select id="nama_biro_relasi" name="biro_id" class="block mt-1 w-full" required>
                            @foreach ($biros as $biro)
                                <option value="{{$biro->id}}">{{$biro->nama_biro}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group mb-5">
                        <x-input-label for="note" :value="__('Note')"/>
                        <x-text-input type="text" name="note" id="note" class="block mt-1 w-full" required/>
                    </div>
                    <button type="submit" class="btn btn-primary inline-block rounded bg-gradient-to-r from-blue-700 to-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Simpan</button> --}}
                </form> 
                <form action="{{ route('verifikasi.submit', $belanja->id) }}" method="post">
                    @csrf
                    <div class="form-group mb-5">
                    <label for="verif">Verifikasi:</label>
                    <select name="verif" id="verif">
                        <option value="verified">Terverifikasi</option>
                        <option value="unverified">Belum Terverifikasi</option>
                    </select>
                    </div>
                    <button type="submit">Simpan</button>
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
        });
    </script>
    @endpush
</x-app-layout>