// Получаем элементы меню
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
let modal = document.getElementById("myModal");

// Получаем кнопку, которая открывает модальное окно
let btn = document.getElementById("openModal");

// Получаем элемент <span>, который закрывает модальное окно
let span = document.getElementsByClassName("close")[0];

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


document.getElementById('orderForm').addEventListener('submit', function(event) {
	event.preventDefault();

	// Собираем данные формы
	const formData = new FormData(this);

	// Отправляем данные с помощью fetch
	fetch('https://api.web3forms.com/submit', {
		 method: 'POST',
		 body: formData
	})
	.then(response => response.json())
	.then(data => {
		 if (data.success) {
			  document.getElementById('responseMessage').textContent = 'Форма успешно отправлена!';
			  this.reset(); // очищаем форму

			  // Показываем анимацию "ГОТОВО"
			  const successMessage = document.getElementById('successMessage');
			  successMessage.classList.add('show');

			  // Устанавливаем таймер для закрытия анимации и модального окна
			  setTimeout(() => {
					successMessage.classList.remove('show'); // скрываем сообщение "ГОТОВО"
					document.getElementById("myModal").style.display = "none"; // закрываем модальное окно
			  }, 111500); //  секунды для завершения анимации
		 } else {
			  document.getElementById('responseMessage').textContent = 'Ошибка отправки формы.';
		 }
	})
	.catch(error => {
		 document.getElementById('responseMessage').textContent = 'Произошла ошибка: ' + error.message;
	});
});
const burger = document.getElementById('burger');
const menuList = document.getElementById('header-menu-items');
burger.onclick = () => {
	headerMenuItems.classList.toggle('active');
	 burger.classList.toggle('active');
};


