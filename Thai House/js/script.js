document.addEventListener('DOMContentLoaded', function() {
	const contactModal = document.getElementById('contact-modal');
	const hoursModal = document.getElementById('hours-modal');
	const aboutModal = document.getElementById('contact-about');
	const contactsLink = document.getElementById('contacts-link');
	const workingHoursLink = document.getElementById('working-hours-link');
	const aboutLink = document.getElementById('open-modal');
	const closeButtons = document.querySelectorAll('.close-button');

	// Функция для открытия модального окна
	const openModal = (modal) => {
		 modal.style.display = 'block';
	};

	// Функция для закрытия модального окна
	const closeModal = (modal) => {
		 modal.style.display = 'none';
	};

	contactsLink.onclick = (event) => {
		 event.preventDefault();
		 openModal(contactModal);
	};

	workingHoursLink.onclick = (event) => {
		 event.preventDefault();
		 openModal(hoursModal);
	};

	aboutLink.onclick = (event) => {
		 event.preventDefault();
		 openModal(aboutModal);
	};

	closeButtons.forEach(button => {
		 button.onclick = (event) => {
			  closeModal(event.target.closest('.modal'));
		 };
	});

	window.onclick = (event) => {
		 if (event.target === contactModal) {
			  closeModal(contactModal);
		 }
		 if (event.target === hoursModal) {
			  closeModal(hoursModal);
		 }
		 if (event.target === aboutModal) {
			  closeModal(aboutModal);
		 }
	};

	// Бургер-меню
	const burger = document.getElementById('burger');
	const menuList = document.getElementById('menu-list');
	burger.onclick = () => {
		 menuList.classList.toggle('active');
		 burger.classList.toggle('active');
	};
		 

	// Прокрутка навигационного меню
	window.addEventListener('scroll', () => {
		 const nav = document.querySelector('.menu');
		 nav.classList.toggle('scrolled', window.scrollY > 50);
	});

	// Плавная прокрутка
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		 anchor.addEventListener('click', function(event) {
			  event.preventDefault();
			  const targetId = this.getAttribute('href').substring(1);
			  const targetElement = document.getElementById(targetId);
			  window.scrollTo({
					top: targetElement.offsetTop,
					behavior: 'smooth'
			  });
		 });
	});

	// Прокрутка изображений
	const scrollContainer = document.querySelector('.scroll-content');
	const scrollLeftButton = document.querySelector('.scroll-left');
	const scrollRightButton = document.querySelector('.scroll-right');

	const scrollLeft = () => {
		 scrollContainer.scrollBy({
			  left: -300,
			  behavior: 'smooth'
		 });
	};

	const scrollRight = () => {
		 scrollContainer.scrollBy({
			  left: 300,
			  behavior: 'smooth'
		 });
	};

	scrollLeftButton.onclick = scrollLeft;
	scrollRightButton.onclick = scrollRight;
});
// JSON с переводами
const translations = {
	lt: {
		 "about-title": "Tailandiečių restoranas Vilniuje",
		 "about-description": "Įkvėpti Tailando kultūros turtingumo ir unikalios virtuvės, mes, restorano komanda, siekėme sukurti erdvę, kurioje kiekvienas svečias galėtų mėgautis ne tik gardžiais patiekalais, bet ir tikro tailandietiško svetingumo atmosfera. Kelionės po Tailandą mums suteikė nepamirštamų įspūdžių apie gatvės maisto aromatus ir tradicinius kulinarinius malonumus. Džiaugiamės galėdami su jumis pasidalinti autentiškais skoniais ir šeimos receptais, kad kiekvienas apsilankymas mūsų restorane taptų tikru pasinerimu į nuostabų Tailando virtuvės ir kultūros pasaulį.",
		 "contact-information": "Kontaktinė informacija",
		// Добавьте все тексты для LT
	},
	en: {
		 "about-title": "Thai Restaurant in Vilnius",
		 "about-description": "Inspired by the richness of Thai culture and unique cuisine, we, the restaurant team, sought to create a space where every guest could enjoy not only delicious dishes, but also the atmosphere of true Thai hospitality. Traveling around Thailand gave us unforgettable impressions of the aromas of street food and traditional culinary delights. We are happy to share authentic flavors and family recipes with you so that every visit to our restaurant becomes a real immersion into the wonderful world of Thai cuisine and culture.",
		 // Добавьте все тексты для EN
	},
	ru: {
		 "about-title": "Тайский ресторан в Вильнюсе",
		 "about-description": "Вдохновленные богатством тайской культуры и уникальной кухней, мы, команда ресторана, стремились создать пространство, где каждый гость сможет насладиться не только вкусными блюдами, но и атмосферой истинного тайского гостеприимства. Путешествие по Таиланду подарило нам незабываемые впечатления от ароматов уличной еды и традиционных кулинарных изысков. Мы рады поделиться с вами аутентичными вкусами и семейными рецептами, чтобы каждое посещение нашего ресторана стало настоящим погружением в удивительный мир тайской кухни и культуры.",
		 "contact-information": "Контактная информация",
		 // Добавьте все тексты для RU
	},
	uk: {
		 "about-title": "Тайський ресторан у Вільнюсі",
		 "about-description": "Надихнувшись багатством тайської культури та унікальною кухнею, ми, команда ресторану, прагнули створити простір, де кожен гість міг би насолодитися не лише смачними стравами, а й атмосферою справжньої тайської гостинності. Подорож Таїландом подарувала нам незабутні враження від ароматів вуличної їжі та традиційних кулінарних вишукувань. Ми раді поділитися з вами автентичними смаками та сімейними рецептами, щоб кожен візит до нашого ресторану став справжнім зануренням у дивовижний світ тайської кухні та культури.",
		 "contact-information": "Контактна інформація",
		 "about-menu-text":"Меню „Thai House“ пропонує широкий асортимент страв, що відображає унікальне поєднання солодкого, кислого, гострого та солоного смаків, характерне для тайської кухні. Тут ви можете скуштувати традиційний Том Ям з морепродуктами і Пад Тай — смажені локшину з овочами та горіхами, а також багато вегетаріанських страв, приготованих зі свіжих місцевих інгредієнтів, які надають стравам насиченого смаку й аромату. Гостроту страв можна регулювати за бажанням клієнта. На десерт пропонується липкий рисовий пудинг з манго та кокосовим молоком, а також екзотичні напої, такі як тайський чай з молоком і кокосова вода.",
		
		// Добавьте все тексты для UA
	}
};

// Функция для переключения языка
function changeLanguage(lang) {
	const elements = document.querySelectorAll("[id]");
	elements.forEach(element => {
		 const translation = translations[lang][element.id];
		 if (translation) {
			  element.innerHTML = translation;
		 }
	});
}

// Загрузка текста на основе языка по умолчанию
document.addEventListener("DOMContentLoaded", () => {
	const defaultLanguage = "lt"; // Укажите здесь язык по умолчанию
	changeLanguage(defaultLanguage);
});
