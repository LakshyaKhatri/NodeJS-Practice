/*
================================================================================
 * Problem: Implement the setTimeout function using native javascript only
================================================================================
*/

function MyArray() {
  this.length = 0;

  this.push = function(element) {
    this[this.length] = element;
    this.length += 1;
  };

  this.pop = function() {
    if (this.length == 0) return;

    element = this[this.length - 1];
    delete this[this.length - 1];
    this.length -= 1;

    return element;
  };

  this.shift = function() {
    if (this.length == 0) return;

    element = this[0];
    for (let i = 0; i < this.length - 1; i++)
      this[i] = this[i + 1];

    delete this[this.length - 1];
    this.length -= 1;
    return element;
  };

  this.unshift = function(element) {
    for (let i = this.length; i > 0; i--)
      this[i] = this[i - 1];

    this[0] = element;
    this.length += 1;
  };

  this.splice = function(start, deleteCount, ...elements) {
    if (!deleteCount || deleteCount < 0) deleteCount = 0;
    let removed = {};

    for (let i = start; i < start + deleteCount; i++)
      removed[i] = this[i];
    removed.length = deleteCount;

    let result = {};
    for (let i = 0; i < start; i++)
      result[i] = this[i];
    result.length = start;

    for (let i = 0; i < elements.length; i++)
      result[result.length + i] = elements[i];
    result.length += elements.length;

    let index = 0;
    for (let i = start + deleteCount; i < this.length; i++) {
      result[result.length + index] = this[i];
      index++;
    }
    result.length += this.length - (start + deleteCount);

    for (let i = 0; i < result.length; i++)
      this[i] = result[i];
    this.length = result.length;

    return removed;
  };

  this.indexOf = function(element) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === element) return i;
    }
    return -1;
  };

  this.forEach = function(cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i, this);
    }
  };
}
