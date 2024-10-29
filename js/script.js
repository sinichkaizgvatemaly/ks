const menuItems = document.querySelectorAll('.header-menu-items a');

// Функция для установки активной ссылки
function setActiveLink() {
    const currentUrl = window.location.pathname;
    menuItems.forEach(item => {
        // Проверяем, что href не равно '#' и соответствует текущему URL
        if (item.getAttribute('href') !== '#' && currentUrl === new URL(item.href).pathname) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Вызов функции для установки активной ссылки
setActiveLink();

// Получаем модальное окно
var modal = document.getElementById("myModal");

// Получаем кнопку, которая открывает модальное окно
var btn = document.getElementById("openModal");

// Получаем элемент <span>, который закрывает модальное окно
var span = document.getElementsByClassName("close")[0];

// Добавляем обработчик клика для кнопки открытия модального окна
btn.onclick = function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    modal.style.display = "block"; // Показываем модальное окно
}

// Добавляем обработчик клика для закрытия модального окна
span.onclick = function() {
    modal.style.display = "none";
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Обработчик клика для элементов меню
menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
        // Удаляем класс active у всех
        menuItems.forEach(link => link.classList.remove('active'));
        // Добавляем класс active к текущему элементу
        this.classList.add('active');

        // Переход по текущей ссылке
        if (this.getAttribute('href') !== '#') {
            window.location.href = this.href;
        }
    });
});
