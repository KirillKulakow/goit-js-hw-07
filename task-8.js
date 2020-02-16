'use strict';

/*
Task 8
*/

const inputNumber = document.querySelector('#controls input')
const boxes = document.querySelector('#boxes')
const renderBtn = document.querySelector('button[data-action="render"]')
const destroyBtn = document.querySelector('button[data-action="destroy"]')

const randomColor = () => {
    return `rgb(${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 250)})`;
}

let collection = []
const createBoxes = value => {
    value = inputNumber.value;
    let width = 30;
    let height = 30;
    for (let i = 0; i < value; i++){
        let divBox = document.createElement('div');
        divBox.style.background = randomColor();
        divBox.style.width = `${width +=10}px`
        divBox.style.height = `${height +=10}px`
        collection.push(divBox)
    }
};

const addBoxes = () => {
    createBoxes()
    boxes.append(...collection)
    inputNumber.value = null
};

const destroyBoxes = () => {
    collection = [];
    boxes.innerHTML = '';
    inputNumber.value = null;
}
renderBtn.addEventListener('click', addBoxes)
destroyBtn.addEventListener('click', destroyBoxes)