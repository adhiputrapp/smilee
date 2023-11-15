<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;


class Anggaran extends Model
{
    use HasFactory, HasUuids;

    protected $guarded = ["id"];

    // protected $fillable = [
    //     'subkegiatan_id',
    //     'kodering_id',
    //     'uraian',
    //     'tanggal_anggaran',
    //     'jumlah_anggaran',
    // ];

    public function subkegiatan()
    {
        return $this->belongsTo(SubKegiatan::class, 'subkegiatan_id', 'id');
    }

    public function kodering() : BelongsTo
    {
        return $this->belongsTo(Kodering::class, 'kodering_id', 'id');
    }

}
