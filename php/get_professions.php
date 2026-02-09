<?php
require_once 'config.php';

// Устанавливаем заголовок JSON
header('Content-Type: application/json; charset=utf-8');

// Функция для возврата демо-данных
function getDemoProfessions() {
    return [
        [
            'id' => 1,
            'name' => 'Веб-разработчик',
            'description' => 'Создание и поддержка веб-сайтов и веб-приложений',
            'skills' => 'HTML, CSS, JavaScript, PHP, React',
            'salary_range' => '80-200 тыс. руб.',
            'demand_level' => 'высокий',
            'category' => 'IT',
            'profession_types' => ['Технический', 'Аналитический']
        ],
        [
            'id' => 2,
            'name' => 'Аналитик данных',
            'description' => 'Анализ больших данных для принятия бизнес-решений',
            'skills' => 'SQL, Python, Excel, статистика',
            'salary_range' => '90-180 тыс. руб.',
            'demand_level' => 'высокий',
            'category' => 'Аналитика',
            'profession_types' => ['Аналитический', 'Исследовательский']
        ],
        [
            'id' => 3,
            'name' => 'Маркетолог',
            'description' => 'Продвижение товаров и услуг на рынке',
            'skills' => 'Аналитика, SMM, копирайтинг',
            'salary_range' => '60-150 тыс. руб.',
            'demand_level' => 'средний',
            'category' => 'Маркетинг',
            'profession_types' => ['Социальный', 'Творческий', 'Управленческий']
        ],
        [
            'id' => 4,
            'name' => 'Инженер-программист',
            'description' => 'Разработка программного обеспечения',
            'skills' => 'C++, Java, Python, алгоритмы',
            'salary_range' => '100-250 тыс. руб.',
            'demand_level' => 'высокий',
            'category' => 'IT',
            'profession_types' => ['Технический', 'Аналитический']
        ],
        [
            'id' => 5,
            'name' => 'Дизайнер UX/UI',
            'description' => 'Проектирование пользовательских интерфейсов',
            'skills' => 'Figma, Adobe XD, пользовательские исследования',
            'salary_range' => '70-160 тыс. руб.',
            'demand_level' => 'высокий',
            'category' => 'Дизайн',
            'profession_types' => ['Творческий', 'Технический']
        ],
        [
            'id' => 6,
            'name' => 'Менеджер проектов',
            'description' => 'Управление проектами и командами',
            'skills' => 'Управление, коммуникация, планирование',
            'salary_range' => '80-180 тыс. руб.',
            'demand_level' => 'средний',
            'category' => 'Менеджмент',
            'profession_types' => ['Управленческий', 'Социальный']
        ]
    ];
}

// Всегда возвращаем демо-данные (для простоты)
$professions = getDemoProfessions();

echo json_encode($professions, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
?>