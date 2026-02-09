<?php
require_once 'config.php';

header('Content-Type: application/json; charset=utf-8');

// Демо-данные университетов
$universities = [
    [
        'id' => 1,
        'name' => 'МГУ им. Ломоносова',
        'city' => 'Москва',
        'description' => 'Ведущий университет России, основанный в 1755 году',
        'programs' => 'Фундаментальная информатика, Прикладная математика, Физика, Химия',
        'rating' => 4.8,
        'website' => 'https://www.msu.ru'
    ],
    [
        'id' => 2,
        'name' => 'МФТИ',
        'city' => 'Москва',
        'description' => 'Технический университет мирового уровня',
        'programs' => 'Прикладная математика и физика, Компьютерные науки, Радиотехника',
        'rating' => 4.9,
        'website' => 'https://mipt.ru'
    ],
    [
        'id' => 3,
        'name' => 'НИУ ВШЭ',
        'city' => 'Москва',
        'description' => 'Исследовательский университет в сфере социальных наук',
        'programs' => 'Бизнес-информатика, Маркетинг, Экономика, Социология',
        'rating' => 4.7,
        'website' => 'https://www.hse.ru'
    ],
    [
        'id' => 4,
        'name' => 'СПбГУ',
        'city' => 'Санкт-Петербург',
        'description' => 'Один из старейших университетов России',
        'programs' => 'Программная инженерия, Менеджмент, Филология, История',
        'rating' => 4.6,
        'website' => 'https://spbu.ru'
    ],
    [
        'id' => 5,
        'name' => 'ИТМО',
        'city' => 'Санкт-Петербург',
        'description' => 'Университет информационных технологий, механики и оптики',
        'programs' => 'Информационные системы, Кибербезопасность, Оптотехника',
        'rating' => 4.8,
        'website' => 'https://itmo.ru'
    ],
    [
        'id' => 6,
        'name' => 'МГТУ им. Баумана',
        'city' => 'Москва',
        'description' => 'Ведущий технический университет России',
        'programs' => 'Машиностроение, Робототехника, Космическая техника',
        'rating' => 4.7,
        'website' => 'https://bmstu.ru'
    ]
];

echo json_encode($universities, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
?>