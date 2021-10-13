'use strict'
const prompt = require("prompt-sync")();

// Problem: https://javascript.info/task/object-property-this
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

// console.log( user.ref.name ); // What's the result?
// The above line will throw an error because:
// The function is not assigned to any object and we are in strict mode. Hence, the value
// of `this` will be `undefined` and calling `.name` on undefined will throw this error:
// Cannot read property 'name' of undefined.


// Problem: https://javascript.info/task/calculator
let calculator = {
  read(){
    this.a = +(prompt('Enter first number: '));
    this.b = +(prompt('Enter second number: '));
  },
  sum(){
    if (this.a === undefined) {
      console.log('Use calculator.read() to register input values first');
      return;
    }
    return (this.a + this.b);
  },
  mul(){
    if (this.a === undefined) {
      console.log('Use calculator.read() to register input values first');
      return;
    }
    return (this.a * this.b);
  }
};

console.log(calculator.read());
console.log(calculator.sum());
console.log(calculator.mul());
