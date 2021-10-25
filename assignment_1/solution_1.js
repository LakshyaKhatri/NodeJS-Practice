'use strict'
const prompt = require("prompt-sync")();

/*
================================================================================
 * Problem: Create a function to calculate the factorial of a number using
 *          closure.
================================================================================
*/
function factorialCalculator(num) {
  let number = num;
  let factorial = null;

  function calculate() {
    factorial = 1;
    for(let i = 2; i <= number; i++) factorial *= i;
    console.log('Factorial calculated');
  }

  function show() {
    if(!factorial) {
      console.log('Calculate factorial first using method `calculate()`');
      return;
    }
    console.log(factorial);
  }

  function updateNum(newNum) {
    number = newNum;
    factorial = null;
  }

  return {
    calculate,
    show,
    updateNum
  };
}

let fCalculator = factorialCalculator(5);
console.log(fCalculator.number);
console.log(fCalculator.factorial);
fCalculator.show();
fCalculator.calculate();
fCalculator.show();

fCalculator.updateNum(4);
fCalculator.calculate();
fCalculator.show();
