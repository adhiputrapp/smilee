<?php

namespace App\Exports;

use App\Models\Belanja;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithDrawings;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;


class BKUExport implements FromView, ShouldAutoSize, WithColumnWidths, WithStyles, WithDrawings
{
    public $belanjas;
    public $tahunAnggaran;
    public $bulanAnggaran;

    public function __construct($belanjas, $tahunAnggaran, $bulanAnggaran)
    {
        $this->belanjas = $belanjas;
        $this->tahunAnggaran = $tahunAnggaran;
        $this->bulanAnggaran = $bulanAnggaran;
    }

    public function view(): View
    {

        return view('user.laporan.bku',[
            'belanjas' => $this->belanjas,
            'tahunAnggaran' => $this->tahunAnggaran,
            'bulanAnggaran' => $this->bulanAnggaran
        ]);
    }

    public function columnWidths(): array
    {
        // Sesuaikan lebar kolom sesuai kebutuhan
        return [
            'A' => 4.29,
            'B' => 18,
            'C' => 26,
            'D' => 54.71,
            'E' => 19,
            'F' => 14.86,
            'G' => 16.14,
            'H' => 14.14,
            // ... sesuaikan dengan kolom-kolom lain
        ];
    }

    public function styles(Worksheet $sheet)
    {
        $sheet->getStyle('A1:H1')->getFont()->setBold(true);
        
        $sheet->getStyle('A2:H2')->getFont()->setName('Arial');
        $sheet->getStyle('A2:H2')->getFont()->setSize('13');
        
        $sheet->getStyle('A3:H3')->getFont()->setName('Arial');
        $sheet->getStyle('A3:H3')->getFont()->setSize('13');
        
        $sheet->getStyle('A4:H4')->getFont()->setName('Arial');
        $sheet->getStyle('A4:H4')->getFont()->setSize('13');

        $sheet->getStyle('A5:H5')->getFont()->setName('Arial');
        $sheet->getStyle('A5:H5')->getFont()->setSize('26');
        $sheet->getStyle('A5:H5')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);

        $sheet->getStyle('A6:H6')->getFont()->setName('Arial');
        $sheet->getStyle('A6:H6')->getFont()->setSize('26');
        $sheet->getStyle('A6:H6')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
     
        $sheet->getStyle('A7:H7') ->getFont()->setName('Arial');
        $sheet->getStyle('A7:H7') ->getFont()->setSize('18');
        $sheet->getStyle('A7:H7')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);

        $borders = [
            'borders' => [
                'allBorders' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                    'color' => ['hex' => '#000000'],
                ]
            ]
        ];
     
        $sheet->getStyle('A8:H8')->getFont()->setName('Arial');
        $sheet->getStyle('A8:H8')->getFont()->setBold(true);
        $sheet->getStyle('A8:H8')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        $sheet->getStyle('A8:H8')->applyFromArray($borders);
        
        $sheet->getRowDimension('9')->setRowHeight(10.5);

        $sheet->getStyle('A9:H9')->getFont()->setName('Arial');
        $sheet->getStyle('A9:H9')->getFont()->setSize('8');
        $sheet->getStyle('A9:H9')->getFont()->setBold(true);
        $sheet->getStyle('A9:H9')->getFont()->setItalic(true);
        $sheet->getStyle('A9:H9')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        $sheet->getStyle('A9:H9')->applyFromArray($borders);

        $sheet->getStyle("A12:H12")->getAlignment()->setWrapText(true);
        $sheet->getStyle("A12:H12")->getFont()->setName('Arial');
        $sheet->getStyle("A12:H12")->getFont()->setSize(12);
        $sheet->getStyle('A12:H12')->getFont()->setBold(true);
        $sheet->getStyle('A12:H12')->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
        $sheet->getStyle('A12:H12')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        $sheet->getStyle('A12:H12')->applyFromArray($borders);
        // $sheet->getStyle('A15:H15')->applyFromArray($borders);
     
    }

    public function drawings() {
        $drawing = new Drawing();
        $drawing->setName('logo');
        $drawing->setDescription('logo');
        $drawing->setPath(public_path('logo.png'));
        $drawing->setHeight(80.24); // logo height
        $drawing->setWidth(75.44); // logo width
        $drawing->setOffsetX(25);
        $drawing->setOffsetY(8);
        $drawing->setCoordinates('A1');

        return $drawing;
    }
}
