<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    {{-- {{ __("You're logged in!") }} --}}
                    {{-- {{$dataBelanja}} --}}
                    <div class="mx-auto w-11/12 overflow-hidden md:w-3/5">
                    <p class="font-bold">Jumlah Pengeluaran Tiap Bulan</p>
                        <canvas
                          data-te-chart="line"
                          data-te-dataset-label="Pengeluaran"
                          data-te-labels="{{ $dataBelanja->pluck('bulan') }}"
                          data-te-dataset-data="{{ json_encode($dataBelanja->pluck('total_pengeluaran')) }}">
                        </canvas>
                      </div>
                    <div class="p-10"></div>
                    <div class="mx-auto w-11/12 overflow-hidden md:w-3/5">
                    <p class="font-bold">Jumlah Anggaran</p>
                        <canvas
                          data-te-chart="line"
                          data-te-dataset-label="Anggaran"
                          data-te-labels="{{ $anggaran->pluck('bulan_anggaran') }}"
                          data-te-dataset-data="{{ json_encode($anggaran->pluck('total_anggaran')) }}">
                        </canvas>
                      </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
