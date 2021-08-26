// import functions

import { add, subtract, multiply, divide } from './calculator.js';

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

//multiplication calculator
const multiplyNumber1 = document.getElementById('input1multiply');
const multiplyNumber2 = document.getElementById('input2multiply');
const multiplyButton = document.getElementById('enter-button-multiply');
const multiplyAnswer = document.getElementById('product');

//division calculator
const divideNumber1 = document.getElementById('input1divide');
const divideNumber2 = document.getElementById('input2divide');
const divideButton = document.getElementById('enter-button-divide');
const divideAnswer = document.getElementById('quotient');

// set event listeners 

//addition
addButton.addEventListener('click', () => {
    const value1 = addNumber1.value;
    const value2 = addNumber2.value;
    const result = add(value1, value2);
    addAnswer.textContent = result;
});

//subtraction
subtractButton.addEventListener('click', () => {
    const value1 = subtractNumber1.value;
    const value2 = subtractNumber2.value;
    const result = subtract(value1, value2);
    subtractAnswer.textContent = result;

});

//multiplication
multiplyButton.addEventListener('click', () => {
    const value1 = multiplyNumber1.value;
    const value2 = multiplyNumber2.value;
    const result = multiply(value1, value2);
    multiplyAnswer.textContent = result;
    
});

//division
divideButton.addEventListener('click', () => {
    const value1 = divideNumber1.value;
    const value2 = divideNumber2.value;
    const result = divide(value1, value2);
    divideAnswer.textContent = result;

});

// get user input(s)
// do any needed work with the value(s)
// update DOM to reflect new value(s)