// js/test.js - Полностью рабочий профориентационный тест по системе Холланда (RIASEC)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Тест загружен');
    
    // Элементы DOM
    const elements = {
        testIntro: document.getElementById('testIntro'),
        testQuestions: document.getElementById('testQuestions'),
        testResults: document.getElementById('testResults'),
        startTestBtn: document.getElementById('startTest'),
        prevQuestionBtn: document.getElementById('prevQuestion'),
        nextQuestionBtn: document.getElementById('nextQuestion'),
        saveResultsBtn: document.getElementById('saveResults'),
        progressBar: document.getElementById('progressBar'),
        questionContainer: document.getElementById('questionContainer'),
        currentQuestionSpan: document.getElementById('currentQuestion'),
        totalQuestionsSpan: document.getElementById('totalQuestions'),
        professionTypesDiv: document.getElementById('professionTypes'),
        resultCategoriesDiv: document.getElementById('resultCategories'),
        recommendedProfessionsDiv: document.getElementById('recommendedProfessions')
    };
    
    console.log('Найденные элементы:');
    for (const [name, element] of Object.entries(elements)) {
        console.log(`- ${name}:`, element ? '✓' : '✗');
    }
    
    // Состояние теста
    let currentQuestionIndex = 0;
    let answers = [];
    let questions = [];
    
    // Система оценки по Холланду (RIASEC)
    const hollandTypes = {
        'R': { name: 'Реалистический', score: 0, description: 'Практичный, технический, ориентированный на работу с инструментами и машинами' },
        'I': { name: 'Исследовательский', score: 0, description: 'Аналитичный, интеллектуальный, научно-ориентированный' },
        'A': { name: 'Артистический', score: 0, description: 'Креативный, оригинальный, художественно-ориентированный' },
        'S': { name: 'Социальный', score: 0, description: 'Помогающий, обучающий, ориентированный на взаимодействие с людьми' },
        'E': { name: 'Предпринимательский', score: 0, description: 'Лидерский, амбициозный, ориентированный на влияние и управление' },
        'C': { name: 'Конвенциональный', score: 0, description: 'Организованный, внимательный к деталям, ориентированный на структуру и порядок' }
    };
    
    // ==================== ИНИЦИАЛИЗАЦИЯ ====================
    
    // Начало теста
    if (elements.startTestBtn) {
        elements.startTestBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Начало теста');
            
            if (elements.testIntro) {
                elements.testIntro.style.display = 'none';
            }
            
            if (elements.testQuestions) {
                elements.testQuestions.style.display = 'block';
                loadTestQuestions();
            }
        });
    }
    
    // Загрузка вопросов теста (30 вопросов по системе Холланда)
    function loadTestQuestions() {
        console.log('Загрузка вопросов теста...');
        
        questions = [
            // Реалистический тип (R)
            {
                id: 1,
                text: 'Вам нравится работать с инструментами, машинами или техникой?',
                options: [
                    { text: 'Очень нравится', type: 'R', points: 3 },
                    { text: 'Иногда интересно', type: 'R', points: 2 },
                    { text: 'Редко', type: 'I', points: 1 },
                    { text: 'Не нравится', type: 'S', points: 0 }
                ]
            },
            {
                id: 2,
                text: 'Вы предпочитаете физическую активность, спорт или работу на открытом воздухе?',
                options: [
                    { text: 'Да, очень', type: 'R', points: 3 },
                    { text: 'Иногда', type: 'R', points: 2 },
                    { text: 'Редко', type: 'A', points: 1 },
                    { text: 'Нет', type: 'C', points: 0 }
                ]
            },
            {
                id: 3,
                text: 'Вы хорошо разбираетесь в механике и любите чинить вещи?',
                options: [
                    { text: 'Очень хорошо', type: 'R', points: 3 },
                    { text: 'Неплохо', type: 'R', points: 2 },
                    { text: 'С трудом', type: 'I', points: 1 },
                    { text: 'Совсем не умею', type: 'S', points: 0 }
                ]
            },
            {
                id: 4,
                text: 'Вам нравится конструировать и строить что-либо своими руками?',
                options: [
                    { text: 'Обожаю', type: 'R', points: 3 },
                    { text: 'Иногда', type: 'R', points: 2 },
                    { text: 'Редко', type: 'A', points: 1 },
                    { text: 'Не нравится', type: 'C', points: 0 }
                ]
            },
            {
                id: 5,
                text: 'Вы предпочитаете ясные и конкретные задачи, а не абстрактные?',
                options: [
                    { text: 'Определенно', type: 'R', points: 3 },
                    { text: 'Чаще да', type: 'R', points: 2 },
                    { text: 'Зависит от ситуации', type: 'I', points: 1 },
                    { text: 'Нет, предпочитаю абстрактные', type: 'A', points: 0 }
                ]
            },
            
            // Исследовательский тип (I)
            {
                id: 6,
                text: 'Вам нравится решать сложные математические или научные задачи?',
                options: [
                    { text: 'Очень нравится', type: 'I', points: 3 },
                    { text: 'Иногда', type: 'I', points: 2 },
                    { text: 'Редко', type: 'S', points: 1 },
                    { text: 'Не нравится', type: 'E', points: 0 }
                ]
            },
            {
                id: 7,
                text: 'Вы любите исследовать новые идеи, читать научные статьи или проводить эксперименты?',
                options: [
                    { text: 'Постоянно', type: 'I', points: 3 },
                    { text: 'Довольно часто', type: 'I', points: 2 },
                    { text: 'Иногда', type: 'A', points: 1 },
                    { text: 'Редко', type: 'C', points: 0 }
                ]
            },
            {
                id: 8,
                text: 'Вам интересны научные открытия и новые технологии?',
                options: [
                    { text: 'Очень интересны', type: 'I', points: 3 },
                    { text: 'Интересны', type: 'I', points: 2 },
                    { text: 'Немного', type: 'R', points: 1 },
                    { text: 'Не интересуют', type: 'E', points: 0 }
                ]
            },
            {
                id: 9,
                text: 'Вы предпочитаете работать в одиночестве над сложными интеллектуальными задачами?',
                options: [
                    { text: 'Да, предпочитаю', type: 'I', points: 3 },
                    { text: 'Иногда', type: 'I', points: 2 },
                    { text: 'Редко', type: 'S', points: 1 },
                    { text: 'Нет, люблю работать в команде', type: 'E', points: 0 }
                ]
            },
            {
                id: 10,
                text: 'Вам нравится анализировать данные, статистику или проводить исследования?',
                options: [
                    { text: 'Очень нравится', type: 'I', points: 3 },
                    { text: 'Нравится', type: 'I', points: 2 },
                    { text: 'Иногда', type: 'C', points: 1 },
                    { text: 'Не нравится', type: 'A', points: 0 }
                ]
            },
            
            // Артистический тип (A)
            {
                id: 11,
                text: 'Вам нравится рисовать, фотографировать или заниматься другим творчеством?',
                options: [
                    { text: 'Обожаю', type: 'A', points: 3 },
                    { text: 'Довольно часто', type: 'A', points: 2 },
                    { text: 'Иногда', type: 'S', points: 1 },
                    { text: 'Редко', type: 'C', points: 0 }
                ]
            },
            {
                id: 12,
                text: 'Вы часто придумываете оригинальные идеи и нестандартные решения?',
                options: [
                    { text: 'Постоянно', type: 'A', points: 3 },
                    { text: 'Часто', type: 'A', points: 2 },
                    { text: 'Иногда', type: 'I', points: 1 },
                    { text: 'Редко', type: 'R', points: 0 }
                ]
            },
            {
                id: 13,
                text: 'Вам нравится выражать себя через искусство, музыку или литературу?',
                options: [
                    { text: 'Очень нравится', type: 'A', points: 3 },
                    { text: 'Нравится', type: 'A', points: 2 },
                    { text: 'Иногда', type: 'S', points: 1 },
                    { text: 'Не нравится', type: 'C', points: 0 }
                ]
            },
            {
                id: 14,
                text: 'Вы предпочитаете свободу и гибкость в работе, а не строгие правила?',
                options: [
                    { text: 'Определенно', type: 'A', points: 3 },
                    { text: 'Чаще да', type: 'A', points: 2 },
                    { text: 'Зависит от ситуации', type: 'I', points: 1 },
                    { text: 'Нет, предпочитаю четкие правила', type: 'C', points: 0 }
                ]
            },
            {
                id: 15,
                text: 'Вам интересно создавать красивые или оригинальные вещи?',
                options: [
                    { text: 'Очень интересно', type: 'A', points: 3 },
                    { text: 'Интересно', type: 'A', points: 2 },
                    { text: 'Иногда', type: 'E', points: 1 },
                    { text: 'Не интересно', type: 'R', points: 0 }
                ]
            },
            
            // Социальный тип (S)
            {
                id: 16,
                text: 'Вам нравится помогать другим людям решать их проблемы?',
                options: [
                    { text: 'Очень нравится', type: 'S', points: 3 },
                    { text: 'Нравится', type: 'S', points: 2 },
                    { text: 'Иногда', type: 'E', points: 1 },
                    { text: 'Не нравится', type: 'I', points: 0 }
                ]
            },
            {
                id: 17,
                text: 'Вы легко находите общий язык с разными людьми?',
                options: [
                    { text: 'Очень легко', type: 'S', points: 3 },
                    { text: 'Легко', type: 'S', points: 2 },
                    { text: 'Иногда сложно', type: 'A', points: 1 },
                    { text: 'Трудно', type: 'I', points: 0 }
                ]
            },
            {
                id: 18,
                text: 'Вам нравится учить, консультировать или заботиться о других?',
                options: [
                    { text: 'Обожаю', type: 'S', points: 3 },
                    { text: 'Нравится', type: 'S', points: 2 },
                    { text: 'Иногда', type: 'C', points: 1 },
                    { text: 'Не нравится', type: 'R', points: 0 }
                ]
            },
            {
                id: 19,
                text: 'Вы предпочитаете работу, связанную с общением и взаимодействием с людьми?',
                options: [
                    { text: 'Да, очень', type: 'S', points: 3 },
                    { text: 'Предпочитаю', type: 'S', points: 2 },
                    { text: 'Иногда', type: 'E', points: 1 },
                    { text: 'Нет, предпочитаю работу с предметами', type: 'R', points: 0 }
                ]
            },
            {
                id: 20,
                text: 'Вам нравится работать в команде и сотрудничать с другими?',
                options: [
                    { text: 'Очень нравится', type: 'S', points: 3 },
                    { text: 'Нравится', type: 'S', points: 2 },
                    { text: 'Иногда', type: 'I', points: 1 },
                    { text: 'Предпочитаю работать один', type: 'I', points: 0 }
                ]
            },
            
            // Предпринимательский тип (E)
            {
                id: 21,
                text: 'Вам нравится руководить людьми и организовывать работу?',
                options: [
                    { text: 'Обожаю', type: 'E', points: 3 },
                    { text: 'Нравится', type: 'E', points: 2 },
                    { text: 'Иногда', type: 'S', points: 1 },
                    { text: 'Не нравится', type: 'I', points: 0 }
                ]
            },
            {
                id: 22,
                text: 'Вы часто выступаете с идеями и убеждаете других в своей правоте?',
                options: [
                    { text: 'Постоянно', type: 'E', points: 3 },
                    { text: 'Часто', type: 'E', points: 2 },
                    { text: 'Иногда', type: 'A', points: 1 },
                    { text: 'Редко', type: 'C', points: 0 }
                ]
            },
            {
                id: 23,
                text: 'Вам нравятся рискованные проекты и новые вызовы?',
                options: [
                    { text: 'Очень нравятся', type: 'E', points: 3 },
                    { text: 'Нравятся', type: 'E', points: 2 },
                    { text: 'Иногда', type: 'R', points: 1 },
                    { text: 'Не нравятся', type: 'C', points: 0 }
                ]
            },
            {
                id: 24,
                text: 'Вы стремитесь к успеху, признанию и высокому положению?',
                options: [
                    { text: 'Да, очень', type: 'E', points: 3 },
                    { text: 'Стремлюсь', type: 'E', points: 2 },
                    { text: 'Иногда', type: 'S', points: 1 },
                    { text: 'Не стремлюсь', type: 'I', points: 0 }
                ]
            },
            {
                id: 25,
                text: 'Вам нравится продавать, вести переговоры или управлять проектами?',
                options: [
                    { text: 'Очень нравится', type: 'E', points: 3 },
                    { text: 'Нравится', type: 'E', points: 2 },
                    { text: 'Иногда', type: 'A', points: 1 },
                    { text: 'Не нравится', type: 'C', points: 0 }
                ]
            },
            
            // Конвенциональный тип (C)
            {
                id: 26,
                text: 'Вам нравится работать с цифрами, документами и финансовыми отчетами?',
                options: [
                    { text: 'Очень нравится', type: 'C', points: 3 },
                    { text: 'Нравится', type: 'C', points: 2 },
                    { text: 'Иногда', type: 'I', points: 1 },
                    { text: 'Не нравится', type: 'A', points: 0 }
                ]
            },
            {
                id: 27,
                text: 'Вы внимательны к деталям и точны в работе?',
                options: [
                    { text: 'Очень внимателен', type: 'C', points: 3 },
                    { text: 'Внимателен', type: 'C', points: 2 },
                    { text: 'Иногда', type: 'S', points: 1 },
                    { text: 'Не очень', type: 'E', points: 0 }
                ]
            },
            {
                id: 28,
                text: 'Вам нравится систематизировать информацию и наводить порядок?',
                options: [
                    { text: 'Обожаю', type: 'C', points: 3 },
                    { text: 'Нравится', type: 'C', points: 2 },
                    { text: 'Иногда', type: 'R', points: 1 },
                    { text: 'Не нравится', type: 'A', points: 0 }
                ]
            },
            {
                id: 29,
                text: 'Вы предпочитаете четкие инструкции и структурированную работу?',
                options: [
                    { text: 'Определенно', type: 'C', points: 3 },
                    { text: 'Предпочитаю', type: 'C', points: 2 },
                    { text: 'Иногда', type: 'I', points: 1 },
                    { text: 'Нет, предпочитаю свободу', type: 'A', points: 0 }
                ]
            },
            {
                id: 30,
                text: 'Вам нравится планировать, организовывать и контролировать процессы?',
                options: [
                    { text: 'Очень нравится', type: 'C', points: 3 },
                    { text: 'Нравится', type: 'C', points: 2 },
                    { text: 'Иногда', type: 'E', points: 1 },
                    { text: 'Не нравится', type: 'A', points: 0 }
                ]
            }
        ];
        
        if (elements.totalQuestionsSpan) {
            elements.totalQuestionsSpan.textContent = questions.length;
        }
        
        // Сброс результатов перед началом нового теста
        resetHollandScores();
        showQuestion(0);
    }
    
    // Сброс баллов по Холланду
    function resetHollandScores() {
        for (const type in hollandTypes) {
            hollandTypes[type].score = 0;
        }
    }
    
    // ==================== ОТОБРАЖЕНИЕ ВОПРОСОВ ====================
    
    // Показать вопрос
    function showQuestion(index) {
        console.log(`Показ вопроса ${index + 1} из ${questions.length}`);
        
        if (index < 0 || index >= questions.length) {
            console.error('Неверный индекс вопроса:', index);
            return;
        }

        const question = questions[index];
        currentQuestionIndex = index;
        
        // Обновляем номер вопроса
        if (elements.currentQuestionSpan) {
            elements.currentQuestionSpan.textContent = index + 1;
        }
        
        // Обновляем состояние кнопок
        updateNavigationButtons(index);
        
        // Создаем HTML для вопроса
        const questionHTML = createQuestionHTML(question, index);
        
        if (elements.questionContainer) {
            elements.questionContainer.innerHTML = questionHTML;
        }
        
        // Восстанавливаем выбранный вариант
        restoreSelectedOption(index);
        
        updateProgressBar();
        
        // Добавляем обработчики для вариантов ответов
        setupOptionListeners();
    }
    
    // Создание HTML для вопроса
    function createQuestionHTML(question, index) {
        return `
            <div class="question-container active">
                <div class="question-number">
                    <i class="fas fa-question-circle"></i>
                    Вопрос ${index + 1}/${questions.length}
                </div>
                <div class="question-text">${question.text}</div>
                <div class="options-container">
                    ${question.options.map((option, optIndex) => `
                        <label class="option-label ${answers[index] === optIndex ? 'selected' : ''}">
                            <input type="radio" name="question${question.id}" value="${optIndex}" 
                                   ${answers[index] === optIndex ? 'checked' : ''}>
                            <div class="option-content">
                                <div class="option-circle"></div>
                                <span class="option-text">${option.text}</span>
                            </div>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // Обновление кнопок навигации
    function updateNavigationButtons(index) {
        if (elements.nextQuestionBtn) {
            if (index === questions.length - 1) {
                elements.nextQuestionBtn.innerHTML = '<i class="fas fa-check"></i> Завершить тест';
            } else {
                elements.nextQuestionBtn.innerHTML = 'Далее <i class="fas fa-arrow-right"></i>';
            }
            elements.nextQuestionBtn.disabled = answers[index] === undefined;
        }
        
        if (elements.prevQuestionBtn) {
            elements.prevQuestionBtn.disabled = index === 0;
        }
    }
    
    // Восстановление выбранного варианта
    function restoreSelectedOption(index) {
        if (answers[index] !== undefined) {
            const selectedInput = document.querySelector(`input[name="question${questions[index].id}"][value="${answers[index]}"]`);
            if (selectedInput) {
                selectedInput.checked = true;
                const label = selectedInput.closest('.option-label');
                if (label) {
                    label.classList.add('selected');
                }
            }
        }
    }
    
    // Настройка обработчиков для вариантов ответов
    function setupOptionListeners() {
        document.querySelectorAll('.option-label').forEach(label => {
            label.addEventListener('click', function() {
                const radioInput = this.querySelector('input[type="radio"]');
                if (!radioInput) return;
                
                const optionIndex = parseInt(radioInput.value);
                console.log('Выбран вариант:', optionIndex);
                
                // Снимаем выделение со всех вариантов
                document.querySelectorAll('.option-label').forEach(l => {
                    l.classList.remove('selected');
                });
                
                // Выделяем выбранный вариант
                this.classList.add('selected');
                radioInput.checked = true;
                
                // Сохраняем ответ
                answers[currentQuestionIndex] = optionIndex;
                
                // Включаем кнопку "Далее"
                if (elements.nextQuestionBtn) {
                    elements.nextQuestionBtn.disabled = false;
                }
                
                // Анализируем ответ по Холланду
                analyzeAnswerHolland(currentQuestionIndex, optionIndex);
            });
        });
    }
    
    // Анализ ответа по системе Холланда
    function analyzeAnswerHolland(questionIndex, optionIndex) {
        const question = questions[questionIndex];
        const option = question.options[optionIndex];
        
        // Обновляем баллы для типов Холланда
        if (hollandTypes[option.type]) {
            hollandTypes[option.type].score += option.points;
        }
    }
    
    // ==================== НАВИГАЦИЯ ====================
    
    // Предыдущий вопрос
    if (elements.prevQuestionBtn) {
        elements.prevQuestionBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentQuestionIndex > 0) {
                showQuestion(currentQuestionIndex - 1);
            }
        });
    }
    
    // Следующий вопрос / Завершение теста
    if (elements.nextQuestionBtn) {
        elements.nextQuestionBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Кнопка "Далее/Завершить" нажата');
            
            // Проверяем, выбран ли ответ
            if (answers[currentQuestionIndex] === undefined) {
                alert('Пожалуйста, выберите вариант ответа');
                return;
            }
            
            // Проверяем, последний ли это вопрос
            if (currentQuestionIndex < questions.length - 1) {
                // Переходим к следующему вопросу
                showQuestion(currentQuestionIndex + 1);
            } else {
                // Завершаем тест
                console.log('Завершение теста');
                completeTest();
            }
        });
    }
    
    // ==================== ЗАВЕРШЕНИЕ ТЕСТА ====================
    
    // Завершение теста
    function completeTest() {
        console.log('Функция completeTest вызвана');
        
        // Проверяем элементы
        if (!elements.testQuestions || !elements.testResults) {
            console.error('Элементы для завершения теста не найдены');
            return;
        }
        
        // Переключаем видимость
        elements.testQuestions.style.display = 'none';
        elements.testResults.style.display = 'block';
        
        // Рассчитываем результаты по Холланду
        calculateHollandResults();
    }
    
    // Расчет результатов по Холланду
    function calculateHollandResults() {
        console.log('Расчет результатов по системе Холланда');
        
        // Создаем массив результатов
        const results = [];
        let totalScore = 0;
        
        // Рассчитываем общий балл
        for (const type in hollandTypes) {
            totalScore += hollandTypes[type].score;
        }
        
        // Рассчитываем проценты для каждого типа
        for (const type in hollandTypes) {
            const percentage = totalScore > 0 
                ? Math.round((hollandTypes[type].score / totalScore) * 100) 
                : 0;
            
            results.push({
                code: type,
                name: hollandTypes[type].name,
                score: hollandTypes[type].score,
                percentage: percentage,
                description: hollandTypes[type].description
            });
        }
        
        // Сортируем по убыванию процентов
        results.sort((a, b) => b.percentage - a.percentage);
        
        // Определяем доминирующий тип (первые 3)
        const dominantTypes = results.slice(0, 3);
        const hollandCode = dominantTypes.map(r => r.code).join('');
        
        console.log('Код Холланда:', hollandCode);
        console.log('Доминирующие типы:', dominantTypes);
        
        // Показываем типы профессий
        if (elements.professionTypesDiv) {
            elements.professionTypesDiv.innerHTML = dominantTypes.map(type => `
                <div class="profession-type">
                    <strong>${type.code}</strong>: ${type.name} (${type.percentage}%)
                </div>
            `).join('');
        }
        
        // Показываем все категории в деталях
        if (elements.resultCategoriesDiv) {
            elements.resultCategoriesDiv.innerHTML = results.map(type => `
                <div class="result-category">
                    <div class="percentage">${type.percentage}%</div>
                    <div class="label">${type.name} (${type.code})</div>
                </div>
            `).join('');
        }
        
        // Получаем рекомендованные профессии по коду Холланда
        const recommendedProfessions = getRecommendedProfessionsByHolland(hollandCode, dominantTypes);
        
        console.log('Рекомендованные профессии:', recommendedProfessions);
        
        // Показываем рекомендованные профессии
        if (elements.recommendedProfessionsDiv) {
            if (recommendedProfessions && recommendedProfessions.length > 0) {
                elements.recommendedProfessionsDiv.innerHTML = recommendedProfessions.map(prof => `
                    <div class="result-profession" onclick="showHollandProfessionDetails('${prof.name}', ${prof.match})">
                        <div>
                            <h4>${prof.name}</h4>
                            <p>${prof.description || ''}</p>
                            <p><small>Код Холланда: <strong>${prof.hollandCode}</strong></small></p>
                            ${prof.universities && prof.universities.length > 0 ? 
                                `<p class="university-count"><i class="fas fa-university"></i> ${prof.universities.length} ВУЗ(а)</p>` : 
                                ''}
                            <div class="profession-tags">
                                ${prof.tags ? prof.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
                            </div>
                        </div>
                        <div class="profession-match" style="background: ${getMatchColor(prof.match)}">
                            ${prof.match}%
                        </div>
                    </div>
                `).join('');
            } else {
                elements.recommendedProfessionsDiv.innerHTML = '<p class="no-results">Не удалось загрузить рекомендации</p>';
            }
        }
        
        updateProgressBar(100);
    }
    
    // ==================== ПОДБОР ПРОФЕССИЙ ПО ХОЛЛАНДУ ====================
    
    // Получение рекомендованных профессий по коду Холланда
    function getRecommendedProfessionsByHolland(hollandCode, dominantTypes) {
        console.log('Подбор профессий по коду Холланда:', hollandCode);
        
        // Все профессии с кодами Холланда
        const professions = [
            {
                name: 'Инженер-механик',
                description: 'Проектирование, разработка и тестирование механических систем и оборудования.',
                hollandCode: 'RI',
                match: calculateHollandMatch('RI', hollandCode),
                universities: [
                    { name: 'МГТУ им. Баумана', city: 'Москва', rating: 4.7 },
                    { name: 'МАИ', city: 'Москва', rating: 4.5 },
                    { name: 'СПбПУ', city: 'Санкт-Петербург', rating: 4.6 }
                ],
                tags: ['Техника', 'Конструирование', 'Механика']
            },
            {
                name: 'Веб-разработчик',
                description: 'Создание и поддержка веб-сайтов и веб-приложений.',
                hollandCode: 'IR',
                match: calculateHollandMatch('IR', hollandCode),
                universities: [
                    { name: 'МГУ им. Ломоносова', city: 'Москва', rating: 4.8 },
                    { name: 'МФТИ', city: 'Москва', rating: 4.9 },
                    { name: 'ИТМО', city: 'Санкт-Петербург', rating: 4.8 }
                ],
                tags: ['IT', 'Программирование', 'Технологии']
            },
            {
                name: 'Аналитик данных',
                description: 'Анализ больших данных для принятия бизнес-решений.',
                hollandCode: 'IС',
                match: calculateHollandMatch('IС', hollandCode),
                universities: [
                    { name: 'НИУ ВШЭ', city: 'Москва', rating: 4.7 },
                    { name: 'МГУ им. Ломоносова', city: 'Москва', rating: 4.8 },
                    { name: 'МФТИ', city: 'Москва', rating: 4.9 }
                ],
                tags: ['Аналитика', 'Данные', 'Статистика']
            },
            {
                name: 'Графический дизайнер',
                description: 'Создание визуальных коммуникаций через графику, иллюстрации и дизайн.',
                hollandCode: 'AR',
                match: calculateHollandMatch('AR', hollandCode),
                universities: [
                    { name: 'МГХПА им. Строганова', city: 'Москва', rating: 4.5 },
                    { name: 'СПбГУ', city: 'Санкт-Петербург', rating: 4.6 },
                    { name: 'НИУ ВШЭ', city: 'Москва', rating: 4.7 }
                ],
                tags: ['Дизайн', 'Творчество', 'Искусство']
            },
            {
                name: 'Учитель/Преподаватель',
                description: 'Обучение и воспитание учащихся различных возрастных групп.',
                hollandCode: 'SA',
                match: calculateHollandMatch('SA', hollandCode),
                universities: [
                    { name: 'МПГУ', city: 'Москва', rating: 4.4 },
                    { name: 'РГПУ им. Герцена', city: 'Санкт-Петербург', rating: 4.3 },
                    { name: 'МГУ им. Ломоносова', city: 'Москва', rating: 4.8 }
                ],
                tags: ['Образование', 'Педагогика', 'Обучение']
            },
            {
                name: 'Маркетолог',
                description: 'Продвижение товаров и услуг на рынке.',
                hollandCode: 'ES',
                match: calculateHollandMatch('ES', hollandCode),
                universities: [
                    { name: 'РАНХиГС', city: 'Москва', rating: 4.5 },
                    { name: 'РЭУ им. Плеханова', city: 'Москва', rating: 4.4 },
                    { name: 'НИУ ВШЭ', city: 'Москва', rating: 4.7 }
                ],
                tags: ['Маркетинг', 'Реклама', 'Продажи']
            },
            {
                name: 'Менеджер проектов',
                description: 'Управление проектами и командами.',
                hollandCode: 'EC',
                match: calculateHollandMatch('EC', hollandCode),
                universities: [
                    { name: 'РАНХиГС', city: 'Москва', rating: 4.5 },
                    { name: 'МГУ им. Ломоносова', city: 'Москва', rating: 4.8 },
                    { name: 'НИУ ВШЭ', city: 'Москва', rating: 4.7 }
                ],
                tags: ['Управление', 'Проекты', 'Лидерство']
            },
            {
                name: 'Бухгалтер',
                description: 'Ведение финансового учета и отчетности организации.',
                hollandCode: 'CЕ',
                match: calculateHollandMatch('CЕ', hollandCode),
                universities: [
                    { name: 'Финансовый университет', city: 'Москва', rating: 4.5 },
                    { name: 'РЭУ им. Плеханова', city: 'Москва', rating: 4.4 },
                    { name: 'НИУ ВШЭ', city: 'Москва', rating: 4.7 }
                ],
                tags: ['Финансы', 'Учет', 'Аналитика']
            },
            {
                name: 'Врач',
                description: 'Диагностика и лечение заболеваний.',
                hollandCode: 'IS',
                match: calculateHollandMatch('IS', hollandCode),
                universities: [
                    { name: 'Первый МГМУ им. Сеченова', city: 'Москва', rating: 4.7 },
                    { name: 'РНИМУ им. Пирогова', city: 'Москва', rating: 4.6 },
                    { name: 'СПбГПМУ', city: 'Санкт-Петербург', rating: 4.5 }
                ],
                tags: ['Медицина', 'Здравоохранение', 'Наука']
            },
            {
                name: 'Юрист',
                description: 'Оказание юридической помощи и защита прав.',
                hollandCode: 'EC',
                match: calculateHollandMatch('EC', hollandCode),
                universities: [
                    { name: 'МГУ им. Ломоносова', city: 'Москва', rating: 4.8 },
                    { name: 'МГЮА', city: 'Москва', rating: 4.6 },
                    { name: 'СПбГУ', city: 'Санкт-Петербург', rating: 4.6 }
                ],
                tags: ['Право', 'Закон', 'Защита']
            },
            {
                name: 'Архитектор',
                description: 'Проектирование зданий и городской среды.',
                hollandCode: 'AR',
                match: calculateHollandMatch('AR', hollandCode),
                universities: [
                    { name: 'МАРХИ', city: 'Москва', rating: 4.7 },
                    { name: 'СПбГАСУ', city: 'Санкт-Петербург', rating: 4.5 },
                    { name: 'МГСУ', city: 'Москва', rating: 4.4 }
                ],
                tags: ['Архитектура', 'Дизайн', 'Строительство']
            },
            {
                name: 'Психолог',
                description: 'Изучение психики человека и оказание психологической помощи.',
                hollandCode: 'SI',
                match: calculateHollandMatch('SI', hollandCode),
                universities: [
                    { name: 'МГУ им. Ломоносова', city: 'Москва', rating: 4.8 },
                    { name: 'НИУ ВШЭ', city: 'Москва', rating: 4.7 },
                    { name: 'СПбГУ', city: 'Санкт-Петербург', rating: 4.6 }
                ],
                tags: ['Психология', 'Консультирование', 'Помощь']
            }
        ];
        
        // Сортируем по совпадению с кодом Холланда
        return professions
            .sort((a, b) => b.match - a.match)
            .slice(0, 8);
    }
    
    // Расчет совпадения профессии по Холланду
    function calculateHollandMatch(profCode, userCode) {
        let matchScore = 0;
        const maxScore = 100;
        
        // Проверяем совпадение каждой буквы в коде
        for (let i = 0; i < Math.min(profCode.length, userCode.length); i++) {
            if (profCode[i] === userCode[i]) {
                matchScore += 40; // Полное совпадение на позиции
            } else if (userCode.includes(profCode[i])) {
                matchScore += 20; // Тип есть в коде, но на другой позиции
            }
        }
        
        // Бонус за длину кода
        if (profCode.length === userCode.length) {
            matchScore += 10;
        }
        
        return Math.min(matchScore, maxScore);
    }
    
    // Цвет для процента совпадения
    function getMatchColor(match) {
        if (match >= 80) return '#10b981'; // Зеленый
        if (match >= 60) return '#3b82f6'; // Синий
        if (match >= 40) return '#f59e0b'; // Желтый
        return '#ef4444'; // Красный
    }
    
    // ==================== СОХРАНЕНИЕ РЕЗУЛЬТАТОВ ====================
    
    // Сохранение результатов
    if (elements.saveResultsBtn) {
        elements.saveResultsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Получаем результаты по Холланду
            const hollandResults = [];
            for (const type in hollandTypes) {
                hollandResults.push({
                    code: type,
                    name: hollandTypes[type].name,
                    score: hollandTypes[type].score
                });
            }
            
            // Сортируем результаты
            hollandResults.sort((a, b) => b.score - a.score);
            
            // Сохраняем в localStorage
            const testResult = {
                date: new Date().toLocaleString(),
                hollandCode: hollandResults.slice(0, 3).map(r => r.code).join(''),
                hollandResults: hollandResults,
                answers: answers,
                testType: 'Холланд (RIASEC)',
                questionCount: questions.length
            };
            
            localStorage.setItem('profTestResult_Holland', JSON.stringify(testResult));
            
            // Обновляем кнопку
            this.innerHTML = '<i class="fas fa-check"></i> Результаты сохранены';
            this.disabled = true;
            
            // Показываем уведомление
            showNotification('Результаты теста сохранены! Вы можете вернуться к ним позже.', 'success');
        });
    }
    
    // ==================== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ====================
    
    // Обновление прогресс-бара
    function updateProgressBar(forceValue = null) {
        const progress = forceValue !== null ? forceValue : ((currentQuestionIndex + 1) / questions.length) * 100;
        if (elements.progressBar) {
            elements.progressBar.style.width = `${progress}%`;
        }
    }
    
    // Глобальная функция для показа деталей профессии по Холланду
    window.showHollandProfessionDetails = function(professionName, match) {
        console.log('Показать детали профессии:', professionName);
        
        // Находим профессию в списке
        const professions = getRecommendedProfessionsByHolland('', []);
        const profession = professions.find(p => p.name === professionName);
        
        if (!profession) return;
        
        const modalHTML = `
            <div id="hollandResultModal" class="modal" style="display: flex;">
                <div class="modal-content">
                    <span class="close-modal" onclick="document.getElementById('hollandResultModal').style.display='none'">&times;</span>
                    <div class="modal-body">
                        <div class="modal-profession-header">
                            <h2>${profession.name}</h2>
                            <div class="match-badge" style="background: ${getMatchColor(match)}">
                                Совпадение: ${match}%
                            </div>
                        </div>
                        
                        <div class="modal-section">
                            <h3><i class="fas fa-info-circle"></i> Описание профессии</h3>
                            <p>${profession.description}</p>
                            <p><strong>Код Холланда:</strong> ${profession.hollandCode}</p>
                        </div>
                        
                        <div class="modal-section">
                            <h3><i class="fas fa-graduation-cap"></i> Подходящие ВУЗы</h3>
                            <div class="universities-grid">
                                ${profession.universities.map(uni => `
                                    <div class="university-card-modal">
                                        <h4>${uni.name}</h4>
                                        <p class="location"><i class="fas fa-map-marker-alt"></i> ${uni.city}</p>
                                        <p class="rating"><i class="fas fa-star"></i> Рейтинг: ${uni.rating}/5.0</p>
                                        <a href="#" class="website-link" onclick="window.open('https://www.google.com/search?q=${encodeURIComponent(uni.name)}', '_blank')">
                                            <i class="fas fa-external-link-alt"></i> Подробнее
                                        </a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="modal-section">
                            <h3><i class="fas fa-tags"></i> Направления</h3>
                            <div class="skills-container">
                                ${profession.tags.map(tag => `<div class="skill-tag">${tag}</div>`).join('')}
                            </div>
                        </div>
                        
                        <button class="btn-primary" onclick="document.getElementById('hollandResultModal').style.display='none'" style="margin-top: 30px;">
                            <i class="fas fa-times"></i> Закрыть
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Добавляем модальное окно на страницу
        const existingModal = document.getElementById('hollandResultModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    };
    
    // Показать уведомление
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${type === 'success' ? '#10b981' : '#3b82f6'};
                color: white;
                padding: 15px 25px;
                border-radius: 8px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                z-index: 9999;
                display: flex;
                align-items: center;
                gap: 10px;
            ">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
                ${message}
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
    
    // ==================== ИНИЦИАЛИЗАЦИЯ СТРАНИЦЫ ====================
    
    // Автоматически показываем интро на странице теста
    if (window.location.pathname.includes('test.html')) {
        if (elements.testIntro) {
            elements.testIntro.style.display = 'block';
        }
        if (elements.testQuestions) {
            elements.testQuestions.style.display = 'none';
        }
        if (elements.testResults) {
            elements.testResults.style.display = 'none';
        }
    }
    
    console.log('Тест по системе Холланда инициализирован');
});