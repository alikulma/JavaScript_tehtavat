'use strict';
const yearstr = prompt('Type a year');
const year = parseInt(yearstr);
if (year % 100 == 0) {
    if (year % 400 == 0) {
        document.querySelector('#target').innerHTML = `The year ${year} is a leap year.`;
    } else {
        document.querySelector('#target').innerHTML = `The year ${year} is not a leap year.`;
    }
} else if (year % 4 == 0) {
    document.querySelector('#target').innerHTML = `The year ${year} is a leap year.`;
} else {
    document.querySelector('#target').innerHTML = `The year ${year} is not a leap year.`;
}