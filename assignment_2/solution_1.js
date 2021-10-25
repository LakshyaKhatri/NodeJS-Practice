'use strict'
const prompt = require("prompt-sync")();

/*
================================================================================
 * Problem: Write a regex pattern that matches the password:
 *          a. Uppercase (A-Z) and lowercase (a-z) English letters.
 *          b. Digits (0-9).
 *          c. Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
 *
================================================================================
*/
let passwordRegex = /^([\w!#\$%&'\*\+\-\/=\?\^_`{\|}~]+\.?)*[\w!#\$%&'\*\+\-\/=\?\^_`{\|}~]$/gi;

// Driver Code
console.log(passwordRegex.test('A$_*bc'));
console.log(passwordRegex.test('.A$_*bc'));
console.log(passwordRegex.test('A$_..*bc'));
console.log(passwordRegex.test('A$_.*b._!#.c'));
console.log(passwordRegex.test('A$_.*b._!#.c.'));
