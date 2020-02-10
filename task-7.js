'use strict';

/*
Task 7
*/

const input = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

const editTextSize = () => {
    text.style.fontSize = `${input.value}px`
}


input.addEventListener('input', editTextSize)