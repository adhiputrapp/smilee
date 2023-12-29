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
    public $tahun;
    // public $tahun;
    // public $subKegiatan;
    // public $kegiatan;
    // public $program;

    public function __construct($spj, $tahun) 
    {
        $this->spj = $spj;
        $this->tahun = $tahun;
        // $this->tahun = $tahun;
        // $this->subKegiatan = $subKegiatan;
        // $this->kegiatan = $kegiatan;
        // $this->program = $program;
    }

    public function collection() 
    {
        return collect($this->spj)->map(function($item, $index)
        {
            $tahun = $this->tahun;
            return [
                'spj' => $item->pengeluaran,
                'tahun' => $tahun,
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
                $event->sheet->mergeCells('A1:A4');
                $event->sheet->setCellValue('A1', "");
                $event->sheet->mergeCells('B1:C1');
                $event->sheet->setCellValue('B1', "PEMERINTAH PPROVINSI JAWA BARAT");
                $event->sheet->mergeCells('B2:C2');
                $event->sheet->setCellValue('B2', "BIRO UMUM SETDA PROVINSI JAWA BARAT");
                $event->sheet->mergeCells('B3:C3');
                $event->sheet->setCellValue('B3', "TAHUN ANGGARAN ". $this->tahun);
                $event->sheet->mergeCells('A5:P5');
                $event->sheet->setCellValue('A5', "LAPORAN PERTANGGUNGJAWABAN BENDAHARA PENGELUARAN PEMBANTU");
                $event->sheet->mergeCells('A6:P6');
                $event->sheet->mergeCells('A7:P7');
                $event->sheet->setCellValue('A7', "Bulan : ". $this->tahun->locale('id')->monthName. " ". $this->tahun->locale("id")->year);
                //END HEADER
                //START RINCIAN 
                $event->sheet->mergeCells('A8:B8');
                $event->sheet->setCellValue('A8', "Kuasa Pengguna Anggaran ");
                $event->sheet->setCellValue('C8', ": ");
                $event->sheet->mergeCells('A9:B9');
                $event->sheet->setCellValue('A9', "Bendahara Pengeluaran Pembantu ");
                $event->sheet->setCellValue('C9', ": ");
                $event->sheet->mergeCells('A10:B10');
                $event->sheet->setCellValue('A10', "Program ");
                $event->sheet->setCellValue('C10', ": ". $this->spj->program->kode_program. " ". $this->spj->program->nama_program);
                $event->sheet->mergeCells('A11:B11');
                $event->sheet->setCellValue('A11', "Kegiatan ");
                $event->sheet->setCellValue('C11', ": ". $this->spj->kegiatan->kode_kegiatan. " ". $this->spj->kegiatan->nama_kegiatan);
                $event->sheet->mergeCells('A12:B12');
                $event->sheet->setCellValue('A12', "Sub Kegiatan ");
                $event->sheet->setCellValue('C12', ": ". $this->spj->subkegiatan->kode_sub_kegiatan. " ". $this->spj->subkegiatan->nama_sub_kegiatan);
                $event->sheet->mergeCells('A13:B13');
                $event->sheet->setCellValue('A13', "Tahun Anggaran ");
                $event->sheet->setCellValue('C13', ": ". $this->tahun);
                //END RINCIAN
                //START TABLE
                //START TABLE HEADER
                $event->sheet->mergeCells('A15:A17');
                $event->sheet->setCellValue('A15', "KODE REKENING");
                $event->sheet->setCellValue('A18', "1");
                $event->sheet->mergeCells('B15:C17');
                $event->sheet->setCellValue('B15', "URAIAN");
                $event->sheet->setCellValue('B18', "2");
                $event->sheet->mergeCells('D15:D17');
                $event->sheet->setCellValue('D15', "JUMLAH ANGGARAN");
                $event->sheet->setCellValue('D18', "3");
                //ROW SPJ LS GAJI
                $event->sheet->mergeCells('F15:H15');
                $event->sheet->setCellValue('F15', "SPJ - LS GAJI");
                $event->sheet->setCellValue('F16', "S.d BULAN");
                $event->sheet->setCellValue('F17', "LALU");
                $event->sheet->setCellValue('F18', "4");
                $event->sheet->mergeCells('G16:G17');
                $event->sheet->setCellValue('G16', "BULAN INI");
                $event->sheet->setCellValue('G18', "5");
                $event->sheet->setCellValue('H16', "S.d BULAN");
                $event->sheet->setCellValue('H17', "INI");
                $event->sheet->setCellValue('H18', "6");
                //END ROW SPJ LS GAJI
                //ROW SPJ BARANG JASA
                $event->sheet->mergeCells('I15:K15');
                $event->sheet->setCellValue('I15', "SPJ - LS BARANG & JASA");
                $event->sheet->setCellValue('I16', "S.d BULAN");
                $event->sheet->setCellValue('I17', "LALU");
                $event->sheet->setCellValue('I18', "7");
                $event->sheet->mergeCells('J16:JI17');
                $event->sheet->setCellValue('J16', "BULAN INI");
                $event->sheet->setCellValue('J18', "8");
                $event->sheet->setCellValue('H16', "S.d BULAN");
                $event->sheet->setCellValue('H17', "INI");
                $event->sheet->setCellValue('H18', "9");
                //END ROW SPJ BARANG JASA
                //ROW SPJ UP/GU/TU
                $event->sheet->mergeCells('L15:N15');
                $event->sheet->setCellValue('L15', "SPJ - UP/GU/TU");
                $event->sheet->setCellValue('L16', "S.d BULAN");
                $event->sheet->setCellValue('L17', "LALU");
                $event->sheet->setCellValue('L18', "10");
                $event->sheet->mergeCells('M16:MI17');
                $event->sheet->setCellValue('M16', "BULAN INI");
                $event->sheet->setCellValue('M18', "11");
                $event->sheet->setCellValue('N16', "S.d BULAN");
                $event->sheet->setCellValue('N17', "INI");
                $event->sheet->setCellValue('N18', "12");
                //END ROW SPJ UP/GU/TU
                $event->sheet->setCellValue('O15', "JUMLAH SPJ");
                $event->sheet->setCellValue('O16', "(LS+IP+GU+TU)");
                $event->sheet->setCellValue('O17', "S.d BULAN INI");
                $event->sheet->mergeCells('P15:P17');
                $event->sheet->setCellValue('P17', "SISA PAGU ANGGARAN");
                //END TABLE HEADER
                $row = 19;
                foreach ($this->spj as $item){
                    $event->sheet->setCellValue('A'.$row, $item->kodering->kode_kodering);
                    $event->sheet->setCellValue('B'.$row, $item->kodering->nama_kodering);
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
