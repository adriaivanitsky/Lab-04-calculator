// import functions

import { add, subtract } from './calculator.js';

// reference needed DOM elements
//addition calculator
const addNumber1 = document.getElementById('input1');
const addNumber2 = document.getElementById('input2');
const addButton = document.getElementById('enter-button');
const addAnswer = document.getElementById('sum');

//subtraction calculator
const subtractNumber1 = document.getElementById('input1subtract');
const subtractNumber2 = document.getElementById('input2subtract');
const subtractButton = document.getElementById('enter-button-subtract');
const subtractAnswer = document.getElementById('difference');

// set event listeners 
addButton.addEventListener('click', () => {
    const value1 = addNumber1.value;
    const value2 = addNumber2.value;
    const result = add(value1, value2);
    addAnswer.textContent = result;
});

subtractButton.addEventListener('click', () => {
    const value1 = subtractNumber1.value;
    const value2 = subtractNumber2.value;
    const result = subtract(value1, value2);
    subtractAnswer.textContent = result;
})
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
