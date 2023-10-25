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
        Schema::create('belanjas', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->date('tanggal_belanja');
            $table->string('jenis_belanja');
            $table->integer('pengeluaran');
            $table->integer('nourut');
            $table->integer('notbp');
            $table->string('uraian');
            $table->foreignuuid('biro_id')->references('id')->on('biros')->onUpdate('cascade');
            $table->foreignuuid('program_id')->references('id')->on('programs')->onUpdate('cascade');
            $table->foreignuuid('kegiatan_id')->references('id')->on('kegiatans')->onUpdate('cascade');
            $table->foreignuuid('subkegiatan_id')->references('id')->on('sub_kegiatans')->onUpdate('cascade');
            $table->foreignuuid('kodering_id')->references('id')->on('koderings')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('belanjas');
    }
};
