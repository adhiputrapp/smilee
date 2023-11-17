<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;


class AdminTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // $user = User::create([
        //     'name' => 'Admin',
        //     'email' => 'admin@gmail.com',
        //     'password' => bcrypt('mwNVmoqmNo'),
        //     'golongan' => ('admin'),
        //     'pangkat' => ('admin'),
        //     'jabatan' => ('admin'),
        //     'nip' => ('12345'),
        //     'biro_id' =>  null,
        // ]);
        // $user->assignRole('admin');

        User::create([
            'name' => 'fulan',
            'email' => 'fulan@gmail.com',
            'password' => bcrypt('12345678'),
            'golongan' => ('user'),
            'pangkat' => ('user'),
            'jabatan' => ('user'),
            'nip' => ('3527'),
            'biro_id' =>  null,
        ]);
        // $npc->assignRole('mwehe');

        // $appun = User::create([
        //     'name' => 'appun',
        //     'email' => 'appun@gmail.com',
        //     'password' => bcrypt('12345678'),
        //     'golongan' => ('user'),
        //     'pangkat' => ('user'),
        //     'jabatan' => ('user'),
        //     'nip' => ('3445'),
        //     'biro_id' =>  null,
        // ]);
        // $appun->assignRole('test');

    }
}
