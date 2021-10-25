'use strict'
const prompt = require("prompt-sync")();

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
