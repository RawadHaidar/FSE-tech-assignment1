<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "solitaire_first_fse_tech_assignment"; 

$mysql = new mysqli($db_host, $db_user, $db_pass, $db_name);

?>
