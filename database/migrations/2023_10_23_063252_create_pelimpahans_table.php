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
        Schema::create('pelimpahans', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('nodokumen');
            $table->date('tanggal_pelimpahan');
            $table->bigInteger('jumlah_pelimpahan');
            $table->foreignUuid('subkegiatan_id')->references('id')->on('sub_kegiatans')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignUuid('biro_id')->references('id')->on('biros')->onUpdate('cascade')->onDelete('cascade');
            $table->string('note');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pelimpahans');
    }
};
