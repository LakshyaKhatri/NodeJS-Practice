/*
================================================================================
 * Problem: Write a function testNum that takes a number as an argument and
 *          returns a Promise that tests if the value is less than or higher
 *          than the value 10.
================================================================================
*/
function greaterThanTen(num) {
  return new Promise((resolve, reject) => {
    num > 10 ? resolve(true) : reject(false);
  });
}


// Driver Code
greaterThanTen(15)
  .then(result => console.log('Greater Than 10'))
  .catch(error => console.log('Less Than 10'))

greaterThanTen(8)
  .then(result => console.log('Greater Than 10'))
  .catch(error => console.log('Less Than 10'))
