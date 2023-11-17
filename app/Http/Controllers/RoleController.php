<?php

namespace App\Http\Controllers;

use App\Models\User;
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
        $permissions = Permission::all();
        return view('master.role.create', compact('permissions'));
    }

    public function store(Request $request) : RedirectResponse
    {
        $request->validate([
            'name' => 'required|unique:roles,name',
            'permission' => 'required',
        ]);

        $role = Role::create($request->only('name'));
        $role->syncPermissions($request->get('permission'));

        return redirect()->route('roles.index');
    }

    public function edit($id): View
    {
        $role = Role::find($id);
        $rolePermissions = $role->permissions->pluck('name')->toArray();
        $permissions = Permission::get();

        return view('master.role.edit', [
            'role' => $role,
            'rolePermissions' => $rolePermissions,
            'permissions' => $permissions
        ]);
    }

    public function update(Request $request, $id) : RedirectResponse
{
    try {
        // dd($request->all());

        $request->validate([
            'name' => 'required',
            'permissions' => 'required|array',
        ]);

        $role = Role::findOrFail($id);

        $role->update($request->only('name'));

        $role->syncPermissions($request->get('permissions'));

        return redirect()->route('roles.index');

    } catch (\Exception $e) {
        // Handle exceptions here
        dd($e->getMessage()); // Check for any exceptions
    }
}



    public function destroy($id) : RedirectResponse{

        $role = Role::find($id);
        $role->delete();

        return redirect()->route('roles.index');
    }

    public function addRole() {
        $roles = Role::all();
        $users = User::all();

        return view('master.role.addRole', compact('roles', 'users'));
    }

    public function addRoleCreate(Request $request) {
        $userId = $request->input('name'); // Updated to match the form input name
        $selectedRole = $request->input('roles'); // Updated to match the form input name

        // Retrieve the user from the database
        $user = User::find($userId);

        // Check if the user and role exist
        if ($user && $selectedRole) {
            // Assign the selected role to the user
            $user->assignRole($selectedRole);
        }

        // Redirect back or wherever you want
        return back();
    }

}
