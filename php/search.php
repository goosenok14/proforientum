<?php
require_once 'config.php';

header('Content-Type: application/json; charset=utf-8');

// Демо-данные для поиска
$demoProfessions = [
    [
        'id' => 1,
        'name' => 'Веб-разработчик',
        'description' => 'Создание и поддержка веб-сайтов и веб-приложений',
        'skills' => 'HTML, CSS, JavaScript, PHP, React',
        'salary_range' => '80-200 тыс. руб.',
        'demand_level' => 'высокий',
        'category' => 'IT'
    ],
    [
        'id' => 2,
        'name' => 'Аналитик данных',
        'description' => 'Анализ больших данных для принятия бизнес-решений',
        'skills' => 'SQL, Python, Excel, статистика',
        'salary_range' => '90-180 тыс. руб.',
        'demand_level' => 'высокий',
        'category' => 'Аналитика'
    ]
];

$demoJobs = [
    [
        'id' => 1,
        'title' => 'Frontend разработчик',
        'company' => 'Яндекс',
        'description' => 'Разработка пользовательских интерфейсов для веб-приложений'
    ]
];

$demoUniversities = [
    [
        'name' => 'МГУ им. Ломоносова',
        'city' => 'Москва',
        'description' => 'Ведущий университет России'
    ]
];

$query = isset($_GET['q']) ? strtolower(trim($_GET['q'])) : '';

if (empty($query)) {
    $results = [
        'professions' => [],
        'jobs' => [],
        'universities' => []
    ];
} else {
    // Простой поиск по демо-данным
    $results = [
        'professions' => array_filter($demoProfessions, function($prof) use ($query) {
            return stripos($prof['name'], $query) !== false || 
                   stripos($prof['description'], $query) !== false;
        }),
        'jobs' => array_filter($demoJobs, function($job) use ($query) {
            return stripos($job['title'], $query) !== false || 
                   stripos($job['description'], $query) !== false;
        }),
        'universities' => array_filter($demoUniversities, function($uni) use ($query) {
            return stripos($uni['name'], $query) !== false || 
                   stripos($uni['description'], $query) !== false;
        })
    ];
    
    // Сбрасываем ключи массивов
    $results['professions'] = array_values($results['professions']);
    $results['jobs'] = array_values($results['jobs']);
    $results['universities'] = array_values($results['universities']);
}

echo json_encode($results, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
?>