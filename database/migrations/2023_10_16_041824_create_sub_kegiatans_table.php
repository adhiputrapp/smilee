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
        Schema::create('sub_kegiatans', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('kode_sub_kegiatan');
            $table->string('nama_sub_kegiatan');
            $table->string('nama_kegiatan_relasi');
            $table->index('nama_sub_kegiatan');
            $table->index('nama_kegiatan_relasi');
            $table->foreign('nama_kegiatan_relasi')->references('nama_kegiatan')->on('kegiatans')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sub_kegiatans');
    }
};
