'use strict';

/*
Task 5
*/

const inputValue = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');
const addName = () => {
    outputText.textContent = inputValue.value;
    if (inputValue.value === "") {
        outputText.textContent = 'незнакомец';
    }
};
inputValue.addEventListener('input', addName);


