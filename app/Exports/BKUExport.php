<?php

namespace App\Exports;

use App\Models\Belanja;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromCollection;
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


class BKUExport implements FromCollection, ShouldAutoSize, WithColumnWidths, WithStyles, WithDrawings, WithEvents
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

    public function collection()
    {
        return collect($this->belanjas)->map(function ($item, $index)
        {
            $tahun = $this->tahunAnggaran;
            $bulan = $this->bulanAnggaran;
            
            return
            [
                'Tahun Anggaran' =>  $tahun,
                'Bulan Anggaran' =>  $bulan,
                'NObukti' => $item->nobukti,
                'Uraian' => $item->uraian,
                'Nama Kodering' => $item->kodering->nama_kodering,
                'Nama SubKegiatan' => $item->subkegiatan->nama_sub_kegiatan,
                // 'D' => $item->saldo->pelimpahan->jumlah_pengeluaran,
                'Pengeluaran' => $item->pengeluaran,
                'Nobukti' => $item->nobukti,
                
            ];
        });
    }

    // public function view(): View
    // {
        
        //     return view('laporan.bku.export',[
    //         'belanjas' => $this->belanjas,
    //         'tahunAnggaran' => $this->tahunAnggaran,
    //         'bulanAnggaran' => $this->bulanAnggaran
    //     ]);
    // }

    public function registerEvents(): array
    {
        // $tahun = $this->tahunAnggaran;

        return [
            AfterSheet::class => function (AfterSheet $event) {
                $number = 0;
                $row = 10;
                foreach ($this->belanjas as $item) {
                $event->sheet->mergeCells('A1:B4');
                $event->sheet->setCellValue('A1', "  ");
                $event->sheet->mergeCells('C1:H1');
                $event->sheet->setCellValue('C1', "  ");
                $event->sheet->mergeCells('C2:H2');
                $event->sheet->setCellValue('C2', 'PEMERINTAH PROVINSI JAWA BARAT');
                $event->sheet->mergeCells('C3:H3');
                $event->sheet->setCellValue('C3', 'BIRO UMUM SETDA PROVINSI JAWA BARAT');
                $event->sheet->mergeCells('C4:H4');
                $event->sheet->setCellValue('C4', 'TAHUN ANGGARAN '. $this->tahunAnggaran);
                $event->sheet->mergeCells('A5:H5');
                $event->sheet->setCellValue('A5', 'BUKU KAS UMUM');
                $event->sheet->mergeCells('A6:H6');
                $event->sheet->setCellValue('A6', 'SUB KEGIATAN '. strtoupper($item->subkegiatan->nama_sub_kegiatan));
                $event->sheet->mergeCells('A7:H7');
                $event->sheet->setCellValue('A7', 'Periode : 1 Sd. '. $this->bulanAnggaran->endOfMonth()->format('d'). " ". $this->bulanAnggaran->locale('id')->monthName. " ". $this->tahunAnggaran);
                $event->sheet->setCellValue('A8', 'NO');
                $event->sheet->setCellValue('B8', 'TANGGAL');
                $event->sheet->setCellValue('C8', 'NO BUKTI');
                $event->sheet->setCellValue('D8', 'URAIAN');
                $event->sheet->setCellValue('E8', 'KODE REKENING');
                $event->sheet->setCellValue('F8', 'PENERIMAAN');
                $event->sheet->setCellValue('G8', 'PENGELUARAN');
                $event->sheet->setCellValue('H8', 'SALDO');
                $event->sheet->setCellValue('A9', '1');
                $event->sheet->setCellValue('B9', '2');
                $event->sheet->setCellValue('C9', '3');
                $event->sheet->setCellValue('D9', '4');
                $event->sheet->setCellValue('E9', '5');
                $event->sheet->setCellValue('F9', '6');
                $event->sheet->setCellValue('G9', '7');
                $event->sheet->setCellValue('H9', '8');
                $event->sheet->setCellValue('A'.$row, $number+1);
                $event->sheet->setCellValue('B'.$row, $item->tanggal_belanja->format('d-m-Y'));
                $event->sheet->setCellValue('C'.$row, $item->nobukti);
                $event->sheet->setCellValue('D'.$row, $item->uraian);
                $event->sheet->setCellValue('E'.$row, $item->kodering->nama_kodering);
                $event->sheet->setCellValue('F'.$row, ($item->saldo ? $item->saldo->pelimpahan->jumlah_pengeluaran : 0));
                $event->sheet->setCellValue('G'.$row, $item->pengeluaran);
                $event->sheet->setCellValue('H'.$row, ($item->saldo ? $item->saldo->saldo : 0));
                
                $event->sheet->setCellValue('E'.($row + 1), "Jumlah");
                //Styling
                $event->sheet->getStyle('A' . $row.":H".$row)
                    ->getAlignment()
                    ->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER)
                    ->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
                $event->sheet->getStyle('A' . $row.":H".$row)
                    ->getBorders()
                    ->getAllBorders()
                    ->setBorderStyle(\PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN);
                $event->sheet->getStyle('A' . ($row+1).":H".($row+1))
                    ->getBorders()
                    ->getAllBorders()
                    ->setBorderStyle(\PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN);
                $event->sheet->getStyle('A' .($row+1).":H".($row+1))
                    ->getFont()
                    ->setBold(true);
                $number++;
                $row++;

                }
            $event->sheet->setCellValue('C'.($row + 6), "Disetujui Oleh,");
            $event->sheet->setCellValue('C'.($row + 7), "Kuasa Pengguna Anggaran");
            $event->sheet->mergeCells("F".($row + 5).":H".($row + 5));
            $event->sheet->setCellValue('F'.($row + 5), "Bandung, ");
            $event->sheet->mergeCells("F".($row + 6).":H".($row + 6));
            $event->sheet->setCellValue('F'.($row + 6), "Disiapkan Oleh,");
            $event->sheet->mergeCells("F".($row + 7).":H".($row + 7));
            $event->sheet->setCellValue('F'.($row + 7), "Bendahara Pengeluaran Pembantu,");
            $event->sheet->getStyle("A".($row + 5).":H".($row + 7))
            ->getAlignment()
            ->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER)
            ->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
            }];
    }

    public function styles(Worksheet $sheet)
    {
        $fontStyle = [
            'font' => [
                'name' => 'Arial',
                'size' => 13,
            ],
        ];
    
        $sheet->getStyle('A2:H4')->applyFromArray($fontStyle);
    
        // Set font, size, and horizontal alignment for a single row
        $sheet->getStyle('A5:H5')->applyFromArray([
            'font' => [
                'name' => 'Arial',
                'size' => 16,
            ],
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
            ],
        ]);
    
        // Set font, size, and horizontal alignment for another single row
        $sheet->getStyle('A6:H6')->applyFromArray([
            'font' => [
                'name' => 'Arial',
                'size' => 16,
            ],
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
            ],
        ]);
    
        // Set font, size, and horizontal alignment for another single row
        $sheet->getStyle('A7:H7')->applyFromArray([
            'font' => [
                'name' => 'Arial',
                'size' => 14,
            ],
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
            ],
        ]);
    
        // Set font, bold, size, and borders for a single row
        $sheet->getStyle('A8:H8')->applyFromArray([
            'font' => [
                'name' => 'Arial',
                'bold' => true,
            ],
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
            ],
            'borders' => [
                'allBorders' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                    'color' => ['hex' => '#000000'],
                ],
            ],
        ]);
    
        // Set font, bold, size, and borders for another single row
        $sheet->getStyle('A9:H9')->applyFromArray([
            'font' => [
                'name' => 'Arial',
                'bold' => true,
                'italic' => true,
                'size' => 8,
            ],
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
            ],
            'borders' => [
                'allBorders' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                    'color' => ['hex' => '#000000'],
                ],
            ],
        ]);
    
        // Set row height for specific rows
        $sheet->getRowDimension('8')->setRowHeight(40);
        $sheet->getRowDimension('9')->setRowHeight(9.5);
    
        // Set style for data rows
        $highestRow = $sheet->getHighestRow();
        // $dataStyle = [
        //     'alignment' => [
        //         'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_TOP,
        //         'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,
        //     ],
        //     'borders' => [
        //         'allBorders' => [
        //             'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
        //             'color' => ['hex' => '#000000'],
        //         ],
        //     ],
        // ];
        
    
        for ($i = 17; $i <= $highestRow; $i++) {
            $sheet->getStyle("A".$i.":H".$i)->applyFromArray([
            'alignment' => [
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_TOP,
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,
            ],
            'borders' => [
                'allBorders' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                    'color' => ['hex' => '#000000'],
                ],
            ],
        ]);
        }
    //     $sheet->getStyle('A1:H1')->getFont()->setBold(true);
        
    //     $sheet->getStyle('A2:H2')->getFont()->setName('Arial');
    //     $sheet->getStyle('A2:H2')->getFont()->setSize('13');
        
    //     $sheet->getStyle('A3:H3')->getFont()->setName('Arial');
    //     $sheet->getStyle('A3:H3')->getFont()->setSize('13');
        
    //     $sheet->getStyle('A4:H4')->getFont()->setName('Arial');
    //     $sheet->getStyle('A4:H4')->getFont()->setSize('13');

    //     $sheet->getStyle('A5:H5')->getFont()->setName('Arial');
    //     $sheet->getStyle('A5:H5')->getFont()->setSize('16');
    //     $sheet->getStyle('A5:H5')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);

    //     $sheet->getStyle('A6:H6')->getFont()->setName('Arial');
    //     $sheet->getStyle('A6:H6')->getFont()->setSize('16');
    //     $sheet->getStyle('A6:H6')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
     
    //     $sheet->getStyle('A7:H7') ->getFont()->setName('Arial');
    //     $sheet->getStyle('A7:H7') ->getFont()->setSize('14');
    //     $sheet->getStyle('A7:H7')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);

    //     $borders = [
    //         'borders' => [
    //             'allBorders' => [
    //                 'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
    //                 'color' => ['hex' => '#000000'],
    //             ]
    //         ]
    //     ];
     

    //     $sheet->getStyle('A8:H8')->getFont()->setName('Arial');
    //     $sheet->getStyle('A8:H8')->getFont()->setBold(true);
    //     $sheet->getStyle('A8:H8')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    //     $sheet->getStyle('A8:H8')->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
    //     $sheet->getStyle('A8:H8')->applyFromArray($borders);

    //     $sheet->getStyle('A9:H9')->getFont()->setName('Arial');
    //     $sheet->getStyle('A9:H9')->getFont()->setBold(true);
    //     $sheet->getStyle('A9:H9')->getFont()->setSize(8);
    //     $sheet->getStyle('A9:H9')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
    //     $sheet->getStyle('A9:H9')->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
    //     $sheet->getStyle('A9:H9')->applyFromArray($borders);
        
    //     $sheet->getRowDimension('8')->setRowHeight(18);
    //     $sheet->getRowDimension('9')->setRowHeight(10.5);

    //     $highestRow = $sheet->getHighestRow();

    //     $dataStyle = [
    //         'alignment' => [
    //             'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_TOP,
    //             'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,
    //         ],
    //         'borders' => [
    //             'allBorders' => [
    //                 'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
    //                 'color' => ['hex' => '#000000'],
    //             ],
    //         ],
    //     ];

    //     $sheet->getStyle("A10:H{$highestRow}")->applyFromArray($dataStyle);

        // $sheet->getStyle('A10:H10')->getFont()->setName('Arial');
        // $sheet->getStyle('A10:H10')->getFont()->setSize(8);
        // $sheet->getStyle('A10:H10')->getFont()->setBold(true);
        // $sheet->getStyle('A10:H10')->getFont()->setItalic(true);
        // $sheet->getStyle('A10:H10')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        // $sheet->getStyle('A10:H10')->applyFromArray($borders);

        // $highestRow = $sheet->getHighestRow();

        // $sheet->getStyle('C'.($highestRow - 3).':G'.($highestRow))->getFont()->setName('Arial');
        // $sheet->getStyle('C'.($highestRow - 3).':G'.($highestRow))->getFont()->setSize(12);
        // $sheet->getStyle('C'.($highestRow - 3).':G'.($highestRow))->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);

        // $sheet->getStyle('D'.($highestRow - 5).':H'.($highestRow - 5))->getFont()->setBold(true);
        // $sheet->getStyle('D'.($highestRow - 5).':G'.($highestRow - 5))->getFont()->setName('Arial');
        // $sheet->getStyle('D'.($highestRow - 5).':G'.($highestRow - 5))->getFont()->setSize(12);
        // $sheet->getStyle('D'.($highestRow - 5))->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT);
        // $sheet->getStyle('E'.($highestRow - 5).':H'.($highestRow - 5))->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
        // $sheet->getStyle('A'.($highestRow - 5).':H'.($highestRow - 5))->applyFromArray($borders);
        // $sheet->getStyle('A'.($highestRow - 5).':H'.($highestRow - 5))->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
        // $sheet->getRowDimension($highestRow - 5)->setRowHeight(48);


        // for ($i=11; $i < $highestRow - 5; $i++) { 
        //     $sheet->getRowDimension($i + 1)->setRowHeight(48);
        //     $sheet->getStyle("A{$i}:H{$i}")->applyFromArray($borders);
        //     $sheet->getStyle("A{$i}:H{$i}")->getFont()->setName('Arial');
        //     $sheet->getStyle("A{$i}:H{$i}")->getFont()->setSize(12);
        //     $sheet->getStyle("A{$i}:H{$i}")->getAlignment()->setWrapText(true);
        //     $sheet->getStyle("A{$i}:H{$i}")->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
        //     $sheet->getStyle("A{$i}:H{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);

        //     $sheet->getStyle("A{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        //     $sheet->getStyle("B{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);        
        //     $sheet->getStyle("C{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        //     $sheet->getStyle("D{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT);
        //     $sheet->getStyle("E{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
        //     $sheet->getStyle("F{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
        //     $sheet->getStyle("G{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
        //     $sheet->getStyle("H{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
        // }

        // $sheet->getStyle("A12:H12")->getAlignment()->setWrapText(true);
        // $sheet->getStyle("A12:H12")->getFont()->setName('Arial');
        // $sheet->getStyle("A12:H12")->getFont()->setSize(12);
        // $sheet->getStyle('A12:H12')->getFont()->setBold(true);
        // $sheet->getStyle('A12:H12')->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
        // $sheet->getStyle('A12:H12')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        // $sheet->getStyle('A12:H12')->applyFromArray($borders);
        // $sheet->getStyle('A15:H15')->applyFromArray($borders);
     
    }

    public function columnWidths(): array
    {
        // Sesuaikan lebar kolom sesuai kebutuhan
        return [
            'A' => 5,
            'B' => 18,
            'C' => 26,
            'D' => 55,
            'E' => 25,
            'F' => 25,
            'G' => 25,
            'H' => 25,
            // ... sesuaikan dengan kolom-kolom lain
        ];
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
