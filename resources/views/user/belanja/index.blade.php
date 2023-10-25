<x-app-layout>
    <h1 class="mb-6 text-3xl font-bold border-b-2">Halaman Pelimpahan</h1>

    <div class="mb-3 w-full">
        <div class="relative mb-4 mr-2 flex w-full flex-wrap items-stretch">
        <input
            id="advanced-search-input"
            type="search"
            class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1" />
    
        <!--Search button-->
        <button
            class="relative z-[2] bg-gradient-to-r from-blue-700 to-blue-500 flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            type="button"
            id="advanced-search-button"
            data-te-ripple-init
            data-te-ripple-color="light">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5">
            <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd" />
            </svg>
        </button>
        </div>
        <a href="{{route('pelimpahans.create')}}"  
        data-te-ripple-init
        data-te-ripple-color="light"
        class="inline-block rounded bg-gradient-to-r from-blue-700 to-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Buat Pelimpahan Baru
        </a>
    </div>
    <div id="datatable"></div>
    @push('script')
        <script>
            var belanja = {{ Js::from($belanjas) }}

            const data = {
                columns: [{
                        label: 'Tanggal Belanja ',
                        field: 'tanggal_belanja'
                    },
                    {
                        label: 'Biro',
                        field: 'biro',
                    },
                    {
                        label: 'Program',
                        field: 'program',
                    },
                    {
                        label: 'Kegiatan',
                        field: 'kegiatan',
                    },
                    {
                        label: 'Sub Kegiatan',
                        field: 'subkegiatan',
                    },
                    {
                        label: 'Kodering',
                        field: 'kodering',
                    },
                    {
                        label: 'No Urut',
                        field: 'nourut',
                    },
                    {
                        label: 'No TBP',
                        field: 'notbp',
                    },
                    {
                        label: 'Jenis Belanja',
                        field: 'jenis_belanja',
                    },
                    {
                        label: 'Pengeluaran',
                        field: 'pengeluaran',
                    },
                    {
                        label: 'Note',
                        field: 'note',
                    },
                    {
                        label: 'Edit/Hapus',
                        field: 'action'
                    }
                ],
                rows: belanja.map((row) => {
                    return {
                        ...row,
                        biro: row.biro.nama_biro,
                        program: row.program.nama_program,
                        kegiatan: row.kegiatan.nama_kegiatan,
                        subkegiatan: row.subkegiatan.nama_sub_kegiatan,
                        kodering: row.kodering.nama_kodering,
                        action: `
                            <a href="{{ url('/pelimpahan/edit/${row.id}') }}" class="inline-block rounded  bg-gradient-to-l from-yellow-600 to-yellow-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]">
                                Edit
                            </a>
                            <a href="javascript:void(0);" onclick="destroyFunction('{{ url('/pelimpahan/delete/${row.id}') }}');" class="inline-block rounded  bg-gradient-to-l from-red-600 to-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]">
                                Delete
                            </a>`
                    }
                })
            }

            const instance = new te.Datatable(document.getElementById('datatable'), data)
            const advancedSearchInput = document.getElementById('advanced-search-input');

            const search = (value) => {
                let [phrase, columns] = value.split(" in:").map((str) => str.trim());

                if (columns) {
                columns = columns.split(",").map((str) => str.toLowerCase().trim());
                }

                instance.search(phrase, columns);
            };

            document
                .getElementById("advanced-search-button")
                .addEventListener("click", (e) => {
                search(advancedSearchInput.value);
                });

            advancedSearchInput.addEventListener("keydown", (e) => {
                if (e.keyCode === 13) {
                search(e.target.value);
                }
            });
        </script>
    @endpush
</x-app-layout>