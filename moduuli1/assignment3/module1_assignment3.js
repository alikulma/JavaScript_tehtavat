'use strict';
const num1 = prompt('Type the first number');
const num2 = prompt('Type the second number');
const num3 = prompt('Type the third number');
const num1int = parseInt(num1);
const num2int = parseInt(num2);
const num3int = parseInt(num3);
const sum = num1int + num2int + num3int;
const product = num1int * num2int * num3int;
const average = sum / 3;
document.querySelector('#target').innerHTML = `Sum: ${sum}, product: ${product}, average: ${average}`;