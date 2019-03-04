<?php
include "database_login.php";

$jmeno= "robert chytil";
$email= "robertchtyil@gmail.com";
$telefon= "608764532";
$prodejna= "OC Smichov";
$odpoved_1= "odpoved_1";
$odpoved_2= "odpoved_2";
$odpoved_3= "odpoved_3";
$odpoved_4= "odpoved_4";
$odpoved_5= "odpoved_5";
$odpoved_6= "odpoved_6";
$odpoved_7= "odpoved_7";
$odpoved_8= "odpoved_8";
$cas= 8;


$query = "INSERT INTO userinfo (jmeno, email,telefon,prodejna,odpoved_1,odpoved_2,odpoved_3,odpoved_4,odpoved_5,odpoved_6,odpoved_7,odpoved_8,cas) VALUES ('$jmeno','$email','$telefon','$prodejna','$odpoved_1','$odpoved_2','$odpoved_3','$odpoved_4','$odpoved_5','$odpoved_6','$odpoved_7','$odpoved_8','$cas')";

mysqli_query($conn, $query);
	