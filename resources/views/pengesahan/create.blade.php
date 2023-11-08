<x-app-layout>
    <h1 class="text-3xl font-bold border-b-2">Input Pelimpahan</h1>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-gradient-to-tr from-slate-300 to-slate-400 overflow-hidden shadow-sm sm:rounded-lg p-4 mb-4">
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