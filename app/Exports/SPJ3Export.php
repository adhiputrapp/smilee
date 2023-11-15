<?php

namespace App\Exports;

use Illuminate\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithDrawings;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class SPJ3Export implements FromView, WithDrawings, WithColumnWidths, WithStyles
{
    public $tahun;
    public $subKegiatan;
    public $kegiatan;
    public $program;

    public function __construct($tahun, $subKegiatan, $kegiatan, $program) {
        $this->tahun = $tahun;
        $this->subKegiatan = $subKegiatan;
        $this->kegiatan = $kegiatan;
        $this->program = $program;
    }

    public function view() : View {
        return view('laporan.spj3.export', [
            'tahun' => $this->tahun,
            'subKegiatan' => $this->subKegiatan,
            'kegiatan' => $this->kegiatan,
            'program' => $this->program
        ]);
    }

    public function styles(Worksheet $sheet) {
        $sheet->getStyle("B1")->getFont()->setName('Arial');
        $sheet->getStyle("B1")->getFont()->setSize(13);
        
        $sheet->getStyle("B2")->getFont()->setName('Arial');
        $sheet->getStyle("B2")->getFont()->setSize(13);
        
        $sheet->getStyle("B3")->getFont()->setName('Arial');
        $sheet->getStyle("B3")->getFont()->setSize(13);

        $sheet->getStyle("A6:P6")->getFont()->setBold(true);
        $sheet->getStyle("A6:P6")->getFont()->setName('Arial');
        $sheet->getStyle("A6:P6")->getFont()->setSize(16);
        $sheet->getStyle("A6:P6")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

        $sheet->getStyle("A7:P7")->getFont()->setBold(true);
        $sheet->getStyle("A7:P7")->getFont()->setName('Arial');
        $sheet->getStyle("A7:P7")->getFont()->setSize(16);
        $sheet->getStyle("A7:P7")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

        $sheet->getStyle("A8:P8")->getFont()->setBold(true);
        $sheet->getStyle("A8:P8")->getFont()->setName('Arial');
        $sheet->getStyle("A8:P8")->getFont()->setSize(16);
        $sheet->getStyle("A8:P8")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

        $sheet->getStyle("A9:C9")->getFont()->setName('Arial');
        $sheet->getStyle("A9:C9")->getFont()->setSize(12);

        $sheet->getStyle("A10:C10")->getFont()->setName('Arial');
        $sheet->getStyle("A10:C10")->getFont()->setSize(12);

        $sheet->getStyle("A11:C11")->getFont()->setName('Arial');
        $sheet->getStyle("A11:C11")->getFont()->setSize(12);

        $sheet->getStyle("A12:C12")->getFont()->setName('Arial');
        $sheet->getStyle("A12:C12")->getFont()->setSize(12);

        $sheet->getStyle("A13:C13")->getFont()->setName('Arial');
        $sheet->getStyle("A13:C13")->getFont()->setSize(12);

        $sheet->getStyle("A14:C14")->getFont()->setName('Arial');
        $sheet->getStyle("A14:C14")->getFont()->setSize(12);

        $borders = [
            'borders' => [
                'allBorders' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                    'color' => ['hex' => '#000000'],
                ]
            ]
        ];

        $sheet->getStyle("A16:O18")->getFont()->setName('Arial');
        $sheet->getStyle("A16:O18")->getFont()->setSize(12);
        $sheet->getStyle("A16:O18")->getFont()->setBold(true);
        $sheet->getStyle("A16:O18")->getAlignment()->setWrapText(true);
        $sheet->getStyle("A16:O18")->getAlignment()->setVertical(Alignment::VERTICAL_CENTER);
        $sheet->getStyle("A16:O18")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
        $sheet->getStyle("A16:O18")->applyFromArray($borders);

        $sheet->getStyle("A19:O19")->getFont()->setName('Arial');
        $sheet->getStyle("A19:O19")->getFont()->setSize(8);
        $sheet->getStyle("A19:O19")->getFont()->setBold(true);
        $sheet->getStyle("A19:O19")->getFont()->setItalic(true);
        $sheet->getStyle("A19:O19")->getAlignment()->setVertical(Alignment::VERTICAL_CENTER);
        $sheet->getStyle("A19:O19")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
        $sheet->getStyle("A19:O19")->applyFromArray($borders);

        $sheet->getStyle("B22:B23")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
        $sheet->getStyle("B22:B23")->getFont()->setName("Arial");
        $sheet->getStyle("B22:B23")->getFont()->setSize(12);

        $sheet->getStyle("N21:N23")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
        $sheet->getStyle("N21:N23")->getFont()->setName("Arial");
        $sheet->getStyle("N21:N23")->getFont()->setSize(12);
    }

    public function drawings()
    {
        $drawing = new Drawing();
        $drawing->setName('logo');
        $drawing->setDescription('logo');
        $drawing->setPath(public_path('logo.png'));
        $drawing->setHeight(80.24); // logo height
        $drawing->setWidth(75.44); // logo width
        $drawing->setOffsetX(40);
        $drawing->setOffsetY(12);
        $drawing->setCoordinates('A1');

        return $drawing;
    }

    public function columnWidths(): array
    {
        return [
            'A' => 22.56,
            'B' => 21.89,
            'C' => 65.67,
            'D' => 16.89,
            'E' => 16.89,
            'F' => 16.89,
            'G' => 16.89,
            'H' => 16.89,
            'I' => 16.89,
            'J' => 16.89,
            'K' => 16.89,
            'L' => 16.89,
            'M' => 16.89,
            'N' => 19.22,
            'O' => 16.89,
            'P' => 16.89,
        ];
    }
}
