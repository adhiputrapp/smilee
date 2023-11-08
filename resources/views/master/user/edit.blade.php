<x-app-layout>
    <h1 class="text-3xl font-bold border-b-2">Edit User</h1>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-gradient-to-tr from-slate-300 to-slate-400 overflow-hidden shadow-sm sm:rounded-lg p-4 mb-4">
                <form action="{{ route('users.update', $id) }}" method="POST">
                    @csrf
                    @method('PUT')
                    
                    <div class="form-group mb-5">
                    <x-input-label for="name" :value="__('Nama')"/>
                    <x-text-input type="text" id="name" name="name" class="block mt-1 w-full" value="{{ $users->name }}"/>
                    </div>

                    <div class="form-group mb-5">
                    <x-input-label for="email" :value="__('E-Mail')"/>
                    <x-text-input type="email" id="email" name="email"  class="block mt-1 w-full" value="{{ $users->email }}"/>
                    </div>

                    <x-input-label for="biro_id" :value="__('Biro')"/>
                    <select id="biro_id"  class="block mt-1 w-full" name="biro_id">
                        <option value="">Pilih Biro</option>
                        @foreach($biros as $biro)
                            <option value="{{ $biro->id }}" {{ $users->biro_id === $biro->id ? 'selected' : '' }}>{{ $biro->nama_biro }}</option>
                        @endforeach
                    </select><br><br>
                
                    <button type="submit" class="btn btn-primary inline-block rounded bg-gradient-to-r from-blue-700 to-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        Update
                    </button>
                </form>
            </div>
        </div>
    </div>    
    @push('script')
    <script>
        $(document).ready(function() {
            $('#biro_id').select2({
                placeholder: 'Cari nama biro',
                allowClear: true,
            });
        });
    </script>
    @endpush
</x-app-layout>