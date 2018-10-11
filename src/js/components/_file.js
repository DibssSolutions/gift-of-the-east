const file = document.querySelector('.js-file-input');
const preview = document.querySelector('.js-file-preview');

function showPreview() {
  let uploaded = file.files[0];
  uploaded.name
    ? (preview.innerHTML = `Вы загрузили файл<strong>${
      uploaded.name
    }</strong>`)
    : (preview.innerHTML = '');
}

file.addEventListener('change', showPreview);
