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
