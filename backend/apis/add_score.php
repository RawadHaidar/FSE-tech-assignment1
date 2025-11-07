<?php

include("../database/connection.php");
$data = json_decode(file_get_contents("php://input"), true);


if(!isset($data["name"]) || trim($data["name"]) === ""){
    echo json_encode(["success" => false, "error" => "Name field is missing"]);
    return;
}

$name = $data["name"];
$score = rand(0, 1000);
$duration = rand(30,300);

$query = $mysql->prepare("INSERT INTO users (user_name, score, duration) VALUES (?,?,?)");
$query->bind_param("ssi", $name,$score,$duration);
$query->execute();


if ($query->error) {
    echo json_encode(["success" => false, "error" => $query->error]);
} else {
    echo json_encode(["success" => true, 
    "message" => "Player added successfully",
    "data" => [
            "user_name" => $name,
            "score" => $score,
            "duration" => $duration
        ]
]);
}
?>

