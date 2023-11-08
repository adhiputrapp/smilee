<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('programs', function (Blueprint $table) {
            $table->Uuid('id')->primary();
            $table->string('kode_program');
            $table->string('nama_program');
            $table->string('nama_biro_relasi');
            $table->index('nama_program');
            $table->index('nama_biro_relasi');
            $table->foreign('nama_biro_relasi')->references('nama_biro')->on('biros')->onUpdate('cascade');
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('programs');
    }
};
