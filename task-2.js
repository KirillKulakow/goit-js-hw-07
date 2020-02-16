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

const ingredientList = document.querySelector('#ingredients');
let ingredientsArr = [];
for (let ingredient of ingredients) {
    let li = document.createElement('li');
    li.innerHTML = ingredient;
    ingredientsArr.push(li)
}
ingredientList.append(...ingredientsArr)


