<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class File extends Model
{
    use HasFactory, HasUuids;

    protected $guarded = ['id'];

    public function belanja(): BelongsTo
    {
        return $this->belongsTo(Belanja::class, 'UniqueId', 'id');
    }
}
