<x-guest-layout>
    <form method="POST" action="{{ route('register') }}">
        @csrf

        <!-- NIP -->
        <div>
            <x-input-label for="NIP" :value="__('NIP (Nomor Induk Pegawai)')" />
            <x-text-input id="NIP" class="block mt-1 w-full" type="text" name="NIP" :value="old('NIP')" required autofocus autocomplete="NIP" />
            <x-input-error :messages="$errors->get('NIP')" class="mt-2" />
        </div>

        <!-- Name -->
        <div>
            <x-input-label for="name" :value="__('Name')" />
            <x-text-input id="name" class="block mt-1 w-full" type="text" name="name" :value="old('name')" required autofocus autocomplete="name" />
            <x-input-error :messages="$errors->get('name')" class="mt-2" />
        </div>

        <!-- Email Address -->
        <div class="mt-4">
            <x-input-label for="email" :value="__('Email')" />
            <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autocomplete="username" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        {{-- Biro --}}
        <div class="form-group mb-5">
            <x-input-label for="biro_id" :value="__('Nama Biro')"/>
            <select id="nama_biro_relasi" name="biro_id" class="block mt-1 w-full" required>
                @foreach ($biros as $biro)
                    <option value="{{$biro->id}}">{{$biro->nama_biro}}</option>
                @endforeach
            </select>
        </div>

        <!-- Password -->
        <div class="mt-4">
            <x-input-label for="password" :value="__('Password')" />

            <x-text-input id="password" class="block mt-1 w-full"
                            type="password"
                            name="password"
                            required autocomplete="new-password" />

            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        <!-- Confirm Password -->
        <div class="mt-4">
            <x-input-label for="password_confirmation" :value="__('Confirm Password')" />

            <x-text-input id="password_confirmation" class="block mt-1 w-full"
                            type="password"
                            name="password_confirmation" required autocomplete="new-password" />

            <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />
        </div>

        {{-- Golongan --}}
        <div>
            <x-input-label for="golongan" :value="__('Golongan')" />
            <x-text-input id="golongan" class="block mt-1 w-full" type="text" name="golongan" :value="old('golongan')" required autofocus autocomplete="golongan" />
            <x-input-error :messages="$errors->get('golongan')" class="mt-2" />
        </div>

        {{-- pangkat --}}
        <div>
            <x-input-label for="pangkat" :value="__('Pangkat')" />
            <x-text-input id="pangkat" class="block mt-1 w-full" type="text" name="pangkat" :value="old('pangkat')" required autofocus autocomplete="pangkat" />
            <x-input-error :messages="$errors->get('pangkat')" class="mt-2" />
        </div>

        {{-- Jabatan --}}
        <div>
            <x-input-label for="jabatan" :value="__('Jabatan')" />
            <x-text-input id="jabatan" class="block mt-1 w-full" type="text" name="jabatan" :value="old('jabatan')" required autofocus autocomplete="jabatan" />
            <x-input-error :messages="$errors->get('jabatan')" class="mt-2" />
        </div>

        <div class="flex items-center justify-end mt-4">
            <a class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800" href="{{ route('login') }}">
                {{ __('Already registered?') }}
            </a>

            <x-primary-button class="ml-4">
                {{ __('Register') }}
            </x-primary-button>
        </div>
    </form>
</x-guest-layout>
