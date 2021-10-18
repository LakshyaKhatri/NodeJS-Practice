'use strict'
const prompt = require("prompt-sync")();

function getMaxSubSum(arr) {
  let maxSoFar = -Infinity;
  let currentMax = 0;

  for (let currentNum of arr) {
    currentMax += currentNum;
    if (maxSoFar < currentMax) maxSoFar = currentMax;
    if (currentMax < 0) currentMax = 0;
  }

  return maxSoFar;
}

// Driver code
console.log(getMaxSubSum([-1, 2, 3, -9]) == 5);
console.log(getMaxSubSum([2, -1, 2, 3, -9]) == 6);
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) == 11);
console.log(getMaxSubSum([-2, -1, 1, 2]) == 3);
console.log(getMaxSubSum([100, -9, 2, -3, 5]) == 100);
console.log(getMaxSubSum([1, 2, 3]) == 6);


// Problem: https://javascript.info/task/camelcase
function camelize(str) {
  let words = str.split('-');
  words = words.map(function (word, index) {
    if(index === 0) return word;
    let upCaseCode = word.charCodeAt(0) - 32;
    if ( !upCaseCode ) return '';
    let upCase = String.fromCharCode(upCaseCode);
    return upCase + word.slice(1);
  });

  return words.join('');
}

// Driver Code
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));


// Problem: https://javascript.info/task/filter-range-in-place
function filterRangeInPlace(arr, min, max) {
  arr = arr.filter
}


// Problem: https://javascript.info/task/calculator-extendable
function Calculator() {
  this.operations = {
    '+': (a, b) => a + b,
    "-": (a, b) => a - b
  };

  this.calculate = function(expr) {
    let [a, opr, b] = expr.split(' ');
    return this.operations[opr](+a, +b);
  }

  this.addMethod = function(opr, callback) {
    this.operations[opr] = callback;
  }
}

// Driver code
let powerCalc = new Calculator;
console.log(powerCalc.calculate("3 + 7"));
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
console.log(powerCalc.calculate("2 ** 3"));
