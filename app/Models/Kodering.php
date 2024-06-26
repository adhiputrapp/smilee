<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Kodering extends Model
{
    use HasFactory, HasUuids;

    protected $guarded = ["id"];

    public function subkegiatan() : HasMany
    {
        return $this->hasMany(SubKegiatan::class, 'nama_sub_kegiatan', 'nama_sub_kegiatan_relasi');
    }

    public function belanja()
    {
        return $this->hasMany(Belanja::class, 'kodering_id', 'id');
    }
    
    public function anggaran() : HasMany
    {
        return $this->hasMany(Anggaran::class, 'subkegiatan_id', 'id');
    }
}
