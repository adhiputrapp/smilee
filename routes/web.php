<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BiroController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\KegiatanController;
use App\Http\Controllers\SubkegiatanController;
use App\Http\Controllers\KoderingController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PelimpahanController;
use App\Http\Controllers\BelanjaController;
use App\Http\Controllers\AnggaranController;
use App\Http\Controllers\VerifikasiController;
use App\Http\Controllers\PengesahanController;
use App\Http\Controllers\RincianObjekController;
use App\Http\Controllers\SPJ3Controller;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/register', function () {
//     // Periksa apakah pengguna memiliki peran 'admin'
//     if (auth()->check() && auth()->user()->hasRole('admin')) {
//         return view('auth.register');
//     } else {
//         // Jika bukan admin, arahkan ke halaman lain atau tampilkan pesan kesalahan
//         return redirect()->route('biros.index');
//     }
// })->name('register')->middleware(['auth', 'verified']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::prefix('/biro')->controller(BiroController::class)->group(function () {
        Route::get('/index', 'index')->name('biros.index');
        Route::get('/create', 'create')->name('biros.create');
        Route::post('/store', 'store')->name('biros.store');
        Route::get('/edit/{id}', 'edit')->name('biros.edit');
        Route::put('/update/{id}', 'update')->name('biros.update');
        Route::get('/delete/{id}', 'destroy')->name('biros.delete');
    });
    
    Route::prefix('/program')->controller(ProgramController::class)->group(function () {
        Route::get('/index', 'index')->name('programs.index');
        Route::get('/create', 'create')->name('programs.create');
        Route::post('/store', 'store')->name('programs.store');
        Route::get('/edit/{id}', 'edit')->name('programs.edit');
        Route::put('/update/{id}', 'update')->name('programs.update');
        Route::get('/delete/{id}', 'destroy')->name('programs.delete');
    });
    
    Route::prefix('/kegiatan')->controller(KegiatanController::class)->group(function () {
        Route::get('/index', 'index')->name('kegiatans.index');
        Route::get('/create', 'create')->name('kegiatans.create');
        Route::post('/store', 'store')->name('kegiatans.store');
        Route::get('/edit/{id}', 'edit')->name('kegiatans.edit');
        Route::put('/update/{id}', 'update')->name('kegiatans.update');
        Route::get('/delete/{id}', 'destroy')->name('kegiatans.delete');
    });
    
    Route::prefix('/subkegiatan')->controller(SubkegiatanController::class)->group(function () {
        Route::get('/index', 'index')->name('subkegiatans.index');
        Route::get('/create', 'create')->name('subkegiatans.create');
        Route::post('/store', 'store')->name('subkegiatans.store');
        Route::get('/edit/{id}', 'edit')->name('subkegiatans.edit');
        Route::put('/update/{id}', 'update')->name('subkegiatans.update');
        Route::get('/delete/{id}', 'destroy')->name('subkegiatans.delete');
    });
    
    Route::prefix('/kodering')->controller(KoderingController::class)->group(function () {
        Route::get('/index', 'index')->name('koderings.index');
        Route::get('/create', 'create')->name('koderings.create');
        Route::post('/store', 'store')->name('koderings.store');
        Route::get('/edit/{id}', 'edit')->name('koderings.edit');
        Route::put('/update/{id}', 'update')->name('koderings.update');
        Route::get('/delete/{id}', 'destroy')->name('koderings.delete');
    });
    
    Route::prefix('/role')->controller(RoleController::class)->group(function () {
        Route::get('/index', 'index')->name('roles.index');
        Route::get('/create', 'create')->name('roles.create');
        Route::post('/store', 'store')->name('roles.store');
        Route::get('/edit/{id}', 'edit')->name('roles.edit');
        Route::put('/update/{id}', 'update')->name('roles.update');
        Route::get('/delete/{id}', 'destroy')->name('roles.delete');
    });
    
    Route::prefix('/user')->controller(UserController::class)->group(function () {
        Route::get('/index', 'index')->name('users.index');
        Route::get('/edit/{id}', 'edit')->name('users.edit');
        Route::put('/update/{id}', 'update')->name('users.update');
        Route::get('/delete/{id}', 'destroy')->name('users.delete');
    });
    
    Route::prefix('/pelimpahan')->controller(PelimpahanController::class)->group(function () {
        Route::get('/index', 'index')->name('pelimpahans.index');
        Route::get('/create', 'create')->name('pelimpahans.create');
        Route::post('/store', 'store')->name('pelimpahans.store');
        Route::get('/edit/{id}', 'edit')->name('pelimpahans.edit');
        Route::put('/update/{id}', 'update')->name('pelimpahans.update');
        Route::get('/delete/{id}', 'destroy')->name('pelimpahans.delete');
    });
    
    Route::prefix('/belanja')->controller(BelanjaController::class)->group(function () {
        Route::get('/index', 'index')->name('belanjas.index');
        Route::get('/create', 'create')->name('belanjas.create');
        Route::post('/store', 'store')->name('belanjas.store');
        Route::get('/edit/{id}', 'edit')->name('belanjas.edit');
        Route::put('/update/{id}', 'update')->name('belanjas.update');
        Route::get('/delete/{id}', 'destroy')->name('belanjas.delete');
        Route::get('/export', 'export')->name('belanjas.export');
    });
    
    Route::prefix('/anggaran')->controller(AnggaranController::class)->group(function () {
        Route::get('/index', 'index')->name('anggarans.index');
        Route::get('/create', 'create')->name('anggarans.create');
        Route::post('/store', 'store')->name('anggarans.store');
        Route::get('/edit/{id}', 'edit')->name('anggarans.edit');
        Route::put('/update/{id}', 'update')->name('anggarans.update');
        Route::get('/delete/{id}', 'destroy')->name('anggarans.delete');
    });
    
    Route::prefix('/verifikasi')->controller(VerifikasiController::class)->group(function () {
        Route::get('/index', 'index')->name('verifikasis.index');
        Route::get('/form/{belanja_id}', 'showVerifikasiForm')->name('verifikasi.show');
        Route::post('/form/{belanja_id}', 'verifikasi')->name('verifikasi.submit');
    });
    
    Route::prefix('/pengesahan')->controller(PengesahanController::class)->group(function () {
        Route::get('/index', 'index')->name('pengesahans.index');
        Route::get('/form/{belanja_id}', 'showVerifikasiForm')->name('pengesahans.show');
        Route::post('/form/{belanja_id}', 'verifikasi')->name('pengesahans.submit');
    });

    Route::prefix('/rincian-objek')->controller(RincianObjekController::class, 'index')->group(function () {
        Route::get('/', 'index')->name('rincian.objek.index');
        Route::get('/search', 'searchForSubKegiatan')->name('rincian.objek.search');
        Route::post('/', 'export')->name('rincian.objek.export');
    });

    Route::prefix('/spj3')->controller(SPJ3Controller::class, 'index')->group(function () {
        Route::get('/', 'index')->name('spj3.index');
        Route::post('/', 'export')->name('spj3.export');
    });
});


require __DIR__.'/auth.php';

