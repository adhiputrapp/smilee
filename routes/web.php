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
use Spatie\Permission\Middleware\PermissionMiddleware;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\BKUController;
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

Route::get('/',[DashboardController::class, 'index'])
->middleware(['auth', 'verified'])
->name('dashboard')
->middleware('permission:dashboard');

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
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit')->middleware('permission:profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update')->middleware('permission:profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy')->middleware('permission:profile.destroy');



    // Route::middleware(['auth','verified','role:admin'])->group(function () {
        Route::prefix('/biro')->controller(BiroController::class)->group(function () {
            Route::get('/index', 'index')->name('biros.index')->middleware('permission:biros.index');
            Route::get('/create', 'create')->name('biros.create')->middleware('permission:biros.create');
            Route::post('/store', 'store')->name('biros.store')->middleware('permission:biros.store');
            Route::get('/edit/{id}', 'edit')->name('biros.edit')->middleware('permission:biros.edit');
            Route::put('/update/{id}', 'update')->name('biros.update')->middleware('permission:biros.update');
            Route::get('/delete/{id}', 'destroy')->name('biros.delete')->middleware('permission:biros.delete');
        });

        Route::prefix('/program')->controller(ProgramController::class)->group(function () {
            Route::get('/index', 'index')->name('programs.index')->middleware('permission:programs.index');
            Route::get('/create', 'create')->name('programs.create')->middleware('permission:programs.create');
            Route::post('/store', 'store')->name('programs.store')->middleware('permission:programs.store');
            Route::get('/edit/{id}', 'edit')->name('programs.edit')->middleware('permission:programs.index');
            Route::put('/update/{id}', 'update')->name('programs.update')->middleware('permission:programs.update');
            Route::get('/delete/{id}', 'destroy')->name('programs.delete')->middleware('permission:programs.delete');
        });

        Route::prefix('/kegiatan')->controller(KegiatanController::class)->group(function () {
            Route::get('/index', 'index')->name('kegiatans.index')->middleware('permission:kegiatans.index');
            Route::get('/create', 'create')->name('kegiatans.create')->middleware('permission:kegiatans.create');
            Route::post('/store', 'store')->name('kegiatans.store')->middleware('permission:kegiatans.store');
            Route::get('/edit/{id}', 'edit')->name('kegiatans.edit')->middleware('permission:kegiatans.edit');
            Route::put('/update/{id}', 'update')->name('kegiatans.update')->middleware('permission:kegiatans.update');
            Route::get('/delete/{id}', 'destroy')->name('kegiatans.delete')->middleware('permission:kegiatans.delete');
        });

        Route::prefix('/subkegiatan')->controller(SubkegiatanController::class)->group(function () {
            Route::get('/index', 'index')->name('subkegiatans.index')->middleware('permission:subkegiatans.index');
            Route::get('/create', 'create')->name('subkegiatans.create')->middleware('permission:subkegiatans.create');
            Route::post('/store', 'store')->name('subkegiatans.store')->middleware('permission:subkegiatans.store');
            Route::get('/edit/{id}', 'edit')->name('subkegiatans.edit')->middleware('permission:subkegiatans.edit');
            Route::put('/update/{id}', 'update')->name('subkegiatans.update')->middleware('permission:subkegiatans.update');
            Route::get('/delete/{id}', 'destroy')->name('subkegiatans.delete')->middleware('permission:kegiatans.delete');
        });

        Route::prefix('/kodering')->controller(KoderingController::class)->group(function () {
            Route::get('/index', 'index')->name('koderings.index')->middleware('permission:koderings.index');
            Route::get('/create', 'create')->name('koderings.create')->middleware('permission:koderings.create');
            Route::post('/store', 'store')->name('koderings.store')->middleware('permission:koderings.store');
            Route::get('/edit/{id}', 'edit')->name('koderings.edit')->middleware('permission:koderings.edit');
            Route::put('/update/{id}', 'update')->name('koderings.update')->middleware('permission:koderings.update');
            Route::get('/delete/{id}', 'destroy')->name('koderings.delete')->middleware('permission:koderings.delete');
        });

        Route::prefix('/role')->controller(RoleController::class)->group(function () {
            Route::get('/index', 'index')->name('roles.index')->middleware('permission:roles.index');
            Route::get('/create', 'create')->name('roles.create')->middleware('permission:roles.create');
            Route::post('/store', 'store')->name('roles.store')->middleware('permission:roles.store');
            Route::get('/edit/{id}', 'edit')->name('roles.edit')->middleware('permission:roles.edit');
            Route::put('/update/{id}', 'update')->name('roles.update')->middleware('permission:roles.update');
            Route::get('/delete/{id}', 'destroy')->name('roles.delete')->middleware('permission:roles.delete');
            Route::get('/addRole', 'addRole')->name('addRole')->middleware('role:admin');
            Route::post('/addRoleCreate', 'addRoleCreate')->name('addRoleCreate')->middleware('role:admin');
        });

        Route::prefix('/user')->controller(UserController::class)->group(function () {
            Route::get('/index', 'index')->name('users.index')->middleware('permission:users.index');
            Route::get('/edit/{id}', 'edit')->name('users.edit')->middleware('permission:users.edit');
            Route::put('/update/{id}', 'update')->name('users.update')->middleware('permission:users.update');
            Route::get('/delete/{id}', 'destroy')->name('users.delete')->middleware('permission:users.delete');
        });
    // });


    Route::prefix('/pelimpahan')->controller(PelimpahanController::class)->group(function () {
        Route::get('/index', 'index')->name('pelimpahans.index')->middleware('permission:pelimpahans.index');
        Route::get('/create', 'create')->name('pelimpahans.create')->middleware('permission:pelimpahans.create');
        Route::post('/store', 'store')->name('pelimpahans.store')->middleware('permission:pelimpahans.store');
        Route::get('/edit/{id}', 'edit')->name('pelimpahans.edit')->middleware('permission:pelimpahans.edit');
        Route::put('/update/{id}', 'update')->name('pelimpahans.update')->middleware('permission:pelimpahans.update');
        Route::get('/delete/{id}', 'destroy')->name('pelimpahans.delete')->middleware('permission:pelimpahans.delete');
    });

    Route::prefix('/belanja')->controller(BelanjaController::class)->group(function () {
        Route::get('/index', 'index')->name('belanjas.index')->middleware('permission:belanjas.index');
        Route::get('/create', 'create')->name('belanjas.create')->middleware('permission:belanjas.create');
        Route::get('/search', 'searchForSubKegiatan')->name('belanjas.search')->middleware('permission:belanjas.search');
        Route::post('/store', 'store')->name('belanjas.store')->middleware('permission:belanjas.store');
        Route::get('/edit/{id}', 'edit')->name('belanjas.edit')->middleware('permission:belanjas.edit');
        Route::put('/update/{id}', 'update')->name('belanjas.update')->middleware('permission:belanjas.update');
        Route::get('/delete/{id}', 'destroy')->name('belanjas.delete')->middleware('permission:belanjas.delete');
        Route::get('/export', 'export')->name('belanjas.export')->middleware('permission:belanjas.export');
        Route::get('/show/{id}', 'show')->name('belanjas.show')->middleware('permission:belanjas.show');
    });

    Route::prefix('/anggaran')->controller(AnggaranController::class)->group(function () {
        Route::get('/index', 'index')->name('anggarans.index')->middleware('permission:anggarans.index');
        Route::get('/create', 'create')->name('anggarans.create')->middleware('permission:anggarans.create');
        Route::post('/store', 'store')->name('anggarans.store')->middleware('permission:anggarans.store');
        Route::get('/edit/{id}', 'edit')->name('anggarans.edit')->middleware('permission:anggarans.edit');
        Route::get('/search', 'searchForSubKegiatan')->name('anggarans.search');
        Route::put('/update/{id}', 'update')->name('anggarans.update')->middleware('permission:anggarans.update');
        Route::get('/delete/{id}', 'destroy')->name('anggarans.delete')->middleware('permission:anggarans.delete');
    });

    Route::prefix('/verifikasi')->controller(VerifikasiController::class)->group(function () {
        Route::get('/index', 'index')->name('verifikasis.index')->middleware('permission:verifikasis.index');
        Route::get('/form/{belanja_id}', 'showVerifikasiForm')->name('verifikasi.show')->middleware('permission:verifikasi.show');
        Route::post('/form/{belanja_id}', 'verifikasi')->name('verifikasi.submit')->middleware('permission:verifikasi.submit');
    });

    Route::prefix('/pengesahan')->controller(PengesahanController::class)->group(function () {
        Route::get('/index', 'index')->name('pengesahans.index')->middleware('permission:pengesahans.index');
        Route::get('/form/{belanja_id}', 'showVerifikasiForm')->name('pengesahans.show')->middleware('permission:pengesahans.show');
        Route::post('/form/{belanja_id}', 'verifikasi')->name('pengesahans.submit')->middleware('permission:pengesahans.submit');
        Route::get('/index', 'index')->name('pengesahans.index');
        Route::get('/form/{belanja_id}', 'showPengesahanForm')->name('pengesahans.show');
        Route::post('/form/{belanja_id}', 'pengesahan')->name('pengesahans.submit');
    });

    Route::prefix('/laporan')->controller(BKUController::class)->group(function () {
        Route::get('/index', 'index')->name('laporan.index');
        Route::get('/export', 'export')->name('laporan.export');
        // Route::get('/form/{belanja_id}', 'showVerifikasiForm')->name('pengesahans.show');
        // Route::post('/form/{belanja_id}', 'verifikasi')->name('pengesahans.submit');
    });

    Route::prefix('/rincian-objek')->controller(RincianObjekController::class)->group(function () {
        Route::get('/', 'index')->name('rincian.objek.index');
        Route::get('/search', 'searchForSubKegiatan')->name('rincian.objek.search');
        Route::post('/', 'export')->name('rincian.objek.export');
    });

    Route::prefix('/spj3')->controller(SPJ3Controller::class)->group(function () {
        Route::get('/', 'index')->name('spj3.index');
        Route::post('/', 'export')->name('spj3.export');
    });
});



// Route::get('/laporan/doc',function () {
//     return view('user.laporan.bku');
// });

require __DIR__.'/auth.php';

