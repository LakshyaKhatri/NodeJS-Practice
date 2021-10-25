'use strict'
const prompt = require("prompt-sync")();

/*
================================================================================
 * Problem: Deep clone Javascript Object (without using any internal
 *          methods of cloning). All properties along with functions, prototypes
 *          should get cloned to target objects.
================================================================================
*/
function deepClone(obj) {
  let clone;

  if (Array.isArray(obj)) {
    clone = [];
    for(const element of obj)
      clone.push(deepClone(element));
  } else if (typeof obj === 'object') {
    clone = {};
    for(const prop in obj)
      clone[prop] = deepClone(obj[prop]);
  } else {
    clone = obj;
  }

  Object.setPrototypeOf(clone, Object.getPrototypeOf(obj));
  return clone;
}


// Driver code
let user = {
  firstName: 'John',
  lastName: 'Doe',

  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  },

  child: {
    firstName: 'Junior',
    lastName: 'Doe',
    stomuch: ['apple', 'milk', ['almond', 'cashew']],

    isHungry: function() {
      return this.stomuch.length === 0;
    },

    feed: function(food) {
      this.stomuch.push(food);
    }
  }
};

let user2 = deepClone(user);
console.log(JSON.stringify(user2, null, 2));
console.log(user == user2);
console.log(user2.fullName());
console.log(user2.child.isHungry());
