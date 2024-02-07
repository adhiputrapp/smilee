<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pajak extends Model
{
    use HasFactory, HasUuids;

    protected $guarded = ['id'];

    public function belanja()
    {
        return $this->belongsTo(Belanja::class, 'belanja_id', 'id');
    }
}
