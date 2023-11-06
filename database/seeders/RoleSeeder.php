<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;


class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
     public function run(): void
    {
        // Buat seeder untuk masing-masing peran (role)
        Role::create(['name'=>'admin']);
        Role::create(['name'=>'user']);
        Role::create(['name'=>'pengesahan']);
        Role::create(['name'=>'verifikator']);
        Role::create(['name'=>'verifikator_biro']);

        $role = Role::findByname('admin');

        $permissions = Permission::pluck('id', 'id')->all();

        $role->syncPermissions($permissions);
    }
}
