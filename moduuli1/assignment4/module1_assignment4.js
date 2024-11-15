'use strict';
const name = prompt('Declare your name');
const num = Math.floor(Math.random() * 4) + 1;
if (num == 4) {
    document.querySelector('#target').innerHTML = `${name}, you are Ravenclaw.`;
} else if (num == 3) {
    document.querySelector('#target').innerHTML = `${name}, you are Hufflepuff.`;
} else if (num == 2) {
    document.querySelector('#target').innerHTML = `${name}, you are Slytherin.`;
} else {
    document.querySelector('#target').innerHTML = `${name}, you are Gryffindor.`;
}