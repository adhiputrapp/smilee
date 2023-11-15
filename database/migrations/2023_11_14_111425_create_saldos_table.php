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
        Schema::create('saldos', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignuuid('belanja_id')->references('id')->on('belanjas')->onUpdate('cascade');
            $table->foreignuuid('pelimpahan_id')->references('id')->on('pelimpahans')->onUpdate('cascade');
            $table->foreignuuid('biro_id')->references('id')->on('biros')->onUpdate('cascade');
            $table->integer('saldo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('saldos');
    }
};
