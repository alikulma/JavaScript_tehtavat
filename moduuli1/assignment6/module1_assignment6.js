'use strict';
const question = confirm('Should I calculate the square root?');
if (question == true) {
    const numstr = prompt('Type a number')
    const num = parseInt(numstr)
    if (num < 0) {
        document.querySelector('#target').innerHTML = `The square root of a negative number is not defined.`;
    } else {
        const sqrt = Math.sqrt(num);
        document.querySelector('#target').innerHTML = `The square root of ${num} is ${sqrt}.`;
    }
} else {
    document.querySelector('#target').innerHTML = `The square root is not calculated.`;
}