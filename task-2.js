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
let array = []
ingredients.forEach(function(item, inx, arr) {
  let li = document.createElement('li')
  li.insertAdjacentHTML('afterbegin', item)
  array.push(li.outerHTML)
})
ingredientList.insertAdjacentHTML('beforeend', array.join(''))

console.log(array);

  




// for (let ingredient of ingredients) {
//     let li = document.createElement('li');
//     li.innerHTML = ingredient;
//     ingredientsArr.push(li)
// }
// ingredientList.append(...ingredientsArr)


