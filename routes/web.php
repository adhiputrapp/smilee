<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BiroController;
use App\Http\Controllers\ProgramController;

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

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

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
require __DIR__.'/auth.php';

