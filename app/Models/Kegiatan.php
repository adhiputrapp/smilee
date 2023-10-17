<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Kegiatan extends Model
{
    use HasFactory, HasUuids;

    protected $guarded = ["id"];

    public function program() : BelongsTo
    {
        return $this->belongsTo(Program::class, 'nama_program_relasi', 'nama_prgoram');
    }

    public function subkegiatan() : HasMany
    {
        return $this->hasMany(SubKegiatan::class, 'nama_kegiatan_relasi', 'nama_kegiatan');
    }

}
