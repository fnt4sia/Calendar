<?php

session_start();

include ("dbconnect.php");

$usernameInput = $_SESSION['username'];

$counter = 1;
while(true){
    $result = mysqli_query($conn, "SELECT * FROM tdl WHERE username = '$usernameInput' AND id = '$counter'");
    if(mysqli_num_rows($result) > 0){
        $counter++;
    }else{
        $id = $counter;
        break;
    }
}

$sqlCreate = "INSERT INTO tdl(username, id) VALUES('$usernameInput', '$id')";

if(mysqli_query($conn, $sqlCreate)){
    header("Location:../todo.php");
}

?>