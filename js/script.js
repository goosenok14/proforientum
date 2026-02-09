// js/script.js - Основной скрипт сайта
document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт загружен');
    
    // Элементы DOM
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    const professionSearch = document.getElementById('professionSearch');
    const categoryFilter = document.getElementById('categoryFilter');
    const demandFilter = document.getElementById('demandFilter');
    const applyFilters = document.getElementById('applyFilters');
    const resetFilters = document.getElementById('resetFilters');
    const modal = document.getElementById('professionModal');
    const closeModal = document.querySelector('.close-modal');
    const modalContent = document.getElementById('modalContent');
    
    // Все данные
    const allProfessions = [
        {
            id: 1,
            name: 'Веб-разработчик',
            description: 'Создание и поддержка веб-сайтов и веб-приложений. Работа включает фронтенд и бэкенд разработку.',
            skills: 'HTML, CSS, JavaScript, PHP, React, Node.js, Git',
            salary_range: '80-200 тыс. руб.',
            demand_level: 'высокий',
            category: 'IT',
            match: 85
        },
        {
            id: 2,
            name: 'Аналитик данных',
            description: 'Анализ больших данных для принятия бизнес-решений. Построение моделей и прогнозов.',
            skills: 'SQL, Python, Excel, статистика, Tableau, Power BI',
            salary_range: '90-180 тыс. руб.',
            demand_level: 'высокий',
            category: 'Аналитика',
            match: 78
        },
        {
            id: 3,
            name: 'Маркетолог',
            description: 'Продвижение товаров и услуг на рынке. Разработка маркетинговых стратегий.',
            skills: 'Аналитика, SMM, копирайтинг, SEO, Google Analytics',
            salary_range: '60-150 тыс. руб.',
            demand_level: 'средний',
            category: 'Маркетинг',
            match: 72
        },
        {
            id: 4,
            name: 'Инженер-программист',
            description: 'Разработка программного обеспечения для различных платформ и устройств.',
            skills: 'C++, Java, Python, алгоритмы, ООП, базы данных',
            salary_range: '100-250 тыс. руб.',
            demand_level: 'высокий',
            category: 'IT',
            match: 88
        },
        {
            id: 5,
            name: 'Дизайнер UX/UI',
            description: 'Проектирование пользовательских интерфейсов и улучшение пользовательского опыта.',
            skills: 'Figma, Adobe XD, пользовательские исследования, прототипирование',
            salary_range: '70-160 тыс. руб.',
            demand_level: 'высокий',
            category: 'Дизайн',
            match: 75
        },
        {
            id: 6,
            name: 'Менеджер проектов',
            description: 'Управление проектами и командами. Планирование, контроль и координация работ.',
            skills: 'Управление, коммуникация, планирование, Agile, Scrum',
            salary_range: '80-180 тыс. руб.',
            demand_level: 'средний',
            category: 'Менеджмент',
            match: 68
        },
        {
            id: 7,
            name: 'Врач',
            description: 'Диагностика и лечение заболеваний. Работа в медицинских учреждениях.',
            skills: 'Медицина, диагностика, коммуникация, эмпатия',
            salary_range: '70-200 тыс. руб.',
            demand_level: 'высокий',
            category: 'Медицина',
            match: 65
        },
        {
            id: 8,
            name: 'Учитель',
            description: 'Обучение и воспитание учащихся. Разработка учебных программ.',
            skills: 'Педагогика, психология, коммуникация, методика преподавания',
            salary_range: '40-100 тыс. руб.',
            demand_level: 'средний',
            category: 'Образование',
            match: 70
        },
        {
            id: 9,
            name: 'Юрист',
            description: 'Оказание юридической помощи. Составление документов и представительство в суде.',
            skills: 'Право, анализ, переговоры, документация',
            salary_range: '60-180 тыс. руб.',
            demand_level: 'средний',
            category: 'Право',
            match: 73
        },
        {
            id: 10,
            name: 'Инженер-строитель',
            description: 'Проектирование и строительство объектов. Контроль качества работ.',
            skills: 'Черчение, математика, строительные материалы, AutoCAD',
            salary_range: '70-160 тыс. руб.',
            demand_level: 'средний',
            category: 'Строительство',
            match: 67
        },
        {
            id: 11,
            name: 'Финансовый аналитик',
            description: 'Анализ финансовых рынков и инвестиций. Разработка инвестиционных стратегий.',
            skills: 'Финансы, Excel, аналитика, Bloomberg, математика',
            salary_range: '80-200 тыс. руб.',
            demand_level: 'высокий',
            category: 'Финансы',
            match: 80
        },
        {
            id: 12,
            name: 'Психолог',
            description: 'Психологическая помощь и консультирование. Проведение тренингов.',
            skills: 'Психология, эмпатия, коммуникация, диагностика',
            salary_range: '50-120 тыс. руб.',
            demand_level: 'средний',
            category: 'Психология',
            match: 71
        }
    ];
    
    const allJobs = [
        {
            id: 1,
            title: 'Frontend разработчик',
            company: 'Яндекс',
            description: 'Разработка пользовательских интерфейсов для веб-приложений. Работа в команде над крупными проектами.',
            salary_min: 120000,
            salary_max: 220000,
            experience: '2-5 лет',
            location: 'Москва'
        },
        {
            id: 2,
            title: 'Data Analyst',
            company: 'Сбер',
            description: 'Анализ финансовых данных и создание отчетов. Построение прогнозных моделей.',
            salary_min: 130000,
            salary_max: 200000,
            experience: '1-3 года',
            location: 'Москва'
        },
        {
            id: 3,
            title: 'Digital маркетолог',
            company: 'Ozon',
            description: 'Продвижение товаров в digital-среде. Управление рекламными кампаниями.',
            salary_min: 80000,
            salary_max: 140000,
            experience: '2-4 года',
            location: 'Санкт-Петербург'
        },
        {
            id: 4,
            title: 'Backend разработчик',
            company: 'ВКонтакте',
            description: 'Разработка серверной части приложений. Оптимизация производительности.',
            salary_min: 140000,
            salary_max: 240000,
            experience: '3+ года',
            location: 'Москва'
        },
        {
            id: 5,
            title: 'UI/UX дизайнер',
            company: 'Сбер',
            description: 'Проектирование интерфейсов для мобильных приложений. Проведение user research.',
            salary_min: 90000,
            salary_max: 160000,
            experience: '2+ года',
            location: 'Москва'
        }
    ];
    
    const allUniversities = [
        {
            name: 'МГУ им. Ломоносова',
            city: 'Москва',
            description: 'Ведущий университет России, основанный в 1755 году. Один из старейших и наиболее престижных вузов страны.',
            programs: 'Фундаментальная информатика, Прикладная математика, Физика, Химия, Биология, Экономика',
            rating: 4.8,
            website: 'https://www.msu.ru'
        },
        {
            name: 'МФТИ',
            city: 'Москва',
            description: 'Технический университет мирового уровня. Известен сильной подготовкой в области физики и математики.',
            programs: 'Прикладная математика и физика, Компьютерные науки, Радиотехника, Биофизика',
            rating: 4.9,
            website: 'https://mipt.ru'
        },
        {
            name: 'НИУ ВШЭ',
            city: 'Москва',
            description: 'Исследовательский университет в сфере социальных наук. Лидер в экономическом и гуманитарном образовании.',
            programs: 'Бизнес-информатика, Маркетинг, Экономика, Социология, Право, Психология',
            rating: 4.7,
            website: 'https://www.hse.ru'
        },
        {
            name: 'СПбГУ',
            city: 'Санкт-Петербург',
            description: 'Один из старейших университетов России. Имеет богатую историю и традиции.',
            programs: 'Программная инженерия, Менеджмент, Филология, История, Юриспруденция',
            rating: 4.6,
            website: 'https://spbu.ru'
        },
        {
            name: 'ИТМО',
            city: 'Санкт-Петербург',
            description: 'Университет информационных технологий, механики и оптики. Лидер в IT-образовании.',
            programs: 'Информационные системы, Кибербезопасность, Оптотехника, Робототехника',
            rating: 4.8,
            website: 'https://itmo.ru'
        },
        {
            name: 'МГТУ им. Баумана',
            city: 'Москва',
            description: 'Ведущий технический университет России. Готовит инженеров высшей квалификации.',
            programs: 'Машиностроение, Робототехника, Космическая техника, Ядерная физика',
            rating: 4.7,
            website: 'https://bmstu.ru'
        }
    ];
    
    // Текущие отфильтрованные данные
    let currentProfessions = [...allProfessions];
    let currentJobs = [...allJobs];
    let currentUniversities = [...allUniversities];
    
    // Инициализация
    console.log('Начало инициализации...');
    displayProfessions(currentProfessions);
    displayJobs(currentJobs);
    displayUniversities(currentUniversities);
    updateResultsCounter(currentProfessions.length);
    
    // Навигация по разделам
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') && this.getAttribute('href') !== '#') {
                return; // Это ссылка на другую страницу
            }
            
            e.preventDefault();
            const sectionId = this.dataset.section + 'Section';
            
            // Обновление активной навигации
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Показ активной секции
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === sectionId) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Поиск по профессиям
    if (professionSearch) {
        professionSearch.addEventListener('input', debounce(function(e) {
            filterAndDisplayProfessions();
        }, 300));
    }

    // Применение фильтров
    if (applyFilters) {
        applyFilters.addEventListener('click', function() {
            filterAndDisplayProfessions();
        });
    }

    // Сброс фильтров
    if (resetFilters) {
        resetFilters.addEventListener('click', function() {
            if (professionSearch) professionSearch.value = '';
            if (categoryFilter) categoryFilter.value = '';
            if (demandFilter) demandFilter.value = '';
            currentProfessions = [...allProfessions];
            displayProfessions(currentProfessions);
            updateResultsCounter(currentProfessions.length);
        });
    }

    // Модальное окно
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            if (modal) modal.style.display = 'none';
        });
    }

    if (modal) {
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Функция фильтрации и отображения профессий
    function filterAndDisplayProfessions() {
        const searchQuery = professionSearch ? professionSearch.value.toLowerCase() : '';
        const category = categoryFilter ? categoryFilter.value : '';
        const demand = demandFilter ? demandFilter.value : '';
        
        currentProfessions = allProfessions.filter(profession => {
            // Поиск по тексту
            const matchesSearch = !searchQuery || 
                profession.name.toLowerCase().includes(searchQuery) ||
                profession.description.toLowerCase().includes(searchQuery) ||
                profession.skills.toLowerCase().includes(searchQuery);
            
            // Фильтр по категории
            const matchesCategory = !category || profession.category === category;
            
            // Фильтр по востребованности
            const matchesDemand = !demand || profession.demand_level === demand;
            
            return matchesSearch && matchesCategory && matchesDemand;
        });
        
        displayProfessions(currentProfessions);
        updateResultsCounter(currentProfessions.length);
    }

    // Отображение профессий
    function displayProfessions(professions) {
        const container = document.getElementById('professionsContainer');
        if (!container) {
            console.error('Контейнер professionsContainer не найден!');
            return;
        }
        
        container.innerHTML = '';

        if (!professions || professions.length === 0) {
            container.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px; color: #94a3b8;"></i>
                    <h3>Профессии не найдены</h3>
                    <p>Попробуйте изменить параметры поиска или фильтрации</p>
                </div>
            `;
            return;
        }

        professions.forEach((profession, index) => {
            const card = document.createElement('div');
            card.className = 'profession-card';
            card.innerHTML = `
                <div class="profession-header">
                    <div class="category">${profession.category || 'IT'}</div>
                    <h3>${profession.name}</h3>
                </div>
                <div class="profession-body">
                    <p class="description">${profession.description.substring(0, 100)}...</p>
                    <p class="salary">${profession.salary_range}</p>
                    <div class="demand ${profession.demand_level}">
                        <i class="fas fa-chart-line"></i>
                        ${getDemandText(profession.demand_level)}
                    </div>
                    <div class="skills">
                        ${profession.skills.split(',').slice(0, 3).map(skill => 
                            `<span>${skill.trim()}</span>`
                        ).join('')}
                    </div>
                </div>
            `;

            card.addEventListener('click', () => {
                showProfessionDetails(profession);
            });
            container.appendChild(card);
        });
        
        console.log(`Отображено ${professions.length} профессий`);
    }

    // Обновление счетчика результатов
    function updateResultsCounter(count) {
        let counter = document.getElementById('resultsCounter');
        if (!counter) {
            // Создаем элемент счетчика если его нет
            const container = document.querySelector('.profession-search-container');
            if (container) {
                counter = document.createElement('div');
                counter.id = 'resultsCounter';
                counter.className = 'results-counter';
                container.appendChild(counter);
            }
        }
        
        if (counter) {
            counter.innerHTML = `Найдено профессий: <span>${count}</span>`;
        }
    }

    // Отображение вакансий
    function displayJobs(jobs) {
        const container = document.getElementById('jobsContainer');
        if (!container) return;
        
        container.innerHTML = '';

        if (!jobs || jobs.length === 0) {
            container.innerHTML = '<p class="no-results">Вакансии не найдены</p>';
            return;
        }

        jobs.forEach(job => {
            const card = document.createElement('div');
            card.className = 'job-card';
            card.innerHTML = `
                <div class="job-header">
                    <div>
                        <h3 class="job-title">${job.title}</h3>
                        <p class="company">${job.company}</p>
                    </div>
                    <div class="job-salary">
                        ${formatSalary(job.salary_min)} - ${formatSalary(job.salary_max)} руб.
                    </div>
                </div>
                <p class="job-description">${job.description.substring(0, 150)}...</p>
                <div class="job-details">
                    <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                    <span><i class="fas fa-briefcase"></i> ${job.experience}</span>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Отображение университетов
    function displayUniversities(universities) {
        const container = document.getElementById('universitiesContainer');
        if (!container) return;
        
        container.innerHTML = '';

        if (!universities || universities.length === 0) {
            container.innerHTML = '<p class="no-results">Университеты не найдены</p>';
            return;
        }

        universities.forEach(university => {
            const card = document.createElement('div');
            card.className = 'university-card';
            card.innerHTML = `
                <div class="university-header">
                    <h3>${university.name}</h3>
                    <div class="location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${university.city}
                    </div>
                </div>
                <div class="university-body">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span class="rating-value">${university.rating}</span>
                        <span>/5.0</span>
                    </div>
                    <p class="description">${university.description.substring(0, 120)}...</p>
                    <div class="programs">
                        <strong>Программы:</strong> ${university.programs.substring(0, 100)}...
                    </div>
                    <a href="${university.website}" target="_blank" class="website-link">
                        <i class="fas fa-external-link-alt"></i> Сайт университета
                    </a>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Показ деталей профессии в модальном окне
    function showProfessionDetails(profession) {
        console.log('Показ деталей профессии:', profession.name);
        
        modalContent.innerHTML = `
            <div class="modal-body">
                <div class="modal-profession">
                    <h2>${profession.name}</h2>
                    
                    <div class="modal-section">
                        <h3>Описание</h3>
                        <p>${profession.description}</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Требуемые навыки</h3>
                        <div class="skills">
                            ${profession.skills.split(',').map(skill => 
                                `<span>${skill.trim()}</span>`
                            ).join('')}
                        </div>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Зарплата и востребованность</h3>
                        <p>Зарплата: <strong>${profession.salary_range}</strong></p>
                        <p>Востребованность: <span class="demand ${profession.demand_level}">${getDemandText(profession.demand_level)}</span></p>
                        ${profession.match ? `<p>Совпадение с вашим профилем: <strong>${profession.match}%</strong></p>` : ''}
                    </div>
                    
                    <div class="modal-section">
                        <h3>Рекомендуемые ВУЗы</h3>
                        <div class="university-list">
                            <div class="university-item">
                                <h4>МГУ им. Ломоносова</h4>
                                <p><i class="fas fa-map-marker-alt"></i> Москва</p>
                                <p><i class="fas fa-star"></i> Рейтинг: 4.8/5.0</p>
                                <p><strong>Программы:</strong> Фундаментальная информатика, Прикладная математика</p>
                                <a href="https://www.msu.ru" target="_blank" class="website-link">
                                    <i class="fas fa-external-link-alt"></i> Перейти на сайт
                                </a>
                            </div>
                            <div class="university-item">
                                <h4>МФТИ</h4>
                                <p><i class="fas fa-map-marker-alt"></i> Москва</p>
                                <p><i class="fas fa-star"></i> Рейтинг: 4.9/5.0</p>
                                <p><strong>Программы:</strong> Прикладная математика и физика, Компьютерные науки</p>
                                <a href="https://mipt.ru" target="_blank" class="website-link">
                                    <i class="fas fa-external-link-alt"></i> Перейти на сайт
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        modal.style.display = 'flex';
    }

    // Вспомогательные функции
    function getDemandText(level) {
        const levels = {
            'высокий': 'Высокий спрос',
            'средний': 'Средний спрос',
            'низкий': 'Низкий спрос'
        };
        return levels[level] || 'Спрос не указан';
    }

    function formatSalary(salary) {
        if (!salary) return '0';
        return salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    console.log('Инициализация завершена');

    // Функция для кнопки "Исследовать профессии"
    function exploreProfessions() {
        const professionsTab = document.getElementById('professionsTab');
        const universitiesTab = document.getElementById('universitiesTab');
        const sections = document.querySelectorAll('.content-section');
        
        if (professionsTab && universitiesTab) {
            // Активируем вкладку Профессии
            professionsTab.classList.add('active');
            universitiesTab.classList.remove('active');
            
            // Показываем секцию Профессии
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === 'professionsSection') {
                    section.classList.add('active');
                }
            });
            
            // Плавная прокрутка
            const professionsSection = document.getElementById('professionsSection');
            if (professionsSection) {
                professionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }

    // Добавьте обработчик для кнопки если она есть на странице
    document.addEventListener('DOMContentLoaded', function() {
        const exploreBtn = document.getElementById('exploreProfessionsBtn');
        if (exploreBtn) {
            exploreBtn.addEventListener('click', function(e) {
                e.preventDefault();
                exploreProfessions();
            });
        }
    });
});