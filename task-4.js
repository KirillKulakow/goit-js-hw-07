'use strict';

/*
Task 4
*/

const counter = document.querySelector('#counter');


document.addEventListener('click', function(event) {
    let value = Number(document.querySelector('#value').textContent);
    if (event.target.dataset.action === 'decrement') {
      value --;
      
    } else if(event.target.dataset.action === 'increment') {
        value ++;
    }
    document.getElementById('value').innerHTML=`${value}`
  });