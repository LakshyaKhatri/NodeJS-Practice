/*
================================================================================
 * Problem: Write two functions that use Promises that you can chain! The first
 *          function, makeAllCaps(), will take in an array of words and
 *          capitalize them, and then the second function, sortWords(), will
 *          sort the words in alphabetical order. If the Array contains anything
 *          but Strings, it should throw an error.
================================================================================
*/

function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    let capWords = words.map(word => {
      if (typeof word !== 'string') reject(new Error('Only array of strings is allowed.'));
      return word.toUpperCase();
    });
    resolve(capWords);
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    words.sort((a, b) => {
      if (typeof a !== 'string' || typeof b !== 'string') reject(new Error('Only array of strings is allowed.'));
      return a.localeCompare(b);
    });
    resolve(words);
  });
}


// Driver Code
let words = ['stu', 'vwx', 'ghi', 'pqr', 'jkl', 'abc', 'mno', 'def'];
makeAllCaps(words)
  .then(capWords => sortWords(capWords))
  .then(sortedWords => console.log(sortedWords))
  .catch(error => console.log(error));
