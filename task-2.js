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
let ingredientsS = '';
ingredients.forEach(function(item, inx, arr) {
  let li = document.createElement('li')
  li.innerText = item
  ingredientList.append(li)
})
  




// for (let ingredient of ingredients) {
//     let li = document.createElement('li');
//     li.innerHTML = ingredient;
//     ingredientsArr.push(li)
// }
// ingredientList.append(...ingredientsArr)


