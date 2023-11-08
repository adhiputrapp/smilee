<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Program extends Model
{
    use HasFactory, HasUuids;

    protected $guarded = ["id"];

    public function biro() : BelongsTo
    {
        return $this->belongsTo(Biro::class, 'nama_biro_relasi', 'nama_biro');
    }

    public function kegiatan() : HasMany
    {
        return $this->hasMany(Kegiatan::class, 'nama_program_relasi', 'nama_prgoram');
    }

    public function belanja()
    {
        return $this->hasMany(Belanja::class, 'program_id', 'id');
    }
}