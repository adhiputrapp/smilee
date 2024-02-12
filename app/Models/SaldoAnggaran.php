<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SaldoAnggaran extends Model
{
    use HasFactory, HasUuids;

    protected $guarded = ['id'];

    public function anggaran() : BelongsTo
    {
        return $this->belongsTo(Anggaran::class, 'anggaran_id','id');
    }

    public function belanja() : BelongsTo
    {
        return $this->belongsTo(Belanja::class, 'belanja_id', 'id');
    }
}
