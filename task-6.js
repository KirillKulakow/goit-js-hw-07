'use strict';

/*
Task 6
*/

const input = document.querySelector('#validation-input')

const validator = () => {
    input.classList.add('validation-input');
    if (input.value.length == input.getAttribute('data-length')) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
        input.classList.remove('valid');
        input.classList.add('invalid');
}

input.addEventListener('blur', validator)