'use strict'
const prompt = require("prompt-sync")();

// Problem: Is it possible to create functions A and B so that new A() == new B()?
let obj = {};

function A() { return obj; }
function B() { return obj; }

let a = new A;
let b = new B;

console.log( a == b ); // true


// Problem: https://javascript.info/task/calculator-constructor
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


// Problem: https://javascript.info/task/accumulator
function Accumulator(startingValue){
  this.value = startingValue || 0;
  this.read = function() {
    this.value += +prompt('How much to add?: ');
  }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

console.log(accumulator.value); // shows the sum of these values
