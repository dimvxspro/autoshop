// src/counter.js
export function counterUp(element, end, duration) {
    var start = 0;
    var range = end - start;
    var current = start;
    var stepTime;

    // Устанавливаем шаг в зависимости от величины числа
    var increment = end > start ? 1 : -1;
    if (Math.abs(range) > 1000) {
        increment *= Math.ceil(Math.abs(range) / 1000); // Увеличиваем шаг, если число больше 1000
    }

    stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function () {
        current += increment;
        element.textContent = current;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            clearInterval(timer);
            element.textContent = end; // Устанавливаем конечное значение точно, чтобы избежать погрешности
        }
    }, stepTime);
}

// Функция для запуска счетчика при попадании в область видимости
export function startCounterWhenVisible(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            var element = entry.target;
            var end = parseInt(element.textContent); // Получаем конечное значение из текста элемента
            var duration = parseInt(element.getAttribute("data-duration")) || 2000; // Длительность по умолчанию 2000 мс
            counterUp(element, end, duration);
            observer.unobserve(element); // Отключаем наблюдение после того, как счетчик запущен
        }
    });
}
