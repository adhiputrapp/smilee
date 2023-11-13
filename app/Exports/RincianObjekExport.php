<?php

namespace App\Exports;

use Illuminate\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithDrawings;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class RincianObjekExport implements FromView, WithDrawings, WithStyles, WithColumnWidths, WithColumnFormatting
{
    public $data;
    public $tahun;
    public $sumLS;
    public $sumTU;
    public $sumUPGU;
    public $kodering;
    public $anggaran;
    public $pelimpahan;
    public $eom;

    public function __construct($data, $tahun, $sumLS, $sumTU, $sumUPGU, $kodering, $anggaran, $pelimpahan, $eom) {
        $this->data = $data;
        $this->tahun = $tahun;
        $this->sumLS = $sumLS;
        $this->sumTU = $sumTU;
        $this->sumUPGU = $sumUPGU;
        $this->kodering = $kodering;
        $this->anggaran = $anggaran;
        $this->pelimpahan = $pelimpahan;
        $this->eom = $eom;
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function view() : View
    {
        return view('laporan.rincian-objek.export', [
            'data' => $this->data,
            'tahun' => $this->tahun,
            'sumLS' => $this->sumLS,
            'sumTU' => $this->sumTU,
            'sumUPGU' => $this->sumUPGU,
            'kodering' => $this->kodering,
            'anggaran' => $this->anggaran,
            'pelimpahan' => $this->pelimpahan,
            'eom' => $this->eom,
        ]);
    }

    public function styles(Worksheet $sheet) {
        for ($i=1; $i < 4; $i++) { 
            $sheet->getStyle("C{$i}")->getFont()->setName('Arial');
            $sheet->getStyle("C{$i}")->getFont()->setSize(13);
        }

        for ($i=7; $i < 11; $i++) { 
            $sheet->getStyle("A{$i}:D{$i}")->getFont()->setName('Arial');
            $sheet->getStyle("A{$i}:D{$i}")->getFont()->setSize(12);
        }

        $sheet->getStyle("A11:H11")->getFont()->setName('Arial');
        $sheet->getStyle("A11:H11")->getFont()->setSize(16);
        $sheet->getStyle("A11:H11")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
        
        $sheet->getStyle("A12:H12")->getFont()->setName('Arial');
        $sheet->getStyle("A12:H12")->getFont()->setSize(14);
        $sheet->getStyle("A12:H12")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);

        $borders = [
            'borders' => [
                'allBorders' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                    'color' => ['hex' => '#000000'],
                ]
            ]
        ];

        $sheet->getRowDimension('14')->setRowHeight(18);
        $sheet->getRowDimension('15')->setRowHeight(22.5);

        $sheet->getStyle("A14:H14")->getAlignment()->setWrapText(true);
        $sheet->getStyle("A14:H14")->getFont()->setName('Arial');
        $sheet->getStyle("A14:H14")->getFont()->setSize(12);
        $sheet->getStyle('A14:H14')->getFont()->setBold(true);
        $sheet->getStyle('A14:H14')->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
        $sheet->getStyle('A14:H14')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        $sheet->getStyle('A14:H14')->applyFromArray($borders);
        $sheet->getStyle('A15:H15')->applyFromArray($borders);
        
        $sheet->getStyle("A16:H16")->getAlignment()->setWrapText(true);
        $sheet->getStyle("A16:H16")->getFont()->setName('Arial');
        $sheet->getStyle("A16:H16")->getFont()->setSize(6);
        $sheet->getStyle('A16:H16')->getFont()->setBold(true);
        $sheet->getStyle('A16:H16')->getFont()->setItalic(true);
        $sheet->getStyle('A16:H16')->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
        $sheet->getStyle('A16:H16')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        $sheet->getStyle('A16:H16')->applyFromArray($borders);

        $sheet->getStyle("F21:H21")->getFont()->setName('Arial');
        $sheet->getStyle("F21:H21")->getFont()->setSize(12);
        $sheet->getStyle('F21:H21')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        
        $sheet->getStyle("C23:G24")->getFont()->setName('Arial');
        $sheet->getStyle("C23:G24")->getFont()->setSize(12);
        $sheet->getStyle('C23:G24')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);

        $highestRow = $sheet->getHighestRow();

        $sheet->getStyle('D'.($highestRow - 5).':H'.($highestRow - 5))->getFont()->setBold(true);
        $sheet->getStyle('D'.($highestRow - 5).':G'.($highestRow - 5))->getFont()->setName('Arial');
        $sheet->getStyle('D'.($highestRow - 5).':G'.($highestRow - 5))->getFont()->setSize(12);
        $sheet->getStyle('D'.($highestRow - 5))->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT);
        $sheet->getStyle('E'.($highestRow - 5).':H'.($highestRow - 5))->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
        $sheet->getStyle('A'.($highestRow - 5).':H'.($highestRow - 5))->applyFromArray($borders);
        $sheet->getStyle('A'.($highestRow - 5).':H'.($highestRow - 5))->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
        $sheet->getRowDimension($highestRow - 5)->setRowHeight(48);

        $sheet->getRowDimension(17)->setRowHeight(31.5);

        for ($i=17; $i < $highestRow - 5; $i++) { 
            $sheet->getRowDimension($i + 1)->setRowHeight(48);
            $sheet->getStyle("A{$i}:H{$i}")->applyFromArray($borders);
            $sheet->getStyle("A{$i}:H{$i}")->getFont()->setName('Arial');
            $sheet->getStyle("A{$i}:H{$i}")->getFont()->setSize(12);
            $sheet->getStyle("A{$i}:H{$i}")->getAlignment()->setWrapText(true);
            $sheet->getStyle("A{$i}:H{$i}")->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);

            $sheet->getStyle("A{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
            $sheet->getStyle("B{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);        
            $sheet->getStyle("C{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
            $sheet->getStyle("D{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT);
            $sheet->getStyle("E{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
            $sheet->getStyle("F{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
            $sheet->getStyle("G{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
            $sheet->getStyle("H{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
        }

        $sheet->getStyle('D9')->getNumberFormat()->setFormatCode('_(#,##_);_(\(#,##\);_("-"??_);_(@_)');
        $sheet->getStyle('D9')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT);
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

    public function columnWidths(): array {
        return [
            'A' => 4.89,
            'B' => 18.11,
            'C' => 24.33,
            'D' => 47.11,
            'E' => 20.22,
            'F' => 16.89,
            'G' => 16.89,
            'H' => 16.89,
        ];
    }

    public function columnFormats(): array {
        return [
            'E' => NumberFormat::FORMAT_ACCOUNTING_ID,
            'F' => NumberFormat::FORMAT_ACCOUNTING_ID,
            'G' => NumberFormat::FORMAT_ACCOUNTING_ID,
            'H' => NumberFormat::FORMAT_ACCOUNTING_ID,
        ];
    }
}
