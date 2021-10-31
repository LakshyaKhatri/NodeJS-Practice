/*
================================================================================
 * Problem: Using Promise create a function named 'sleep' that should invoke a
 *          callback function after x seconds. NOTE: sleep function should not
 *          block the call stack.
================================================================================
*/
function sleep(cb, ms, ...args) {
  let promise = new Promise(resolve => setTimeout(resolve, ms));
  promise.then(() => cb(...args));
}

sleep(() => console.log('Hey There'), 3000);
console.log('Before Sleep');
