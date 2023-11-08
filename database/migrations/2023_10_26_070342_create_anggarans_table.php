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
        Schema::create('anggarans', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('subkegiatan_id')->references('id')->on('sub_kegiatans')->onUpdate('cascade')->onDelete('cascade')->nullable();
            $table->foreignUuid('kodering_id')->references('id')->on('koderings')->onUpdate('cascade')->onDelete('cascade')->nullable();
            $table->string('uraian');
            $table->date('tanggal_anggaran');
            $table->integer('jumlah_anggaran');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('anggarans');
    }
};
