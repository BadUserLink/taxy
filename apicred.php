<?php
function sendMessageReserve($messageText) {
    $botToken = 'aldfhkjdfan-znuwM';
    $chatId = 'adfnkdsf,dsf';

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
    $botToken = 'asdasdsdsadasddfnsk';
    $chatId = 'dvsbjhdsbdsmdn';

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