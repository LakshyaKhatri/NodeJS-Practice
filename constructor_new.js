'use strict'

// Problem: Is it possible to create functions A and B so that new A() == new B()?
let obj = {};

function A() { return obj; }
function B() { return obj; }

let a = new A;
let b = new B;

console.log( a == b ); // true
