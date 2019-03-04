<?php


$servername = "localhost";
$username = "root";
$password = "";
$database="galaxyalaunch";


/*
$servername = "c199um.forpsi.com";
$username = "f86389";
$password = "wvsAc8P";
$database="f86389";
*/

// $mysqli = new mysqli($servername, $username, $password, $database);

$conn = mysqli_connect($servername, $username, $password,$database);
// mysqli_select_db($database,$conn);