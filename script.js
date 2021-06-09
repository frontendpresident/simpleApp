// Необходимо написать простое приложение на чистом JavaScript.
// Описание работы приложения:

// Из выпадающего списка выбирается элемент,
//     который появлятся в строке ниже(input).
// Пользователь имеет возможность изменить текст элемента
// и сохранить измененный текст.После сохранения текст элемента также
// обновляется в выпадающем списке.
// В приложениях к карточке есть демо работы приложения.

// Приветствуется стилизация приложения.

const input = document.querySelector('input');
const select = document.querySelector('select');
const button = document.querySelector('button');


select.onchange = () => {
    const i = select.options.selectedIndex
    input.value = select.options[i].text
}

button.onclick = () => {
    const i = select.options.selectedIndex
    select.options[i].text = input.value
    input.value = ''
}








