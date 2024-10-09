let names = ['Alex', 'Shax', 'Azim', 'Amir'];

let userName = prompt('Напишите свое имя.');

if (userName) {
    if (userName.charAt(0) === userName.charAt(0).toUpperCase()) {

        if (names.includes(userName)) {
            alert('Это имя уже существует!');

            let removeName = prompt('Хотите удалить это имя? (да/нет)');
            if (removeName.toLowerCase() === 'да') {

                let index = names.indexOf(userName);
                if (index >= 0) {
                    names.splice(index, 1);

                    let newName = prompt('Введите новое имя.');
                    if (newName) {
                        if (newName.charAt(0) === newName.charAt(0).toUpperCase()) {
                            names.push(newName);
                            alert('Добавлено новое имя: ' + newName);
                        } else {
                            alert('Неправильно! Новое имя должно начинаться с заглавной буквы.');
                        }
                    }
                }
            } else {
                alert("Ok");
            }
        } else {
            alert('Имя не найдено.');
        }
    } else {
        alert('Неправильно! Имя должно начинаться с заглавной буквы.');
    }
} else {
    alert('Имя не должно быть пустым.');
}

console.log(names);