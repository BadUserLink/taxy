<?php

// Load Composer's autoloader
include_once 'apicred.php';
include_once 'functions.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form values
    $star = $_REQUEST['star'];
    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $message = $_REQUEST['message'];
    $messageText = "Name: ".$name.",\n Email: ".$email.",\n Message: ".$message;

    if ($star < 1) {
        $star = 5;
    }

    insertFeedback($db, $star, $name, $email, $message);
    // sendMessageContact($messageText);
    // $data = getDataFeedback($db);

} else {
    echo 'Invalid request method.';
}
?>
