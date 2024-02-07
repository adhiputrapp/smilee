<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Pelimpahan extends Model
{
    use HasFactory, HasUuids;

    protected $guarded = ["id"];

    public function biro(): BelongsTo
    {
        return $this->belongsTo(Biro::class, 'biro_id', 'id');
    }
    
    public function subkegiatan(): BelongsTo
    {
        return $this->belongsTo(SubKegiatan::class, 'subkegiatan_id', 'id');
    }
}