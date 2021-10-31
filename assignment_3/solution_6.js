/*
================================================================================
 * Problem: Give the reasons for the output the below snippet gives.
 *          Also, modify the snippet to print values from 0 to 9.
================================================================================
*/

for(var i = 0; i < 10; i++) {
  let a = i;
  setTimeout(function() {
    console.log(a);
  }, 10);
}
