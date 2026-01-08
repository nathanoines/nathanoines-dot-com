<?php
// Simple IFPA API proxy to avoid CORS issues
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Get the requested path
$path = isset($_GET['path']) ? $_GET['path'] : '';
$apiKey = isset($_GET['api_key']) ? $_GET['api_key'] : '';

if (empty($path)) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing path parameter']);
    exit;
}

// Build the IFPA API URL
$url = 'https://api.ifpapinball.com/' . $path;
if (!empty($apiKey)) {
    $url .= '?api_key=' . $apiKey;
}

// Fetch from IFPA API
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Return the response
http_response_code($httpCode);
echo $response;
