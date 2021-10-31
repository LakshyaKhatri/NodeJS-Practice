/*
================================================================================
 * Problem: Implement the setTimeout function using native javascript only
================================================================================
*/
function setTimeout2(callback, ms, ...args) {
  let now = Date.now();
  let future = now + ms;

  while(now <= future){
    now = Date.now();
  }
  callback(...args);
}

setTimeout2(() => console.log('Hi there'), 3000);
// setTimeout(() => console.log('Hi there'), 3000);
