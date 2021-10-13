'use strict'

// Problem: https://javascript.info/task/object-property-this
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

console.log( user.ref.name ); // What's the result?
// The above line will throw an error because:
// The function is not assigned to any object and we are in strict mode. Hence, the value
// of `this` will be `undefined` and calling `.name` on undefined will throw this error:
// Cannot read property 'name' of undefined.
