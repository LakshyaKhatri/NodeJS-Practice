'use strict'
const prompt = require("prompt-sync")();

// Problem: https://javascript.info/task/ucfirst
function ucFirst(inputStr) {
  let titlezed = String.fromCodePoint(inputStr.codePointAt(0) - 32) + inputStr.slice(1, );
  return titlezed;
}

console.log(ucFirst("john") == "John");


// Problem: https://javascript.info/task/check-spam
function checkSpam(inputStr) {
  let lowerCasedInpt = inputStr.toLowerCase();
  return (lowerCasedInpt.includes('viagra') || lowerCasedInpt.includes('xxx'));
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));


// Problem: https://javascript.info/task/truncate
function truncate(str, maxlength) {
  if (str.length <= maxlength) return str;
  return str.slice(0, maxlength - 1) + '…';
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));
