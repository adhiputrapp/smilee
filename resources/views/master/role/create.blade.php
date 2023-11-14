<x-app-layout>
    <h1 class="text-3xl font-bold border-b-2">Nama Role</h1>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-gradient-to-tr from-slate-300 to-slate-400 overflow-hidden shadow-sm sm:rounded-lg p-4 mb-4">

                <form action="{{ route('roles.store') }}" method="POST">
                    @csrf
                    <div class="form-group mb-5">
                        <x-input-label for="name" :value="__('Role')"/>
                        <x-text-input type="text" name="name" id="name" class="block mt-1 w-full" required/>

                        <x-input-error :messages="$errors->get('name')" class="mt-2" />
                    </div>

                    <div class="mt-4">
                        <x-input-label for="name" :value="__('Assign Permission')" />
                        <div class="flex flex-col">
                            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div class="overflow-hidden">
                                        <table class="min-w-full text-left text-sm font-light">
                                            <thead class="border-b font-medium dark:border-neutral-500">
                                                <tr>
                                                    <th scope="col" class="px-6 py-4"></th>
                                                    <th scope="col" class="px-6 py-4">Name</th>
                                                    <th scope="col" class="px-6 py-4">Guard</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                @foreach ($permissions as $item)
                                                    <tr class="border-b dark:border-neutral-500">
                                                        <td class="whitespace-nowrap px-6 py-4 font-medium">
                                                            <input type="checkbox"
                                                                name="permission[{{ $item->name }}]"
                                                                value="{{ $item->name }}" class='permission'>
                                                        </td>
                                                        <td class="whitespace-nowrap px-6 py-4">{{ $item->name }}
                                                        </td>
                                                        <td class="whitespace-nowrap px-6 py-4">
                                                            {{ $item->guard_name }}</td>
                                                    </tr>
                                                @endforeach
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary inline-block rounded bg-gradient-to-r from-blue-700 to-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Simpan</button>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
