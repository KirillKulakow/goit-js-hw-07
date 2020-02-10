'use strict';

/*
Task 2
*/

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

    for (let ingredient of ingredients) {
        let li = document.createElement('li');
        li.innerHTML = ingredient;
        document.querySelector('#ingredients').append(li)
    }



