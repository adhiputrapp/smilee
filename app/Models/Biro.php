<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Biro extends Model
{
    use HasFactory, HasUuids;

    protected $guarded = ["id"];

    public function user(): HasMany
    {
        return $this->hasMany(User::class, 'biro_id', 'id');
    }

    public function pelimpahan(): HasMany
    {
        return $this->hasMany(Pelimpahan::class, 'biro_id', 'id');
    }

    public function programs() : HasMany
    {
        return $this->hasMany(Program::class, 'nama_biro_relasi', 'nama_biro');
    }

    public function belanja()
    {
        return $this->hasMany(Belanja::class, 'biro_id', 'id');
    }

}



