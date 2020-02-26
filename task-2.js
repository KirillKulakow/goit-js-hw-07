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


ingredients.forEach(function(item, inx, arr) {
  const ingredientList = document.querySelector('#ingredients');
  let li = document.createElement('li')
  li.insertAdjacentHTML('afterbegin', item)
  ingredientList.insertAdjacentElement('beforeend', li)
})
  




// for (let ingredient of ingredients) {
//     let li = document.createElement('li');
//     li.innerHTML = ingredient;
//     ingredientsArr.push(li)
// }
// ingredientList.append(...ingredientsArr)


