'use strict';
/*
Task 1
*/

const categories = document.querySelectorAll('.item')
console.log(`В списке ${categories.length} категории`);
for (let object of categories) {
    console.log(`
    Категория: ${object.querySelector('h2').textContent} 
    Количество элементов: ${object.getElementsByTagName('li').length}
    `);
}
