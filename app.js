// import functions

import { add } from './calculator.js';

// reference needed DOM elements
const addNumber1 = document.getElementById('input1');
const addNumber2 = document.getElementById('input2');
const addButton = document.getElementById('enter-button');
const addAnswer = document.getElementById('sum');

// set event listeners 
addButton.addEventListener('click', () => {
    const value1 = addNumber1.value;
    const value2 = addNumber2.value;

    const result = add(value1, value2);
    addAnswer.textContent = result;
});
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
