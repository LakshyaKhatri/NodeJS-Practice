/*
================================================================================
 * Problem: Write a regex pattern to match the valid email address
================================================================================
*/

let emailRegex = /^[\w]([\w]*\.?)*@\w+[\w\-]+\.\w+$/

// Driver Code
console.log(emailRegex.test('abc@example.com'));
console.log(emailRegex.test('abc123asd.re@example.com'));
console.log(emailRegex.test('!abc-asd.re@exam$ple.com'));
console.log(emailRegex.test('-abc@example.com'));
