/*
Документация слайдера: https://swiperjs.com/
*/

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	if (document.querySelector('.rs-slider__slider.swiper')) {
		const sliderBlocks = document.querySelectorAll('.rs-slider');

		sliderBlocks.forEach(slider => {
			const sliderSwiper = slider.querySelectorAll('.rs-slider__slider.swiper');
			const arrowPrev = slider.querySelector('.rs-slider__button-prev');
			const arrowNext = slider.querySelector('.rs-slider__button-next');
			const pagination = slider.querySelector('.rs-slider__pagination');
			const interleaveOffset = 0.75;

			sliderSwiper.forEach(swiper => {
				const swiperMain = new Swiper(swiper, {
					// Автопрокрутка
					autoplay: {
						// Пауза между прокруткой
						delay: 10000,
						// Закончить на последнем слайде
						stopOnLastSlide: false,
						// Отключить после ручного переключения
						disableOnInteraction: false,
					},

					// Кол-во показываемых слайдов
					slidesPerView: 1,

					// Обновить свайпер
					// при изменении элементов слайдера
					observer: true,
					// при изменении родительских элементов слайдера
					observeParents: true,
					// при изменении дочерних элементов слайдера
					observeSlideChildren: true,

					// Скорость смены слайдов
					speed: 800,

					// Включение/отключение
					// перетаскивание на ПК
					simulateTouch: true,
					allowTouchMove: false,
					// Чувствительность свайпа
					touchRadio: 1,
					// Угол срабатывания свайпа/перетаскивания
					touchAngle: 45,
					// Cобытие touchstart (pointerdown)
					touchStartPreventDefault: false,

					// Цикличность слайдера
					loop: true,

					// Анимация переключения
					// effect: 'fade',

					// Курсор перетаскивания
					grabCursor: true,

					// Стрелки
					navigation: {
						prevEl: arrowPrev,
						nextEl: arrowNext,
					},

					// Пагинация
					pagination: {
						el: pagination,
						clickable: true,
						type: 'fraction',
						formatFractionCurrent: addZero,
						formatFractionTotal: addZero
					},

					watchSlidesProgress: true,
					direction: 'vertical',
					on: {
						progress: function () {
							let swiper = this;

							for (let i = 0; i < swiper.slides.length; i++) {
								let slideProgress = swiper.slides[i].progress;
								let innerOffset = swiper.height * interleaveOffset;
								let innerTranslate = slideProgress * innerOffset;

								TweenMax.set(swiper.slides[i].querySelector(".rs-slider__bg"), {
									y: innerTranslate,
								});
							}
						},
						setTransition: function (slider, speed) {
							let swiper = this;
							for (let i = 0; i < swiper.slides.length; i++) {
								swiper.slides[i].style.transition = speed + "ms";
								swiper.slides[i].querySelector(".rs-slider__bg").style.transition =
									speed + "ms";
							}
						}
					}
				});
			});
		});
	}

	if (document.querySelector('.rs-auction__slider.swiper')) {
		const sliderBlocks = document.querySelectorAll('.rs-auction');

		sliderBlocks.forEach(slider => {
			const sliderSwiper = slider.querySelectorAll('.rs-auction__slider.swiper');
			const arrowPrev = slider.querySelector('.rs-auction__button-prev');
			const arrowNext = slider.querySelector('.rs-auction__button-next');
			const pagination = slider.querySelector('.rs-auction__pagination');

			sliderSwiper.forEach(swiper => {
				const swiperMain = new Swiper(swiper, {
					// // Автопрокрутка
					// autoplay: {
					// 	// Пауза между прокруткой
					// 	delay: 10000,
					// 	// Закончить на последнем слайде
					// 	stopOnLastSlide: false,
					// 	// Отключить после ручного переключения
					// 	disableOnInteraction: false,
					// },

					// Обновить свайпер
					// при изменении элементов слайдера
					observer: true,
					// при изменении родительских элементов слайдера
					observeParents: true,
					// при изменении дочерних элементов слайдера
					observeSlideChildren: true,

					// Скорость смены слайдов
					speed: 500,

					// Включение/отключение
					// перетаскивание на ПК
					simulateTouch: true,
					allowTouchMove: true,
					// Чувствительность свайпа
					touchRadio: 1,
					// Угол срабатывания свайпа/перетаскивания
					touchAngle: 45,
					// Cобытие touchstart (pointerdown)
					touchStartPreventDefault: false,

					// Цикличность слайдера
					// loop: true,

					// Анимация переключения
					// effect: 'fade',

					// Курсор перетаскивания
					grabCursor: true,

					// Стрелки
					navigation: {
						prevEl: arrowPrev,
						nextEl: arrowNext,
					},

					// Пагинация
					pagination: {
						el: pagination,
						clickable: true,
						type: 'progressbar',
					},

					// Брекпоинты (адаптив)
					breakpoints: {
						320: {
							slidesPerView: 1,
							spaceBetween: 30,
							grid: {
								fill: 'row',
								rows: 2,
							},
						},
						767.98: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						1601.98: {
							slidesPerView: 2,
							spaceBetween: 98,
						},
					},
				});
			});
		});
	}

	if (document.querySelector('.rs-slider-block__slider.swiper')) {
		const sliderBlocks = document.querySelectorAll('.rs-slider-block');

		sliderBlocks.forEach(slider => {
			const sliderSwiper = slider.querySelectorAll('.rs-slider-block__slider.swiper');
			const arrowPrev = slider.querySelector('.rs-slider-block__button-prev');
			const arrowNext = slider.querySelector('.rs-slider-block__button-next');
			const pagination = slider.querySelector('.rs-slider-block__pagination');


			sliderSwiper.forEach(swiper => {
				let showSlideCount = Number(swiper.getAttribute('data-slidesPerView'));

				const swiperMain = new Swiper(swiper, {
					// // Автопрокрутка
					// autoplay: {
					// 	// Пауза между прокруткой
					// 	delay: 10000,
					// 	// Закончить на последнем слайде
					// 	stopOnLastSlide: false,
					// 	// Отключить после ручного переключения
					// 	disableOnInteraction: false,
					// },

					// Обновить свайпер
					// при изменении элементов слайдера
					observer: true,
					// при изменении родительских элементов слайдера
					observeParents: true,
					// при изменении дочерних элементов слайдера
					observeSlideChildren: true,

					// Скорость смены слайдов
					speed: 500,

					// Включение/отключение
					// перетаскивание на ПК
					simulateTouch: true,
					allowTouchMove: true,
					// Чувствительность свайпа
					touchRadio: 1,
					// Угол срабатывания свайпа/перетаскивания
					touchAngle: 45,
					// Cобытие touchstart (pointerdown)
					touchStartPreventDefault: false,

					// Цикличность слайдера
					// loop: true,

					// Анимация переключения
					// effect: 'fade',

					// Курсор перетаскивания
					grabCursor: true,

					// Стрелки
					navigation: {
						prevEl: arrowPrev,
						nextEl: arrowNext,
					},

					// Пагинация
					pagination: {
						el: pagination,
						clickable: true,
						type: 'progressbar',
					},

					// Брекпоинты (адаптив)
					breakpoints: {
						320: {
							slidesPerView: 1,
							spaceBetween: 30,
						},
						767.98: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						1169.98: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						1601.98: {
							slidesPerView: showSlideCount,
							spaceBetween: 110,
						},
					},
				});
			});
		});
	}

	if (document.querySelector('.rs-catalog-slider__slider.swiper')) {
		const sliderBlocks = document.querySelectorAll('.rs-catalog-slider');

		sliderBlocks.forEach(slider => {
			const sliderSwiper = slider.querySelectorAll('.rs-catalog-slider__slider.swiper');
			const arrowPrev = slider.querySelector('.rs-catalog-slider__button-prev');
			const arrowNext = slider.querySelector('.rs-catalog-slider__button-next');
			const pagination = slider.querySelector('.rs-catalog-slider__pagination');
			const interleaveOffset = 0.75;

			sliderSwiper.forEach(swiper => {
				const swiperMain = new Swiper(swiper, {
					// // Автопрокрутка
					// autoplay: {
					// 	// Пауза между прокруткой
					// 	delay: 10000,
					// 	// Закончить на последнем слайде
					// 	stopOnLastSlide: false,
					// 	// Отключить после ручного переключения
					// 	disableOnInteraction: false,
					// },

					// Кол-во показываемых слайдов
					slidesPerView: 1,

					// Обновить свайпер
					// при изменении элементов слайдера
					observer: true,
					// при изменении родительских элементов слайдера
					observeParents: true,
					// при изменении дочерних элементов слайдера
					observeSlideChildren: true,

					// Скорость смены слайдов
					speed: 800,

					// Включение/отключение
					// перетаскивание на ПК
					simulateTouch: true,
					allowTouchMove: true,
					// Чувствительность свайпа
					touchRadio: 1,
					// Угол срабатывания свайпа/перетаскивания
					touchAngle: 45,
					// Cобытие touchstart (pointerdown)
					touchStartPreventDefault: false,

					// Цикличность слайдера
					loop: true,

					// Анимация переключения
					// effect: 'fade',

					// Курсор перетаскивания
					grabCursor: true,

					// Стрелки
					navigation: {
						prevEl: arrowPrev,
						nextEl: arrowNext,
					},

					// Пагинация
					pagination: {
						el: pagination,
						clickable: true,
						type: 'fraction',
						formatFractionCurrent: addZero,
						formatFractionTotal: addZero
					},

					watchSlidesProgress: true,

					direction: 'vertical',

					on: {
						progress: function () {
							let swiper = this;

							for (let i = 0; i < swiper.slides.length; i++) {
								let slideProgress = swiper.slides[i].progress;
								let innerOffset = swiper.height * interleaveOffset;
								let innerTranslate = slideProgress * innerOffset;

								TweenMax.set(swiper.slides[i].querySelector(".rs-catalog-slider__img img"), {
									y: innerTranslate,
								});
							}
						},
						setTransition: function (slider, speed) {
							let swiper = this;
							for (let i = 0; i < swiper.slides.length; i++) {
								swiper.slides[i].style.transition = speed + "ms";
								swiper.slides[i].querySelector(".rs-catalog-slider__img img").style.transition =
									speed + "ms";
							}
						}
					},

					// Брекпоинты (адаптив)
					breakpoints: {
						320: {
							loop: true,
						},
						991.98: {
							loop: false,
						},
					},
				});
			});
		});
	}

	if (document.querySelector('.rs-marquee__slider.swiper')) {
		new Swiper('.rs-marquee__slider.swiper', {
			// Автопрокрутка
			autoplay: {
				// Пауза между прокруткой
				delay: 1,
				// Закончить на последнем слайде
				stopOnLastSlide: false,
			},

			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,
			// при изменении родительских элементов слайдера
			observeParents: true,
			// при изменении дочерних элементов слайдера
			observeSlideChildren: true,

			// Скорость смены слайдов
			speed: 5000,

			// Включение/отключение
			// перетаскивание на ПК
			simulateTouch: false,
			allowTouchMove: false,
			// Чувствительность свайпа
			touchRadio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,

			// Цикличность слайдера
			loop: true,

			slidesPerView: 7.5,
			spaceBetween: 100,

			breakpoints: {
				320: {
					spaceBetween: 55,
				},
				767.98: {
					spaceBetween: 70,
				},
				1169.98: {
					spaceBetween: 85,
				},
				1601.98: {
					spaceBetween: 100,
				},
			},

			on: {
				init: function loopBagFix(swiper) {
					for (let i = 0; i < 10; i++) {
						swiper.slides.forEach((slide) => {
							swiper.wrapperEl.append(slide.cloneNode(true))
						})
					}
				},
			}
		});
	}

	if (document.querySelector('.rs-news__slider.swiper')) {
		// До этой ширины слайдер будет активным
		const breakpoint = window.matchMedia('(min-width: 991.98px)');

		let sliderSwiper;

		const breakpointChecker = function () {
			if (breakpoint.matches === true) {
				// Выключаем слайдер
				if (sliderSwiper !== undefined) sliderSwiper.destroy(true, true);
				return;
			} else if (breakpoint.matches === false) {
				// Включаем слайдер
				return enableSwiper();
			}
		};

		// Инициализация слайдера
		const enableSwiper = function () {
			const sliderBlocks = document.querySelectorAll('.rs-news__slider.swiper');

			sliderBlocks.forEach(slider => {
				const arrowNext = slider.querySelector('.rs-news__button-next');
				const arrowPrev = slider.querySelector('.rs-news__button-prev');
				const pagination = slider.querySelector('.rs-news__pagination');

				// Перечень слайдеров
				sliderSwiper = new Swiper(slider, {
					// // Автопрокрутка
					// autoplay: {
					// 	// Пауза между прокруткой
					// 	delay: 10000,
					// 	// Закончить на последнем слайде
					// 	stopOnLastSlide: false,
					// 	// Отключить после ручного переключения
					// 	disableOnInteraction: false,
					// },

					// Обновить свайпер
					// при изменении элементов слайдера
					observer: true,
					// при изменении родительских элементов слайдера
					observeParents: true,
					// при изменении дочерних элементов слайдера
					observeSlideChildren: true,

					// Скорость смены слайдов
					speed: 500,

					// Включение/отключение
					// перетаскивание на ПК
					simulateTouch: true,
					allowTouchMove: true,
					// Чувствительность свайпа
					touchRadio: 1,
					// Угол срабатывания свайпа/перетаскивания
					touchAngle: 45,
					// Cобытие touchstart (pointerdown)
					touchStartPreventDefault: false,

					// Цикличность слайдера
					// loop: true,

					// Анимация переключения
					// effect: 'fade',

					// Курсор перетаскивания
					grabCursor: true,

					// Стрелки
					navigation: {
						prevEl: arrowPrev,
						nextEl: arrowNext,
					},

					// Пагинация
					pagination: {
						el: pagination,
						clickable: true,
						type: 'progressbar',
					},

					// Брекпоинты (адаптив)
					breakpoints: {
						320: {
							slidesPerView: 1,
							spaceBetween: 30,
						},
						539.98: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
					},
				});
			});
		};

		breakpoint.addListener(breakpointChecker);
		breakpointChecker();
	}

	if (document.querySelector('.rs-features__slider.swiper')) {
		// До этой ширины слайдер будет активным
		const breakpoint = window.matchMedia('(min-width: 991.98px)');

		let sliderSwiper;

		const breakpointChecker = function () {
			if (breakpoint.matches === true) {
				// Выключаем слайдер
				if (sliderSwiper !== undefined) sliderSwiper.destroy(true, true);
				return;
			} else if (breakpoint.matches === false) {
				// Включаем слайдер
				return enableSwiper();
			}
		};

		// Инициализация слайдера
		const enableSwiper = function () {
			const sliderBlocks = document.querySelectorAll('.rs-features__slider.swiper');

			sliderBlocks.forEach(slider => {
				const arrowNext = slider.querySelector('.rs-features__button-next');
				const arrowPrev = slider.querySelector('.rs-features__button-prev');
				const pagination = slider.querySelector('.rs-features__pagination');

				// Перечень слайдеров
				sliderSwiper = new Swiper(slider, {
					// // Автопрокрутка
					// autoplay: {
					// 	// Пауза между прокруткой
					// 	delay: 10000,
					// 	// Закончить на последнем слайде
					// 	stopOnLastSlide: false,
					// 	// Отключить после ручного переключения
					// 	disableOnInteraction: false,
					// },

					// Обновить свайпер
					// при изменении элементов слайдера
					observer: true,
					// при изменении родительских элементов слайдера
					observeParents: true,
					// при изменении дочерних элементов слайдера
					observeSlideChildren: true,

					// Скорость смены слайдов
					speed: 500,

					// Включение/отключение
					// перетаскивание на ПК
					simulateTouch: true,
					allowTouchMove: true,
					// Чувствительность свайпа
					touchRadio: 1,
					// Угол срабатывания свайпа/перетаскивания
					touchAngle: 45,
					// Cобытие touchstart (pointerdown)
					touchStartPreventDefault: false,

					// Цикличность слайдера
					// loop: true,

					// Анимация переключения
					// effect: 'fade',

					// Курсор перетаскивания
					grabCursor: true,

					// Стрелки
					navigation: {
						prevEl: arrowPrev,
						nextEl: arrowNext,
					},

					// Пагинация
					pagination: {
						el: pagination,
						clickable: true,
						type: 'progressbar',
					},

					// Брекпоинты (адаптив)
					breakpoints: {
						320: {
							slidesPerView: 1.375,
							spaceBetween: 53,
						},
						539.98: {
							slidesPerView: 2,
							spaceBetween: 53,
						},
					},
				});
			});
		};

		breakpoint.addListener(breakpointChecker);
		breakpointChecker();
	}

	if (document.querySelector('.rs-product-block__slider.swiper')) {
		const sliderBlocks = document.querySelectorAll('.rs-product-block');

		sliderBlocks.forEach(slider => {
			const sliderSwiper = slider.querySelector('.rs-product-block__slider.swiper');
			const thumbsSwiper = slider.querySelector('.rs-product-block__thumbs_slider');
			const arrowPrev = slider.querySelector('.rs-product-block__button-prev');
			const arrowNext = slider.querySelector('.rs-product-block__button-next');

			const swiperThumbs = new Swiper(thumbsSwiper, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 5000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Слежка за слайдером
				watchOverflow: true,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				allowTouchMove: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Брейкпоинты(адаптив)
				// Шрина экрана
				breakpoints: {
					320: {
						slidesPerView: 3,
						spaceBetween: 10,
					},
					540: {
						slidesPerView: 4,
						spaceBetween: 12,
					},
					991.98: {
						slidesPerView: 5.5,
						spaceBetween: 15,
					},
				},
			});

			const swiperMain = new Swiper(sliderSwiper, {
				// Автопрокрутка
				autoplay: {
					// Пауза между прокруткой
					delay: 10000,
					// Закончить на последнем слайде
					stopOnLastSlide: false,
					// Отключить после ручного переключения
					disableOnInteraction: false,
				},

				// Слияние слайдеров
				thumbs: {
					swiper: swiperThumbs,
				},

				// Слежка за слайдером
				watchOverflow: true,

				// Кол-во показываемых слайдов
				slidesPerView: 1,
				spaceBetween: 30,


				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 800,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				allowTouchMove: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,
				// Cобытие touchstart (pointerdown)
				touchStartPreventDefault: false,

				// Анимация переключения
				// effect: 'fade',

				// Курсор перетаскивания
				grabCursor: true,

				// Стрелки
				navigation: {
					prevEl: arrowPrev,
					nextEl: arrowNext,
				},

				slideToClickedSlide: true,
			});
		});
	}

	function addZero(num) {
		return (num > 9) ? num : '0' + num;
	}
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	if (document.querySelector('.swiper')) {
		initSliders();
	}
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});