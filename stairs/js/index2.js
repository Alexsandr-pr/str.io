new Swiper('.swiper', {
    navigation: {
		nextEl: '.swiper-button-prev',
		prevEl: '.swiper-button-next'
	},
 
    keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},
    mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью.
		eventsTarget: ".swiper-slide"
	},
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 30,

    breakpoints: {
		320: {
			slidesPerView: 1,
            spaceBetween: 15,
		},
        480: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2.5,
		},

		992: {
			slidesPerView: 3,
		}
	},
});

new Swiper(".swiper-container", {
	navigation: {
		nextEl: '.swiper-button-prev',
		prevEl: '.swiper-button-next'
	},
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 30,
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},
   
	effect: 'fade',

	// Дополнение к fade
	fadeEffect: {
		// Параллельная
		// смена прозрачности
		
	},
    
});

const textOpen = document.querySelectorAll('[data-name="text-open"]');
const textHidden = document.querySelectorAll('[data-name="text-dop"]');


function hiddenTextDop(){
	textHidden.forEach(function(textDopHidden) {
		textDopHidden.classList.toggle("hidden")
	})
};




textOpen.forEach(function(item) {
	item.addEventListener('click', function (){
		hiddenTextDop();
	})
})