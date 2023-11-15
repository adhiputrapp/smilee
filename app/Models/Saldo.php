<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Saldo extends Model
{
    use HasFactory, HasUuids;

    protected $guarded = ["id"];

    public function belanja()
    {
        return $this->belongsTo(Belanja::class, 'belanja_id', 'id');
    }

    public function pelimpahan()
    {
        return $this->belongsTo(Pelimpahan::class, 'pelimpahan_id', 'id');
    }
}
