/*
================================================================================
 * Problem: Let's assume that we have a for loop that prints 0 to 10 at random
 *          intervals (0 to 6 seconds). We need to modify it using promises to
 *          print sequentially 0 to 10. For example, if 0 takes 6 seconds to
 *          print and 1 takes two seconds to print, then 1 should wait for 0
 *          to print, and so on.
================================================================================
*/

let promises = [Promise.resolve()];

for (let i = 0; i <= 10; i++) {
  let ms = (Math.floor(Math.random() * 7)) * 1000;
  promises[i+1] = promises[i].then(result => {
    return new Promise(resolve => {
      setTimeout(() => resolve(i), ms);
      console.log(i);
    });
  });
}
