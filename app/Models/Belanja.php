<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Belanja extends Model
{
    use HasFactory, HasUuids;

    protected $guarded = ["id"];

    protected $casts = [
        'tanggal_belanja' => 'date'
    ];

    public function biro()
    {
        return $this->belongsTo(Biro::class, 'biro_id', 'id');
    }
    
    public function program()
    {
        return $this->belongsTo(Program::class, 'program_id', 'id');
    }
    
    public function kegiatan()
    {
        return $this->belongsTo(Kegiatan::class, 'kegiatan_id', 'id');
    }
    
    public function subkegiatan()
    {
        return $this->belongsTo(SubKegiatan::class, 'subkegiatan_id', 'id');
    }
    
    public function kodering()
    {
        return $this->belongsTo(Kodering::class, 'kodering_id', 'id');
    }
    
    public function verifikasi()
    {
        return $this->hasOne(Verifikasi::class, 'belanja_id', 'id');
    }

    public function pengesahan()
    {
        return $this->hasOne(Pengesahan::class, 'belanja_id', 'id');
    }

    public function saldo()
    {
        return $this->hasOne(Saldo::class, 'belanja_id', 'id');
    }
    
}
