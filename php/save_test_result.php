<?php
require_once 'config.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Метод не поддерживается']);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Неверные данные']);
    exit();
}

$conn = getDBConnection();

$userId = sanitize($data['userId'] ?? '');
$testId = intval($data['testId'] ?? 1);
$answers = json_encode($data['answers'] ?? []);
$professionTypes = json_encode($data['professionTypes'] ?? []);
$recommendedProfessions = json_encode($data['recommendedProfessions'] ?? []);

// Сохраняем результат теста
$sql = "INSERT INTO test_results (user_id, test_id, result_data, profession_types, recommended_professions) 
        VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sisss", $userId, $testId, $answers, $professionTypes, $recommendedProfessions);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Результаты сохранены', 'result_id' => $stmt->insert_id]);
} else {
    echo json_encode(['success' => false, 'error' => $conn->error]);
}

$stmt->close();
$conn->close();
?>