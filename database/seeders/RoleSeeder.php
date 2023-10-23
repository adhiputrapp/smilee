<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
     public function run(): void
    {
        // Buat seeder untuk masing-masing peran (role)
        $roles = [
            'user',
            'pengesahan',
            'verifikator biro',
            'verifikator',
            'admin',
        ];

        foreach ($roles as $role) {
            Role::create([
                'id' => Str::uuid(),
                'name' => $role,
            ]);
        }
    }
}
