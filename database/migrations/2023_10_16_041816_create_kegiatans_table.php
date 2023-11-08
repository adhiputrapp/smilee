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
        Schema::create('kegiatans', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('kode_kegiatan');
            $table->string('nama_kegiatan');
            $table->string('nama_program_relasi');
            $table->index('nama_kegiatan');
            $table->index('nama_program_relasi');
            $table->foreign('nama_program_relasi')->references('nama_program')->on('programs')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kegiatans');
    }
};
