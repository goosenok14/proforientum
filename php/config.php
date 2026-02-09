<?php
// Конфигурация базы данных
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'prof_orientation');

// Функция для получения соединения с БД
function getDBConnection() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    
    if ($conn->connect_error) {
        // Возвращаем соединение даже при ошибке (для демо-режима)
        return $conn;
    }
    
    $conn->set_charset("utf8");
    return $conn;
}

// Защита от SQL-инъекций
function sanitize($input) {
    if (empty($input)) return '';
    $conn = getDBConnection();
    if ($conn && !$conn->connect_error) {
        return $conn->real_escape_string(strip_tags(trim($input)));
    }
    return htmlspecialchars(strip_tags(trim($input)));
}

// Простая функция для возврата JSON
function returnJson($data) {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    exit();
}

// Функция для возврата ошибки
function returnError($message) {
    returnJson(['error' => true, 'message' => $message]);
}

// Отключаем вывод ошибок PHP в продакшене
error_reporting(0);
ini_set('display_errors', 0);
?>