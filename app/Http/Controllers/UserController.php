<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Spatie\Permission\Models\Role;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function index() : View {
        $data = User::with('biro', 'roles')->orderBy('name', 'ASC')->get();

        return view('master.user.index', [
            'data' => $data
        ]);
    }

    
}
