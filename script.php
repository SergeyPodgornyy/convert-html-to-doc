<?php

include('handler.php');

function CreateDOC($link,$filename) {

// Creating Object, which will generate mht
$MhtFileMaker = new MhtFileMaker();

// Plug in images to file

// RegEx, which pull out image path
preg_match_all('@<img(.*)?src="([^"]+)"@ui', $link, $matches);

// For future implementation of links
// preg_match_all('@<a(.*)?href="([^"]+)"@ui', $link, $mat);
// print_r($mat[2]);

foreach ($matches[4] as $img) {
		$img_tmp=$img;
		$img_tmp_old=$img;
		
		// Change image pathes, if they are not in Web
		if (strpos($img_tmp,"http")===FALSE) 
			$img_tmp="img/".$img_tmp;
	
	
		// Allocate image path WITHOUT domain address
		$img_array=explode("//",$img_tmp);
		$img_name_only=$img_array[1];
		$img_name_only=explode("/",$img_name_only);
		unset($img_name_only[0]);
		$img_name_only=implode("/",$img_name_only);

		// Change image path to relative path (without domain)
		$link=str_replace($img_tmp_old,$img_name_only,$link);
	
		// Add image to final file
		$MhtFileMaker->AddFile($img_tmp, $img_name_only, 'utf-8');
};

// Create final file
$MhtFileMaker->AddContents($link,"text/html");

// Save file
$MhtFileMaker->MakeFile($filename);
};

$link=$_POST['plainHTML'];

// Generate random name for file
function generateFilename($length = 8) {
    $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    $count = mb_strlen($chars);

    for ($i = 0, $result = ''; $i < $length; $i++) {
        $index = rand(0, $count - 1);
        $result .= mb_substr($chars, $index, 1);
    }

    return $result;
}

// $filename = "result/test.doc";
$filename = "result/".generateFilename().".doc";
CreateDOC($link,$filename);

echo $filename;
?>