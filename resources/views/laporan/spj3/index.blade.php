<x-app-layout>
    <h1 class="mb-6 text-3xl font-bold border-b-2">SPJ3</h1>

    <div class="mb-3 w-full">
        <div class="relative mb-4 mr-2 flex w-full flex-wrap items-stretch">
            <form action="{{ route('spj3.export') }}" method="POST">
                @csrf
                
                <div class="mb-4">
                    <x-input-label for="sub_kegiatan" class="mb-2" :value="__('Sub Kegiatan')"/>
                    <select name="sub_kegiatan_id" id="sub_kegiatan_id">
                        <option value="">-</option>
                        @foreach ($subKegiatan as $item)
                            <option value="{{ $item->id }}" {{ old('sub_kegiatan') == $item->id ? 'selected' : '' }}>{{ $item->kode_sub_kegiatan }} | {{ $item->nama_sub_kegiatan }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="mb-4">
                    <x-input-label for="kodering_id" class="mb-2" :value="__('Kodering')"/>
                    <select name="kodering_id" id="kodering_id">
                        <option value="">-</option>
                        @foreach ($koderings as $item)
                            <option value="{{ $item->id }}" {{ old('kodering') == $item->id ? 'selected' : '' }}>{{ $item->kode_kodering }} | {{ $item->nama_kodering }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="mb-4">
                    <x-input-label for="tanggal" class="mb-2" :value="__('Tanggal')"/>
                    <x-text-input type="month" name="tanggal" id="tanggal" class="block mt-1 w-full" value="{{ old('tanggal') }}" required/>
                </div>
            </div>
                <button type="submit" class="btn btn-primary inline-block rounded bg-gradient-to-r from-blue-700 to-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Submit
                </button>
            </form>
        </div>
    </div>

    @push('script')
        <script>
            $(document).ready(function() {
                $('#sub_kegiatan_id').select2({
                    placeholder: 'Cari nama sub kegiatan',
                    allowClear: true,
                });
                $('#kodering_id').select2({
                    placeholder: 'Cari nama kodering',
                    allowClear: true,
                });
            })
        </script>
    @endpush
</x-app-layout>