<?php 
include("../database/connection.php");

if(isset($_GET["id"])){
    $id = $_GET["id"];
}else{
    $id = -1;
}

if($id == -1){
    // $sql = "SELECT * FROM users";
    $sql = "SELECT user_name, score, duration FROM users ORDER BY score DESC, duration ASC";
    $query = $mysql->prepare($sql);
}else{
    $sql = "SELECT * FROM users WHERE id = ?";
    $query = $mysql->prepare($sql);
    $query->bind_param("i", $id);
}

$query->execute();

$array = $query->get_result();

$response = [];
$response["success"] = true;
$response["data"] = [];
while($article = $array->fetch_assoc()){
    $response["data"][] = $article;
}

echo json_encode($response);

?> 