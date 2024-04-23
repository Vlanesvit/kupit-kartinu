
document.addEventListener('DOMContentLoaded', function () {
	const timers = document.querySelectorAll('.timer');

	timers.forEach(timer => {
		// получаем значение даты из атрибута
		const dateStr = timer.dataset.timer
		// парсируем строковое значение в объект даты
		const parseDate = dateStr => {
			const [date, time] = dateStr.split(' ');
			const [day, month, year] = date.split('.').map(Number);
			const [hours, minutes] = time.split(':').map(Number);
			return new Date(year, month - 1, day, hours, minutes);
		}
		// конечная дата
		const deadline = parseDate(dateStr);
		// id таймера
		let timerId = null;
		// склонение числительных
		function declensionNum(num, words) {
			return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
		}

		// вычисляем разницу дат и устанавливаем оставшееся время в качестве содержимого элементов
		function countdownTimer() {
			const diff = deadline - new Date();
			if (diff <= 0) {
				clearInterval(timerId);
			}
			const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
			const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
			const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
			$days.textContent = days;
			$hours.textContent = hours;
			$minutes.textContent = minutes;

			// проверяем на наличие атриюута, если его нет - выводим склоняемые надписи
			if (!$days.hasAttribute('data-title')) {
				$days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
			}
			if (!$hours.hasAttribute('data-title')) {
				$hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
			}
			if (!$minutes.hasAttribute('data-title')) {
				$minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
			}

			// если осталось 0 дней, то блок скрывается
			if ($days.textContent === '0') {
				$days.style.display = 'none'
			}
			if ($hours.textContent === '0') {
				$hours.style.display = 'none'
			}
		}
		// получаем элементы, содержащие компоненты даты
		const $days = timer.querySelector('.timer__days');
		const $hours = timer.querySelector('.timer__hours');
		const $minutes = timer.querySelector('.timer__minutes');

		// вызываем функцию countdownTimer
		countdownTimer();
		// вызываем функцию countdownTimer каждую секунду
		timerId = setInterval(countdownTimer, 1000);
	});
});