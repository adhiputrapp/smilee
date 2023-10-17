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

    public function subkegiatan() : BelongsTo
    {
        return $this->belongsTo(Kegiatan::class, 'nama_sub_kegiatan_relasi', 'nama_sub_kegiatan');
    }
}
