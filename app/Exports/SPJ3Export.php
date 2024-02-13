<?php

namespace App\Exports;

use Illuminate\View\View;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithDrawings;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Events\AfterSheet;

class SPJ3Export implements FromCollection, WithDrawings, WithColumnWidths, WithStyles, WithEvents
{
    public $spj;
    public $eom;
    public $total;
    public $saldoBulanLalu;
    // public $subKegiatan;
    // public $kegiatan;
    // public $program;

    public function __construct($spj, $eom, $total, $saldoBulanLalu) 
    {
        $this->spj = $spj;
        $this->eom = $eom;
        $this->total = $total;
        $this->saldoBulanLalu = $saldoBulanLalu;
        // $this->tahun = $tahun;
        // $this->subKegiatan = $subKegiatan;
        // $this->kegiatan = $kegiatan;
        // $this->program = $program;
    }

    public function collection() 
    {
        return collect($this->spj)->map(function($item, $index)
        {
            $eom = $this->eom;
            return [
                'spj' => $item->pengeluaran,
                'eom' => $eom,
                'nama sub kegiatan' => $item->subkegiatan->nama_sub_kegiatan,
                'kode sub kegiatan' => $item->subkegiatan->kode_sub_kegiatan,
            ];
        });
    }

    public function registerEvents(): array{
        return
        [
            AfterSheet::class => function (AfterSheet $event) {
                //START HEADER
                $event->sheet->mergeCells('A1:A5');
                $event->sheet->setCellValue('A1', "");
                $event->sheet->mergeCells('B1:D1');
                $event->sheet->setCellValue('B1', "PEMERINTAH PPROVINSI JAWA BARAT");
                $event->sheet->mergeCells('B2:D2');
                $event->sheet->setCellValue('B2', "BIRO UMUM SETDA PROVINSI JAWA BARAT");
                $event->sheet->mergeCells('B3:D3');
                $event->sheet->setCellValue('B3', "TAHUN ANGGARAN ". $this->eom->year);
                $event->sheet->mergeCells('B5:P5');
                $event->sheet->setCellValue('A6', "LAPORAN PERTANGGUNGJAWABAN BENDAHARA PENGELUARAN PEMBANTU");
                $event->sheet->mergeCells('A6:P6');
                $event->sheet->mergeCells('A7:P7');
                $event->sheet->setCellValue('A7', "Bulan : ". $this->eom->monthName. " ". $this->eom->year);
                //END HEADER
                //START RINCIAN 
                $event->sheet->mergeCells('A8:B8');
                $event->sheet->setCellValue('A8', "Kuasa Pengguna Anggaran ");
                $event->sheet->setCellValue('C8', ": ");
                $event->sheet->mergeCells('A9:B9');
                $event->sheet->setCellValue('A9', "Bendahara Pengeluaran Pembantu ");
                $event->sheet->setCellValue('C9', ": ");
                $event->sheet->mergeCells('A10:B10');
                foreach ($this->spj as $item){
                $event->sheet->setCellValue('A10', "Program ");
                $event->sheet->setCellValue('C10', ": ". $item->program->kode_program. " ". $item->program->nama_program);
                $event->sheet->mergeCells('A11:B11');
                $event->sheet->setCellValue('A11', "Kegiatan ");
                $event->sheet->setCellValue('C11', ": ". $item->kegiatan->kode_kegiatan. " ". $item->kegiatan->nama_kegiatan);
                $event->sheet->mergeCells('A12:B12');
                $event->sheet->setCellValue('A12', "Sub Kegiatan ");
                $event->sheet->setCellValue('C12', ": ". $item->subkegiatan->kode_sub_kegiatan. " ". $item->subkegiatan->nama_sub_kegiatan);
                $event->sheet->mergeCells('A13:B13');
                $event->sheet->setCellValue('A13', "Tahun Anggaran ");
                $event->sheet->setCellValue('C13', ": ". $this->eom->year);
                //END RINCIAN
                //START TABLE
                //START TABLE HEADER
                $event->sheet->mergeCells('A15:A17');
                $event->sheet->setCellValue('A15', "KODE REKENING");
                $event->sheet->setCellValue('A18', "1");
                $event->sheet->mergeCells('B15:C17');
                $event->sheet->setCellValue('B15', "URAIAN");
                $event->sheet->mergeCells('B18:C18');
                $event->sheet->setCellValue('B18', "2");
                $event->sheet->mergeCells('D15:D17');
                $event->sheet->setCellValue('D15', "JUMLAH ANGGARAN");
                $event->sheet->setCellValue('D18', "3");
                //ROW SPJ LS GAJI
                $event->sheet->mergeCells('E15:G15');
                $event->sheet->setCellValue('E15', "SPJ - LS GAJI");
                $event->sheet->setCellValue('E16', "S.d BULAN");
                $event->sheet->setCellValue('E17', "LALU");
                $event->sheet->setCellValue('E18', "4");
                $event->sheet->mergeCells('F16:F17');
                $event->sheet->setCellValue('F16', "BULAN INI");
                $event->sheet->setCellValue('F18', "5");
                $event->sheet->setCellValue('G16', "S.d BULAN");
                $event->sheet->setCellValue('G17', "INI");
                $event->sheet->setCellValue('G18', "6");
                //END ROW SPJ LS GAJI
                //ROW SPJ BARANG JASA
                $event->sheet->mergeCells('H15:J15');
                $event->sheet->setCellValue('H15', "SPJ - LS BARANG & JASA");
                $event->sheet->setCellValue('H16', "S.d BULAN");
                $event->sheet->setCellValue('H17', "LALU");
                $event->sheet->setCellValue('H18', "7");
                $event->sheet->mergeCells('I16:I17');
                $event->sheet->setCellValue('I16', "BULAN INI");
                $event->sheet->setCellValue('I18', "8");
                $event->sheet->setCellValue('J16', "S.d BULAN");
                $event->sheet->setCellValue('J17', "INI");
                $event->sheet->setCellValue('J18', "9");
                //END ROW SPJ BARANG JASA
                //ROW SPJ UP/GU/TU
                $event->sheet->mergeCells('K15:N15');
                $event->sheet->setCellValue('K15', "SPJ - UP/GU/TU");
                $event->sheet->setCellValue('K16', "S.d BULAN");
                $event->sheet->setCellValue('K17', "LALU");
                $event->sheet->setCellValue('K18', "10");
                $event->sheet->mergeCells('L16:M17');
                $event->sheet->setCellValue('L16', "BULAN INI");
                $event->sheet->mergeCells('L18:M18');
                $event->sheet->setCellValue('L18', "11");
                $event->sheet->setCellValue('N16', "S.d BULAN");
                $event->sheet->setCellValue('N17', "INI");
                $event->sheet->setCellValue('N18', "12");
                //END ROW SPJ UP/GU/TU
                $event->sheet->setCellValue('O15', "JUMLAH SPJ");
                $event->sheet->setCellValue('O16', "(LS+UP+GU+TU)");
                $event->sheet->setCellValue('O17', "S.d BULAN INI");
                $event->sheet->setCellValue('O18', "13");
                $event->sheet->mergeCells('P15:P17');
                $event->sheet->setCellValue('P15', "SISA PAGU ANGGARAN");
                $event->sheet->setCellValue('P18', "14");
                //END TABLE HEADER
                //START DATA
                $row = 19;
                    $event->sheet->setCellValue('A'.$row, $item->kodering->kode_kodering);
                    $event->sheet->mergeCells('B'.$row.':C'.$row);
                    $event->sheet->setCellValue('B'.$row, $item->kodering->nama_kodering);
                    $event->sheet->setCellValue('D'.$row, $item->saldo->pelimpahan->jumlah_pelimpahan ?? 0);
                    // $event->sheet->setCellValue('D'.$row, $item->saldo->pelimpahan->jumlah_pelimpahan);
                    foreach ($this->total as $total){
                        if ($item->jenis_belanja == "LS") {
                            $event->sheet->setCellValue('E'.$row, $this->saldoBulanLalu);
                            $event->sheet->setCellValue('F'.$row, $total);
                            $nilaiE = $event->sheet->getCell('E'.$row)->getValue();
                            $nilaiF = $event->sheet->getCell('F'.$row)->getValue();
                            $hasilTambah = $nilaiE + $nilaiF;
                            $event->sheet->setCellValue('G'.$row, $hasilTambah);
                        }
                        if ($item->jenis_belanja == "TU") {
                            $event->sheet->setCellValue('H'.$row, $this->saldoBulanLalu);
                            $event->sheet->setCellValue('I'.$row, $total);
                            $nilaiH = $event->sheet->getCell('H'.$row)->getValue();
                            $nilaiI = $event->sheet->getCell('I'.$row)->getValue();
                            $hasilTambah = $nilaiH + $nilaiI;
                            $event->sheet->setCellValue('J'.$row, $hasilTambah);
                        }
                        if ($item->jenis_belanja == "UP/GU") {
                            $event->sheet->setCellValue('K'.$row, $this->saldoBulanLalu);
                            $event->sheet->setCellValue('L'.$row, $total);
                            $event->sheet->mergeCells('L'.$row.':M'.$row);
                            $nilaiK = $event->sheet->getCell('K'.$row)->getValue();
                            $nilaiL = $event->sheet->getCell('L'.$row)->getValue();
                            $hasilTambah = $nilaiK + $nilaiL;
                            $event->sheet->setCellValue('N'.$row, $hasilTambah);
                        }
                        $jumlahspj1 = $event->sheet->getCell('G'.$row)->getValue();
                        $jumlahspj2 = $event->sheet->getCell('J'.$row)->getValue();
                        $jumlahspj3 = $event->sheet->getCell('N'.$row)->getValue();
                        $totalspj = $jumlahspj1 + $jumlahspj2 + $jumlahspj3;
                        $event->sheet->setCellValue('O'.$row, $totalspj);
                        $jumlahspj4 = $event->sheet->getCell('D'.$row)->getValue();
                        $jumlahspj5 = $event->sheet->getCell('O'.$row)->getValue();
                        $totalspj1 = $jumlahspj4 - $jumlahspj5;
                        $event->sheet->setCellValue('P'.$row, $totalspj1);

                    }
                //END DATA
                //FOOTER
                    $event->sheet->setCellValue('A'.($row+1), "JUMLAH");
                    $event->sheet->mergeCells('L'.($row+1).':M'.($row+ 1));
                    // $event->sheet->setCellValue('A'.($row+2), "SP2D");
                    // $event->sheet->mergeCells('L'.($row+2).':M'.($row+ 2));
                    // $event->sheet->setCellValue('A'.($row+3), "SP2D UP");
                    // $event->sheet->mergeCells('L'.($row+3).':M'.($row+ 3));
                    // $event->sheet->setCellValue('A'.($row+4), "SP2D GU");
                    // $event->sheet->mergeCells('L'.($row+4).':M'.($row+ 4));
                    // $event->sheet->setCellValue('A'.($row+5), "SP2D TU");
                    // $event->sheet->mergeCells('L'.($row+5).':M'.($row+ 5));
                    // $event->sheet->setCellValue('A'.($row+6), "SP2D LS");
                    // $event->sheet->mergeCells('L'.($row+6).':M'.($row+ 6));
                    // $event->sheet->setCellValue('A'.($row+7), "POTONGAN PAJAK");
                    // $event->sheet->mergeCells('L'.($row+7).':M'.($row+ 7));
                    // $event->sheet->setCellValue('A'.($row+8), "a. PPN");
                    // $event->sheet->mergeCells('L'.($row+8).':M'.($row+ 8));
                    // $event->sheet->setCellValue('A'.($row+9), "b. PPh-21");
                    // $event->sheet->mergeCells('L'.($row+9).':M'.($row+ 9));
                    // $event->sheet->setCellValue('A'.($row+10), "c. PPh-22");
                    // $event->sheet->mergeCells('L'.($row+10).':M'.($row+ 10));
                    // $event->sheet->setCellValue('A'.($row+11), "d. PPh-23");
                    // $event->sheet->mergeCells('L'.($row+11).':M'.($row+ 11));
                    // $event->sheet->setCellValue('A'.($row+12), "e. Lain-lain");
                    // $event->sheet->mergeCells('L'.($row+12).':M'.($row+ 12));
                    // $event->sheet->setCellValue('A'.($row+13), "JUMLAH PENERIMAAN");
                    // $event->sheet->mergeCells('L'.($row+13).':M'.($row+ 13));
                    // $event->sheet->setCellValue('A'.($row+14), "SPJ UP/GU/TU/LS");
                    // $event->sheet->mergeCells('L'.($row+14).':M'.($row+ 14));
                    // $event->sheet->setCellValue('A'.($row+15), "SPJ UP/GU");
                    // $event->sheet->mergeCells('L'.($row+15).':M'.($row+ 15));
                    // $event->sheet->setCellValue('A'.($row+16), "SPJ TU");
                    // $event->sheet->mergeCells('L'.($row+16).':M'.($row+ 16));
                    // $event->sheet->setCellValue('A'.($row+17), "SPJ LS");
                    // $event->sheet->mergeCells('L'.($row+17).':M'.($row+ 17));
                    // $event->sheet->setCellValue('A'.($row+18), "PENYETORAN PAJAK");
                    // $event->sheet->mergeCells('L'.($row+18).':M'.($row+ 18));
                    // $event->sheet->setCellValue('A'.($row+19), "a. PPN");
                    // $event->sheet->mergeCells('L'.($row+19).':M'.($row+ 19));
                    // $event->sheet->setCellValue('A'.($row+20), "b. PPh-21");
                    // $event->sheet->mergeCells('L'.($row+20).':M'.($row+ 20));
                    // $event->sheet->setCellValue('A'.($row+21), "c. PPh-22");
                    // $event->sheet->mergeCells('L'.($row+21).':M'.($row+ 21));
                    // $event->sheet->setCellValue('A'.($row+22), "d. PPh-23");
                    // $event->sheet->mergeCells('L'.($row+22).':M'.($row+ 22));
                    // $event->sheet->setCellValue('A'.($row+23), "e. Lain-lain");
                    // $event->sheet->mergeCells('L'.($row+23).':M'.($row+ 23));
                    // $event->sheet->setCellValue('A'.($row+24), "- Panjar");
                    // $event->sheet->mergeCells('L'.($row+24).':M'.($row+ 24));
                    // $event->sheet->setCellValue('A'.($row+25), "- Pengembalian Pelimpahan");
                    // $event->sheet->mergeCells('L'.($row+25).':M'.($row+ 25));
                    // $event->sheet->setCellValue('A'.($row+26), "- STS Pengembalian");
                    // $event->sheet->mergeCells('L'.($row+26).':M'.($row+ 26));
                    $event->sheet->setCellValue('A'.($row+27), "JUMLAH PENGELUARAN");
                    $event->sheet->mergeCells('L'.($row+27).':M'.($row+ 27));
                    $event->sheet->setCellValue('A'.($row+28), "SALDO KAS");
                    $event->sheet->mergeCells('L'.($row+28).':M'.($row+ 28));
                //END FOOTER
                //TTD
                    $event->sheet->setCellValue('B'.($row+31), "Disetujui oleh,");
                    $event->sheet->setCellValue('B'.($row+32), "Kuasa Pengguna Anggaran");
                    $event->sheet->setCellValue('O'.($row+30), "Bandung, ");
                    $event->sheet->setCellValue('O'.($row+31), "Disiapkan oleh,");
                    $event->sheet->setCellValue('O'.($row+32), "Bendahara Pengeluaran Pembantu");
                //END TTD
                //Styling
                    //Border & Alligment Data array
                    $event->sheet->getStyle('A' . $row.":P".$row)
                    ->getAlignment()
                    ->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER)
                    ->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
                    $event->sheet->getStyle('A' . $row.":P".$row)
                    ->getBorders()
                    ->getAllBorders()
                    ->setBorderStyle(\PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN);
                    //Border Footer
                    $event->sheet->getStyle('A' .($row+1).":P".($row+28))
                    ->getBorders()
                    ->getAllBorders()
                    ->setBorderStyle(\PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN);
                    //Font & Background jumlah sp2d
                    $event->sheet->getStyle('A' .($row+1).":P".($row+1))
                    ->getFont()
                    ->setSize(14)
                    ->setBold(true);
                    $event->sheet->getStyle('A' .($row+1).":P".($row+1))
                    ->getFill()
                    ->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
                    ->getStartColor()->setARGB('FFFF00');
                    //Font Potongan Pajak
                    $event->sheet->getStyle('A' .($row+7).":P".($row+7))
                    ->getFont()
                    ->setSize(14)
                    ->setBold(true);
                    //Font bold Jumlah Penerimaan
                    $event->sheet->getStyle('A' .($row+13).":P".($row+13))
                    ->getFont()
                    ->setSize(14)
                    ->setBold(true);
                    $event->sheet->getStyle('A' .($row+14).":P".($row+14))
                    ->getFont()
                    ->setSize(14)
                    ->setBold(true);
                    // Font Bold Penyetoran Pajak
                    $event->sheet->getStyle('A' .($row+18).":P".($row+18))
                    ->getFont()
                    ->setSize(14)
                    ->setBold(true);
                    //Font Bold Jumlah Pengeluaran
                    $event->sheet->getStyle('A' .($row+27).":P".($row+27))
                    ->getFont()
                    ->setSize(14)
                    ->setBold(true);
                    //Font Bold Saldo Kaas
                    $event->sheet->getStyle('A' .($row+28).":P".($row+28))
                    ->getFont()
                    ->setSize(14)
                    ->setBold(true);
                    //Alligment Form TTD
                    $event->sheet->getStyle('B' .( $row+31).":P".( $row+31))
                    ->getAlignment()
                    ->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER)
                    ->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
                    $event->sheet->getStyle('B' .( $row+32).":P".( $row+32))
                    ->getAlignment()
                    ->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER)
                    ->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
                //END STYLING    
                    $row++;
                }
        }];
    }

    // public function view() : View {
    //     return view('laporan.spj3.export', [
    //         'tahun' => $this->tahun,
    //         'subKegiatan' => $this->subKegiatan,
    //         'kegiatan' => $this->kegiatan,
    //         'program' => $this->program
    //     ]);
    // }

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

        $sheet->getStyle("A8:P8")->getFont()->setName('Arial');
        $sheet->getStyle("A8:P8")->getFont()->setSize(12);

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

        $sheet->getStyle("A15:P17")->getFont()->setName('Arial');
        $sheet->getStyle("A15:P17")->getFont()->setSize(12);
        $sheet->getStyle("A15:P17")->getFont()->setBold(true);
        $sheet->getStyle("A15:P17")->getAlignment()->setWrapText(true);
        $sheet->getStyle("A15:P17")->getAlignment()->setVertical(Alignment::VERTICAL_CENTER);
        $sheet->getStyle("A15:P17")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
        $sheet->getStyle("A15:P17")->applyFromArray($borders);

        $sheet->getStyle("A18:P18")->getFont()->setName('Arial');
        $sheet->getStyle("A18:P18")->getFont()->setSize(8);
        $sheet->getStyle("A18:P18")->getFont()->setBold(true);
        $sheet->getStyle("A18:P18")->getFont()->setItalic(true);
        $sheet->getStyle("A18:P18")->getAlignment()->setVertical(Alignment::VERTICAL_CENTER);
        $sheet->getStyle("A18:P18")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
        $sheet->getStyle("A18:P18")->applyFromArray($borders);

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
