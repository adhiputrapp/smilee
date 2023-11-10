<?php

namespace App\Exports;

use App\Models\Belanja;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;


class BKUExport implements FromView, ShouldAutoSize, WithStyles, WithColumnWidths
{
    protected $belanjas;

    public function __construct($belanjas)
    {
        $this->belanjas = $belanjas;
    }

    public function view(): View
    {

        return view('user.laporan.bku',[
            'belanjas' => $this->belanjas
        ]);
    }

    public function columnWidths(): array
    {
        // Sesuaikan lebar kolom sesuai kebutuhan
        return [
            'A' => 4,29,
            'B' => 18,
            'C' => 26,
            'D' => 54,71,
            'E' => 19,
            'F' => 14,86,
            'G' => 16,14,
            'H' => 14,14,
            // ... sesuaikan dengan kolom-kolom lain
        ];
    }

    public function styles(Worksheet $sheet)
    {
        $sheet->getStyle('A1:H1')->getFont()->setBold(true);
    }
}
