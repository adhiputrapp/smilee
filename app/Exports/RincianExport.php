<?php

namespace App\Exports;

use App\Models\Belanja;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\WithMapping;

class RincianExport implements FromArray, WithMapping
{
    // /**
    // * @return \Illuminate\Support\Collection
    // */
    // public function collection()
    // {
    //     return Belanja::all();
    // }
    protected $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function array(): array
    {
        return $this->data->toArray();    
    }
    
    public function map($row): array
    {
        return [
            $row['jenis_belanja'],
            $row['tanggal_belanja'],
            // Date::dateTimeToExcel($row->tanggal_belanja),
        ];
    }
}
