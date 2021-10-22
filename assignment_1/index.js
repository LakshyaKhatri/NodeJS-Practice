'use strict'
const prompt = require("prompt-sync")();

/*
 ===============================================================================
 * Problem 2: Write a JavaScript program to test if the first character of a
 *            string is uppercase or not, if not then set the first character
 *            to uppercase.
 *
 ===============================================================================
 */
function toUpCase(str) {
  let firstCharCode = str.charCodeAt(0);
  if (firstCharCode >= 97 && firstCharCode < 123) {
    let upCaseCharacter = String.fromCharCode(firstCharCode - 32);
    return upCaseCharacter + str.slice(1);
  }
  return str;
}

console.log(toUpCase('abc'));
console.log(toUpCase('Abc'));


/*
 ===============================================================================
 * Problem3: Create a constructor function Calculator that creates objects with 3 methods:
 *  read() asks for two values using prompt and remembers them in object properties.
 *  sum() returns the sum of these properties.
 *  mul() returns the multiplication product of these properties.
 ==============================================================================
 */

function Calculator() {
  this.read = function() {
    this.a = +prompt('Enter first number: ');
    this.b = +prompt('Enter second number: ');
  };

  this.sum = function() {
    if (this.a === undefined) {
      console.log('Use calculator.read() to register input values first');
      return;
    }
    return (this.a + this.b);
  };

  this.mul = function() {
    if (this.a === undefined) {
      console.log('Use calculator.read() to register input values first');
      return;
    }
    return (this.a * this.b);
  }
};

let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );
