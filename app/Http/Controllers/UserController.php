<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Biro;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Spatie\Permission\Models\Role;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function index() : View {
        $data = User::with('biro')->orderBy('name', 'ASC')->get();

        return view('master.user.index', [
            'data' => $data
        ]);
    }
    
    public function edit($id)
    {
        $users = User::with('biro')->findOrFail($id);
        $biros = Biro::all(); 

        return view('master.user.edit', compact('users', 'biros', 'id'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'biro_id' => 'required|exists:biros,id', 
        ]);

        $user = User::find($id);

        $user->update($request->all());

        return redirect()->route('users.index')->with('success', 'Data pengguna berhasil diperbarui!');
    }
}
