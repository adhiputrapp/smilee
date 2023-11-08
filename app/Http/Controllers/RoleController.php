<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\View\View;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;


class RoleController extends Controller
{
    public function index()
    {
        // return view('master.role.index',[
        //     'roles' => Role::orderby('name', 'ASC')->get()
        // ]);
        $roles = Role::orderby('name', 'ASC')->latest()->get();

        return view('master.role.index', [
            'roles' => $roles
        ]);
    }

    public function create()
    {
        return view('master.role.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);

        Role::create([
            'id' => Str::uuid(),
            'name' => $request->name,
        ]);

        return redirect()->route('roles.index');
    }
}
