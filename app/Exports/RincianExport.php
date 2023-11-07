<?php

namespace App\Exports;

use App\Models\Belanja;
use Maatwebsite\Excel\Concerns\FromCollection;

class RincianExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Belanja::all();
    }
}
