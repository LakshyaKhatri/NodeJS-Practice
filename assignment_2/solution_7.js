/*
================================================================================
 * Problem: Provided a function that checks the validity of string and returns
 *          results via a callback.
 *          (input is said to be valid if it is a lowercase string)
 *          Check if values in any givern array are valid or not.
================================================================================
*/

function validateString(input, callback) {
  setTimeout(function () {
    if (typeof input === "string" && input === input.toLowerCase()) {
      return callback(null, true);
    }
    return callback(new Error('Invalid string'), null);

  }, 500);
}

let inptArray = ['first', 'Second', 'thiRd', 4, false, 'true'];

let result = inptArray.reduce((result, element) => {
  validateString(element, (error, valid) => {
    result[element] = !!valid;
  });
  return result;
}, {});

setTimeout(() => console.log(result), 500);
