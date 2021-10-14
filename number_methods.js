'use strict'
const prompt = require("prompt-sync")();

// Problem: https://javascript.info/task/repeat-until-number
function readNumber() {
  let number = 0;
  do {
    number = prompt('Enter a number');
  } while(!isFinite(num));

  if (num === null || num === '') return null;

  return +number;
}


// Problem: https://javascript.info/task/random-min-max
function random(min, max) {
  return min + Math.random() * (max - min);
}

function randomInteger(min, max){
  return Math.round(random(min, max));
}
