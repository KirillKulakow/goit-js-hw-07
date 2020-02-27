'use strict';

/*
Task 6
*/

const input = document.querySelector('#validation-input')

const validator = () => {
    input.classList.add('validation-input');
    input.classList.add('invalid');
    if (input.value.length === Number(input.getAttribute('data-length'))) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
}
console.log(input.value.length);
console.log(Number(input.getAttribute('data-length')));
console.log(input.value.length === Number(input.getAttribute('data-length')));
input.addEventListener('blur', validator)