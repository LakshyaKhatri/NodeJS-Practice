'use strict'
const prompt = require("prompt-sync")();

/*
 ===============================================================================
 * Problem: https://javascript.info/task/search-algorithm
 ===============================================================================
*/
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

console.log({ pen: pockets.pen });


/*
 ===============================================================================
 * Problem: https://javascript.info/task/defer-to-prototype-extended
 ===============================================================================
*/
Function.prototype.defer = function(ms) {
  let f = this;
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
  }
};

function f(a, b) {
  console.log( a + b );
}

f.defer(1000)(1, 2);
