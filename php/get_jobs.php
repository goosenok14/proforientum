<?php
require_once 'config.php';

header('Content-Type: application/json; charset=utf-8');

// Демо-данные вакансий
$jobs = [
    [
        'id' => 1,
        'title' => 'Frontend разработчик',
        'company' => 'Яндекс',
        'description' => 'Разработка пользовательских интерфейсов для веб-приложений',
        'salary_min' => 120000,
        'salary_max' => 220000,
        'experience' => '2-5 лет',
        'location' => 'Москва'
    ],
    [
        'id' => 2,
        'title' => 'Data Analyst',
        'company' => 'Сбер',
        'description' => 'Анализ финансовых данных и создание отчетов',
        'salary_min' => 130000,
        'salary_max' => 200000,
        'experience' => '1-3 года',
        'location' => 'Москва'
    ],
    [
        'id' => 3,
        'title' => 'Digital маркетолог',
        'company' => 'Ozon',
        'description' => 'Продвижение товаров в digital-среде',
        'salary_min' => 80000,
        'salary_max' => 140000,
        'experience' => '2-4 года',
        'location' => 'Санкт-Петербург'
    ],
    [
        'id' => 4,
        'title' => 'Backend разработчик',
        'company' => 'ВКонтакте',
        'description' => 'Разработка серверной части приложений',
        'salary_min' => 140000,
        'salary_max' => 240000,
        'experience' => '3+ года',
        'location' => 'Москва'
    ],
    [
        'id' => 5,
        'title' => 'UI/UX дизайнер',
        'company' => 'Сбер',
        'description' => 'Проектирование интерфейсов для мобильных приложений',
        'salary_min' => 90000,
        'salary_max' => 160000,
        'experience' => '2+ года',
        'location' => 'Москва'
    ]
];

echo json_encode($jobs, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
?>