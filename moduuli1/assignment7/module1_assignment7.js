'use strict';
const dicestr = prompt('How many dice do I roll?');
const dice = parseInt(dicestr);
let start = 0, sum = 0;
while (start < dice) {
    const roll = Math.floor(Math.random() * 6) + 1;
    sum += roll;
    start++;
}
document.querySelector('#target').innerHTML = `The sum of the results of the dice rolls is ${sum}.`;