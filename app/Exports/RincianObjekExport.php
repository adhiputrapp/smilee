<?php

namespace App\Exports;

use Illuminate\View\View;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithDrawings;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class RincianObjekExport implements FromCollection, WithDrawings, WithStyles, WithColumnWidths, WithEvents//, WithColumnFormatting
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

    public function collection()
    {
        return collect($this->data)->map(function ($item, $index)
        {
            return[
                'NObukti' => $item->nobukti,
                'Uraian' => $item->uraian,
                'Nama Kodering' => $item->tanggal_belanja,
                'Nama SubKegiatan' => $item->subkegiatan->nama_sub_kegiatan,
                // 'D' => $item->saldo->pelimpahan->jumlah_pengeluaran,
                'Pengeluaran' => $item->pengeluaran,
                'Nobukti' => $item->nobukti,
            ];
        });
    }    

    public function registerEvents(): array
    {
        return [ 
            AfterSheet::class => function (AfterSheet $event) {
                $event->sheet->mergeCells('A1:B5');
                $event->sheet->setCellValue('A1', " ");
                $event->sheet->mergeCells('C1:H1');
                $event->sheet->setCellValue('C1', 'PEMERINTAH PROVINSI JAWA BARAT');
                $event->sheet->mergeCells('C2:H2');
                $event->sheet->setCellValue('C2', 'BIRO UMUM SETDA PROVINSI JAWA BARAT');
                $event->sheet->mergeCells('C3:H3');
                $event->sheet->setCellValue('C3', 'TAHUN ANGGARAN '. $this->tahun);
                $event->sheet->mergeCells('C4:H4');
                $event->sheet->setCellValue('C4', " ");
                $event->sheet->mergeCells('C5:H5');
                $event->sheet->setCellValue('C5', " ");
                $event->sheet->mergeCells('A7:B7');
                $event->sheet->setCellValue('A7', 'Kode Rekening');
                $event->sheet->setCellValue('D7', ': '. $this->kodering->kode_kodering);
                $event->sheet->mergeCells('A8:B8');
                $event->sheet->setCellValue('A8', 'Nama Rekening');
                $event->sheet->setCellValue('D8', ': '. $this->kodering->nama_kodering);
                $event->sheet->mergeCells('A9:C9');
                $event->sheet->setCellValue('A9', 'Jumlah Anggaran (DPA)');
                $event->sheet->setCellValue('D9', ': '. $this->anggaran->jumlah_anggaran);
                $event->sheet->mergeCells('A10:C10');
                $event->sheet->setCellValue('A10', 'Jumlah Anggaran (DPPA)');
                $event->sheet->setCellValue('D10', ': ');
                $event->sheet->mergeCells('A11:H11');
                $event->sheet->setCellValue('A11', 'BUKU PEMBANTU SUB RINCIAN OBJEK BELANJA');
                $event->sheet->mergeCells('A12:H12');
                $event->sheet->setCellValue('A12', 'Periode : 1 sd. '. $this->eom->endOfMonth()->format('d')." ".$this->eom->locale('id')->monthName. " ". $this->tahun);
                $event->sheet->mergeCells('A14:A15');
                $event->sheet->setCellValue('A14', 'No');
                $event->sheet->setCellValue('A16', '1');
                $event->sheet->mergeCells('B14:B15');
                $event->sheet->setCellValue('B14', 'Tanggal');
                $event->sheet->setCellValue('B16', '2');
                $event->sheet->mergeCells('C14:C15');
                $event->sheet->setCellValue('C14', 'No. BKU');
                $event->sheet->setCellValue('C16', '3');
                $event->sheet->mergeCells('D14:D15');
                $event->sheet->setCellValue('D14', 'Uraian');
                $event->sheet->setCellValue('D16', '4');
                $event->sheet->mergeCells('E14:E15');
                $event->sheet->setCellValue('E14', 'Belanja LS');
                $event->sheet->setCellValue('E16', '5');
                $event->sheet->mergeCells('F14:F15');
                $event->sheet->setCellValue('F14', 'Belanja TU');
                $event->sheet->setCellValue('F16', '6');
                $event->sheet->mergeCells('G14:G15');
                $event->sheet->setCellValue('G14', 'Belanja UP/GU');
                $event->sheet->setCellValue('G16', '7');
                $event->sheet->mergeCells('H14:H15');
                $event->sheet->setCellValue('H14', 'Saldo');
                $event->sheet->setCellValue('H16', '8');
                
                $number = 0;
                $row = 17;

                foreach ($this->data as $item) {
                    $event->sheet->setCellValue("A".$row, $number+1);
                    $event->sheet->setCellValue("B".$row, $item->tanggal_belanja->format('j F Y'));
                    $event->sheet->setCellValue("C".$row, $item->nobukti);
                    $event->sheet->setCellValue("D".$row, $item->uraian);
                    if ($item->jenis_belanja == 'LS') {
                        $event->sheet->setCellValue("E".$row, $item->pengeluaran);
                    }
                    if ($item->jenis_belanja == 'TU') {
                        $event->sheet->setCellValue("F".$row, $item->pengeluaran);
                    }
                    if ($item->jenis_belanja == 'UP/GU') {
                        $event->sheet->setCellValue("G".$row, $item->pengeluaran);
                    }
                    $event->sheet->setCellValue("H".$row, ($this->anggaran->saldoanggaran ? $this->anggaran->saldoanggaran->nominal : 0));
                    //Styling
                    $event->sheet->getStyle('A' . $row.":H".$row)
                        ->getAlignment()
                        ->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER)
                        ->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
                    $event->sheet->getStyle('A' . $row.":H".$row)
                        ->getBorders()
                        ->getAllBorders()
                        ->setBorderStyle(\PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN);
                    $event->sheet->getStyle('A' . ($row + 1) . ":H" . ($row + 1))
                        ->getAlignment()
                        ->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT)
                        ->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
                    $event->sheet->getStyle('A' . ($row+1).":H".($row+1))
                        ->getBorders()
                        ->getAllBorders()
                        ->setBorderStyle(\PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN);
                    
                    $number++;
                    $row++;
                }
                $event->sheet->getStyle('D' . $row)->getFont()->setBold(true);
                $event->sheet->setCellValue("D".($row ), "Jumlah");

                $event->sheet->setCellValue("C".($row + 5), "Disetujui Oleh,");
                $event->sheet->setCellValue("C".($row + 6), "Kuasa Pengguna Anggaran");
            
                $event->sheet->mergeCells('F'.($row + 4).':H'.($row + 4));
                $event->sheet->setCellValue("F".($row + 4), "Bandung");
                $event->sheet->mergeCells('F'.($row + 5).':H'.($row + 5));
                $event->sheet->setCellValue("F".($row + 5), "Disiapkan Oleh");
                $event->sheet->mergeCells('F'.($row + 6).':H'.($row + 6));
                $event->sheet->setCellValue("F".($row + 6), "Bendahara Pengeluaran Pembantu");
            }];
    }


    // public function view() : View
    // {
    //     return view('laporan.rincian-objek.export', [
    //         'data' => $this->data,
    //         'tahun' => $this->tahun,
    //         'sumLS' => $this->sumLS,
    //         'sumTU' => $this->sumTU,
    //         'sumUPGU' => $this->sumUPGU,
    //         'kodering' => $this->kodering,
    //         'anggaran' => $this->anggaran,
    //         'pelimpahan' => $this->pelimpahan,
    //         'eom' => $this->eom,
    //     ]);
    // }
        
    public function styles(Worksheet $sheet) {
        // for ($i=1; $i < 4; $i++) { 
        //     $sheet->getStyle("C{$i}")->getFont()->setName('Arial');
        //     $sheet->getStyle("C{$i}")->getFont()->setSize(13);
        // }

        // for ($i=7; $i < 11; $i++) { 
        //     $sheet->getStyle("A{$i}:D{$i}")->getFont()->setName('Arial');
        //     $sheet->getStyle("A{$i}:D{$i}")->getFont()->setSize(12);
        // }

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
        $sheet->getRowDimension('16')->setRowHeight(10.5);

        $sheet->getStyle("A14:H14")->getAlignment()->setWrapText(true);
        $sheet->getStyle("A14:H14")->getFont()->setName('Arial');
        $sheet->getStyle("A14:H14")->getFont()->setSize(12);
        $sheet->getStyle('A14:H14')->getFont()->setBold(true);
        $sheet->getStyle('A14:H14')->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
        $sheet->getStyle('A14:H14')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        $sheet->getStyle('A14:H14')->applyFromArray($borders);
        $sheet->getStyle('A15:H15')->applyFromArray($borders);
        
        $sheet->getStyle('A16:H16')->getAlignment()->setWrapText(true);
        $sheet->getStyle('A16:H16')->getFont()->setName('Arial');
        $sheet->getStyle('A16:H16')->getFont()->setSize(6);
        $sheet->getStyle('A16:H16')->getFont()->setBold(true);
        $sheet->getStyle('A16:H16')->getFont()->setItalic(true);
        $sheet->getStyle('A16:H16')->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
        $sheet->getStyle('A16:H16')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        $sheet->getStyle('A16:H16')->applyFromArray($borders);

        $highestRow = $sheet->getHighestRow();

        $sheet->getStyle('A'.$highestRow.':H'.$highestRow)->applyFromArray($borders);
        // $sheet->getStyle("F21:H21")->getFont()->setName('Arial');
        // $sheet->getStyle("F21:H21")->getFont()->setSize(12);
        // $sheet->getStyle('F21:H21')->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        
        
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

        // $sheet->getRowDimension(17)->setRowHeight(31.5);

        // for ($i=17; $i < $highestRow - 5; $i++) { 
        //     $sheet->getRowDimension($i + 1)->setRowHeight(48);
        //     $sheet->getStyle("A{$i}:H{$i}")->applyFromArray($borders);
        //     $sheet->getStyle("A{$i}:H{$i}")->getFont()->setName('Arial');
        //     $sheet->getStyle("A{$i}:H{$i}")->getFont()->setSize(12);
        //     $sheet->getStyle("A{$i}:H{$i}")->getAlignment()->setWrapText(true);
        //     $sheet->getStyle("A{$i}:H{$i}")->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);

        //     $sheet->getStyle("A{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        //     $sheet->getStyle("B{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);        
        //     $sheet->getStyle("C{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        //     $sheet->getStyle("D{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT);
        //     $sheet->getStyle("E{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
        //     $sheet->getStyle("F{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
        //     $sheet->getStyle("G{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
        //     $sheet->getStyle("H{$i}")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
        // }

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

    // public function columnFormats(): array {
    //     return [
    //         'E' => NumberFormat::FORMAT_ACCOUNTING_ID,
    //         'F' => NumberFormat::FORMAT_ACCOUNTING_ID,
    //         'G' => NumberFormat::FORMAT_ACCOUNTING_ID,
    //         'H' => NumberFormat::FORMAT_ACCOUNTING_ID,
    //     ];
    // }
}
