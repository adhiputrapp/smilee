<x-app-layout>
    <h1 class="text-3xl font-bold border-b-2">Input Pengesahan</h1>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-gradient-to-tr from-slate-300 to-slate-400 overflow-hidden shadow-sm sm:rounded-lg p-4 mb-4">
            @if (Auth::user()->can('pengesahans.submit'))
            <form action="{{ route('pengesahans.submit', $belanja->id) }}" method="post">
                @csrf
                <div class="form-group mb-5">
                    <x-input-label for="sah" :value="__('Pengesahan')"/>
                    <select name="sah" id="sah" class="block mt-1 w-full">
                    <option value="disetujui">Disetujui</option>
                    <option value="ditolak">Ditolak</option>
                </select>
                </div>
                <div class="form-group mb-5">
                    <x-input-label for="uraian" :value="__('Uraian Pengesahan')"/>
                    <x-text-input type="text" name="uraian" id="uraian" class="block mt-1 w-full" />
                </div>
                <button type="submit" class="btn btn-primary inline-block rounded bg-gradient-to-r from-blue-700 to-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Simpan</button>
            </form>
            @endif
            </div>
        </div>
    </div>
</x-app-layout>
