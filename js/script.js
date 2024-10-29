const menuItems = document.querySelectorAll('.header-menu-items a');

function setActiveLink() {
    const currentUrl = window.location.pathname;
    menuItems.forEach(item => {
        // Проверяем, что href не равно '#'
        if (item.getAttribute('href') !== '#' && currentUrl === new URL(item.href).pathname) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

setActiveLink();

menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
        // Удаляем класс active у всех
        menuItems.forEach(link => link.classList.remove('active'));
        // Добавляем класс active к текущему элементу
        this.classList.add('active');

        // Переход по текущей ссылке
        window.location.href = this.href;
    });
});