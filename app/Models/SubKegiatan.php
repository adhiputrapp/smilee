<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class SubKegiatan extends Model
{
    use HasFactory, HasUuids;

    protected $guarded = ["id"];

    public function kegiatan() : BelongsTo
    {
        return $this->belongsTo(Kegiatan::class, 'nama_kegiatan_relasi', 'nama_kegiatan');
    }

    public function kodering() : HasMany
    {
        return $this->hasMany(Kodering::class, 'nama_sub_kegiatan_relasi', 'nama_sub_kegiatan');
    }

}

