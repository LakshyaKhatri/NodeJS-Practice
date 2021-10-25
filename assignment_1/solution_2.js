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
