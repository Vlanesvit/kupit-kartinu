function uploadImage() {
	const uploadInputs = document.querySelectorAll('.upload__input');
	const uploadPreviews = document.querySelectorAll('.upload__preview');
	let uploadFiles = "";

	function uploadPicture(file, size, input) {
		// Проверка на формат
		if (!['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'application/zip', 'application/x-zip', 'application/x-zip-compressed'].includes(file.type)) {
			alert('Выбран неверный формат файла');
			// Очистка
			input.value = '';
			uploadFiles = '';
			input.parentNode.querySelector('.upload__preview').innerHTML = '';
			input.parentNode.querySelector('.upload__btn span').innerText = 'Загрузить фото';
			return;
		}
		// Проверка на размер
		else if (file.size > size * 1000) {
			alert(`Файл должен быть не более ${size}kb`);
			// Очистка
			input.value = '';
			uploadFiles = '';
			input.parentNode.querySelector('.upload__preview').innerHTML = '';
			input.parentNode.querySelector('.upload__btn span').innerText = 'Загрузить фото';
			return;
		}
		// Если картинки, то вывод превью
		else if (['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
			let reader = new FileReader();
			reader.onload = function (e) {
				if (uploadPreviews) {
					uploadPreviews.forEach(uploadPreview => {
						uploadPreview.classList.add('_ready-files');
						uploadFiles +=
							`<div class="upload__file">
								<img src=${e.target.result} alt="Загруженное фото">
							</div>`;
						uploadPreview.innerHTML = uploadFiles
					});
				}
			};
			reader.onerror = function (e) { alert('Ошибка'); }
			reader.readAsDataURL(file);
		}
		// uploadText.innerText = input.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1];
	}

	uploadInputs.forEach(uploadInput => {
		if (uploadInput.hasAttribute('accept')) uploadInput.removeAttribute('accept')

		if (uploadInput) {
			uploadInput.setAttribute('accept', 'image/jpeg, image/png, image/gif, application/pdf, application/zip, application/x-zip, application/x-zip-compressed');
			uploadInput.addEventListener('change', function () {
				for (let i = 0; i < uploadInput.files.length; ++i) {
					uploadPicture(uploadInput.files.item(i), 1500, uploadInput);
				}
			});
		}
	});
}
if (document.querySelector('.upload')) {
	uploadImage()
}

