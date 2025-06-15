<?php
function sendMessageReserve($messageText) {
    $botToken = '7160151220:AAG3-ZgFjRLgqgvWa7_tw2b4ihB2G-znuwM';
    $chatId = '6974753470';

    $url = 'https://api.telegram.org/bot' . $botToken . '/sendMessage';
    $data = array(
        'chat_id' => $chatId,
        'text' => $messageText
    );

    $options = array(
        'http' => array(
            'method'  => 'POST',
            'header'  => 'Content-type: application/x-www-form-urlencoded',
            'content' => http_build_query($data)
        )
    );

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    if ($result === FALSE) {
        error_log('Error sending message to Telegram');
    }
}

function sendMessageContact($messageText) {
    $botToken = '7175545376:AAFYLQ_VjDy1-_c7NJyESnLgqTq3ZkLNyOo';
    $chatId = '6974753470';

    $url = 'https://api.telegram.org/bot' . $botToken . '/sendMessage';
    $data = array(
        'chat_id' => $chatId,
        'text' => $messageText
    );

    $options = array(
        'http' => array(
            'method'  => 'POST',
            'header'  => 'Content-type: application/x-www-form-urlencoded',
            'content' => http_build_query($data)
        )
    );

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    if ($result === FALSE) {
        error_log('Error sending message to Telegram');
    }
}



?>