<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


// Load Composer's autoloader
require '../vendor/autoload.php';
include_once 'apicred.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form values
    $name = $_POST['first_name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $comment = $_POST['comment'];
    $messageText = "Name: ".$name.",\n Email: ".$email."\n Phone: ".$phone.",\n Addres from: ".$address.", \n Addres to: ".$city.",\n Type: " .$state.",\n Comm: ".$comment;

    sendMessageReserve($messageText);


} else {
    echo 'Invalid action.';
}
    

?>
