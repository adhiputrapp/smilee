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
        Schema::create('koderings', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('kode_kodering');
            $table->string('nama_kodering');
            $table->string('nama_sub_kegiatan_relasi');
            $table->index('nama_sub_kegiatan_relasi');
            $table->foreign('nama_sub_kegiatan_relasi')->references('nama_sub_kegiatan')->on('sub_kegiatans')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('koderings');
    }
};
