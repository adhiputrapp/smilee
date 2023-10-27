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
        Schema::create('verifikasis', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('belanja_id')->references('id')->on('belanjas')->onUpdate('cascade')->onDelete('cascade');
            $table->string('verif');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('verikasis');
    }
};
