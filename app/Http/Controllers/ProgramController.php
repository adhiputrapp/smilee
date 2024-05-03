<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\View\View;
use App\Models\Biro;
use App\Models\Program;

class ProgramController extends Controller
{
    public function index(): View
    {
        return view('master.program.index',[
            'programs' => Program::orderby('kode_program','ASC')->with('biro')->get()
        ]);
    }

    public function create(): View
    {
        return view('master.program.create', [
            'biros' => Biro::all()
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'nama_program' => 'required',
            'kode_program' => 'required',
            'nama_biro_relasi' => 'required',
        ]);

        Program::create([
            'id' => Str::uuid(),
            'nama_program' => $request->nama_program,
            'kode_program' => $request->kode_program,
            'nama_biro_relasi' => $request->nama_biro_relasi
        ]);

        return redirect()->route('programs.index');
    }

    public function edit($id): View 
    {
        $programs = Program::with('biro')->find($id);
        $biros = Biro::all();

        return view('master.program.edit', compact('programs', 'biros','id'));
    }

    public function update(Request $request, $id): RedirectResponse
    {
        $request->validate([
            'kode_program' => 'required|string|max:255',
            'nama_program' => 'required|string|max:255',
            'nama_biro_relasi' => 'required',
        ]);
    
        $program = Program::find($id);

        $program->kode_program = $request->kode_program;
        $program->nama_program = $request->nama_program;
        $program->nama_biro_relasi = $request->nama_biro_relasi;

        $program->save();

        return redirect()->route('programs.index')->with('success', 'Program berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $programs = Program::find($id);
        $programs->delete();

        return redirect()->route('programs.index')->with('success', 'Program berhasil dihapus.');
    }
}
