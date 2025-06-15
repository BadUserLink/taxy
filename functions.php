<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$db = mysqli_connect($servername, $username, $password, $dbname);
if (!$db) {
    die("Connection failed: " . mysqli_connect_error());
}



function insertFeedback($db, $star, $name, $email, $comm) {
    $query = "INSERT INTO feedback ( star, name, mail, comm) VALUES (?, ?, ?, ?)";

    $stmt = mysqli_prepare($db, $query);
    if ($stmt) {
        mysqli_stmt_bind_param($stmt, "isss", $star, $name, $email, $comm);
        if (mysqli_stmt_execute($stmt)) {
            echo json_encode(array('done' => TRUE));
        } else {
            echo json_encode(array('done' => FALSE));
            // echo "Error inserting record: " . mysqli_error($db);
        }
        // $_SESSION['message'] = "Feedback submitted successfully!";
        header("Location: ../taxi");
    
    } else {
        // echo "Error preparing statement: " . mysqli_error($db);
        echo json_encode(array('done' => false));
    }
}


function getDataFeedback($db) {
    $data = [];
    $query = "SELECT id, star, name, comm FROM feedback order by star desc";

    // Prepare statement
    $stmt = mysqli_prepare($db, $query);
    if ($stmt) {
        // Execute statement
        mysqli_stmt_execute($stmt);
        
        // Bind result variables
        mysqli_stmt_bind_result($stmt, $id, $star, $name, $comm);
        
        // Fetch values
        while (mysqli_stmt_fetch($stmt)) {
            $data[] = [
                'id' => $id,
                'star' => $star,
                'name' => $name,
                'comm' => $comm
            ];
        }
        
        // Close statement
        mysqli_stmt_close($stmt);
    } else {
        // Handle error
        echo "Error preparing statement: " . mysqli_error($db);
    }

    return $data;
}


function getDataFeedbackTotal($db) {
    $data = [];
    $query = "SELECT AVG(star) FROM feedback";

    // Prepare statement
    $stmt = mysqli_prepare($db, $query);
    if ($stmt) {
        // Execute statement
        mysqli_stmt_execute($stmt);
        
        // Bind result variables
        mysqli_stmt_bind_result($stmt, $rez);
        
        // Fetch values
        if (mysqli_stmt_fetch($stmt)) {
            $data[] = $rez;
        }
        
        // Close statement
        mysqli_stmt_close($stmt);
    } else {
        // Handle error
        echo "Error preparing statement: " . mysqli_error($db);
    }

    return $data;
}


?>
