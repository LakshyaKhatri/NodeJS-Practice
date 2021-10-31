/*
================================================================================
 * Problem: The following recursive code will cause a stack overflow if the
 *          array "somelist" is too large. How can you fix this and still retain
 *          the recursive pattern?
================================================================================
*/

var somelist = [1,2,3,4,5,6,7,8,9,10];

var nextItem = function() {
  var item = somelist.pop();
  if (item) {
    setImmediate(() => {
      console.log(item);
      nextItem();
    });
  }
};


nextItem();
