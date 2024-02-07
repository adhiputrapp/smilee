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
        Schema::create('saldo_anggarans', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignuuid('anggaran_id')->references('id')->on('anggarans')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignuuid('belanja_id')->references('id')->on('belanjas')->onUpdate('cascade')->onDelete('cascade');
            $table->bigInteger('nominal');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('saldo_anggarans');
    }
};
