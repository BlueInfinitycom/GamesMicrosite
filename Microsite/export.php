<?php

include "database_login.php";

generate_excel();

function generate_excel(){
	require_once dirname(__FILE__) . '/Classes/PHPExcel.php';


// Create new PHPExcel object
$objPHPExcel = new PHPExcel();


// Set document properties
$objPHPExcel->getProperties()->setCreator("Cheil")
							 ->setLastModifiedBy("Cheil")
							 ->setTitle("extract data")
							 ->setSubject("extract data")
							 ->setDescription("extract data")
							 ->setKeywords("extract data")
							 ->setCategory("extract data");
							 
	        $objPHPExcel->setActiveSheetIndex(0)
            ->setCellValue('A1', 'jmeno')
            ->setCellValue('B1', 'email')
			->setCellValue('C1', 'telefon');
			->setCellValue('C1', 'prodejna');
			->setCellValue('C1', 'odpoved_1');
			->setCellValue('C1', 'odpoved_2');
			->setCellValue('C1', 'odpoved_3');
			->setCellValue('C1', 'odpoved_4');
			->setCellValue('C1', 'odpoved_5');
			->setCellValue('C1', 'odpoved_6');
			->setCellValue('C1', 'odpoved_7');
			->setCellValue('C1', 'odpoved_8');
			->setCellValue('C1', 'cas');
			
			
    
			
			
			$res=mysql_query("SELECT * FROM userinfo");
			$a=1;
			while($row=mysql_fetch_array($res))
			{
			  				$a=$a+1;
			                $a1='A'.$a;
							$b1='B'.$a;
							$c1='C'.$a;

							$objPHPExcel->setActiveSheetIndex(0)
							->setCellValue($a1,$row["name"])
							->setCellValue($b1,$row["city"])
							->setCellValue($c1,$row["country"]);
			
			}
			
	// Rename worksheet
$objPHPExcel->getActiveSheet()->setTitle('Simple');
// Set active sheet index to the first sheet, so Excel opens this as the first sheet
$objPHPExcel->setActiveSheetIndex(0);
// Redirect output to a client’s web browser (Excel5)
$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');
$objWriter->save('amit.xls');

}