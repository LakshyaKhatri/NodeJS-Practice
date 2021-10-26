/*
================================================================================
 * Problem: Write a regex pattern to match the valid email address
================================================================================
*/

let cardNumberRegex = /^\d{4}((\-| )?)\d{4}\1\d{4}\1\d{4}$/;

// Driver Code
console.log(cardNumberRegex.test('1234 5678 9123 4564'));
console.log(cardNumberRegex.test('1234-5678-9123-4564'));
console.log(cardNumberRegex.test('1234567891234564'));
console.log(cardNumberRegex.test('12345678-9123-4564'));
console.log(cardNumberRegex.test('1234 5678-9123 4564'));
console.log(cardNumberRegex.test('1234 5678-9123 4564 '));
console.log(cardNumberRegex.test('1234 5678-9123 4564 7984'));
