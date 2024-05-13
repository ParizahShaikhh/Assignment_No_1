"use strict";
// Question No.24:
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
Object.defineProperty(exports, "__esModule", { value: true });
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Tests for equality and inequality with strings.
let fruit1 = 'apple';
let fruit2 = 'banana';
console.log("Is fruit1  equal to 'apple'? I predict False.");
console.log(fruit2 === 'apple');
console.log("Is fruit2 not equal to 'apple'? I predict True.");
console.log(fruit2 !== 'apple');
// Tests using the lower case function.
let word1 = 'Hello';
let word2 = 'hello';
console.log("Is word1 equal to word2 in lowercase? I predict True.");
console.log(word1.toLowerCase() === word2.toLowerCase());
console.log("Is word1 not equal to word2 in lowercase? I predict False.");
console.log(word1.toLowerCase() !== word2.toLowerCase());
// Numerical tests
let num1 = 10;
let num2 = 5;
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);
console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2);
// Tests using "and" and "or" operators
let sunny = true;
let warm = true;
console.log("Is it sunny and warm? I predict True.");
console.log(sunny && warm);
let raining = false;
let sunny1 = false;
console.log("Is it raining? I predict False.");
console.log(raining || sunny1);
// Test whether an item is in an array
let colors = ["red", "blue", "black"];
console.log("Is 'blue' in colors? I predict True.");
console.log(colors.includes("blue"));
// Test whether an item is not in an array
console.log("Is 'yellow' not in colors? I predict False.");
console.log(colors.includes("yellow"));
