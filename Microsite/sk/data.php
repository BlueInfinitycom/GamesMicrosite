<?php

include "database_login.php";

/*

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

*/


$jmeno= $_POST["jmeno"];//"robert chytil";
$email= $_POST["email"];//"robertchtyil@gmail.com";
$telefon= $_POST["telefon"];//"608764532";
$prodejna= $_POST["prodejna"];//"OC Smichov";
$odpoved_1= $_POST["odpoved_1"];//"odpoved_1";
$odpoved_2= $_POST["odpoved_2"];//"odpoved_2";
$odpoved_3= $_POST["odpoved_3"];//"odpoved_3";
$odpoved_4= $_POST["odpoved_4"];//"odpoved_4";
$odpoved_5= $_POST["odpoved_5"];//"odpoved_5";
$odpoved_6= $_POST["odpoved_6"];//"odpoved_6";
$odpoved_7= $_POST["odpoved_7"];//"odpoved_7";
$odpoved_8= $_POST["odpoved_8"];//"odpoved_8";
$cas= $_POST["cas"];//8;




$insert_sql = "INSERT INTO userinfo (jmeno, email, telefon,prodejna,odpoved_1,odpoved_2,odpoved_3,odpoved_4,odpoved_5,odpoved_6,odpoved_7,odpoved_8, cas) VALUES ('$jmeno', '$email', '$telefon','$prodejna', '$odpoved_1', '$odpoved_2', '$odpoved_3', '$odpoved_4', '$odpoved_5', '$odpoved_6', '$odpoved_7', '$odpoved_8', '$cas')";

 $result=mysqli_query($conn,$insert_sql);

