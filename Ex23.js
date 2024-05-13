"use strict";
// Question No.23:
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
Object.defineProperty(exports, "__esModule", { value: true });
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// Test 1
let number = 10;
console.log("Is number === 10? I predict True.");
console.log(number === 10);
// Test 1
let text = "Parizah Shaikh";
console.log("Is text !== 'happy'? I predict True.");
console.log(text !== "happy");
// Test 3
let x = 3;
let y = 2;
console.log("Is x > y ? I predict True.");
console.log(x > y);
// Test 4
let isRaining = true;
let isSunny = false;
console.log("Is it raining and not sunny? I predict True.");
console.log(isRaining && !isSunny);
// Test 5
let fruits = ["Apple", "Banana", "Orange"];
console.log("Is the length of fruits >= 3? I predict True.");
console.log(fruits.length >= 3);
// Test 6
let temperature = 25;
console.log("Is the temperature < 0 or > 30? I predict False.");
console.log(temperature < 0 || temperature > 30);
// Test 7
let name = "Arish";
console.log("Is name == 'happy'? I predict False.");
console.log(name === 'happy');
// Test 8
let isAfternoon = true;
let isMorning = false;
console.log("Is it morning and not afternoon? I predict False.");
console.log(isMorning && !isAfternoon);
// Test 9
let age = 25;
console.log("Is age < 18? I predict False.");
console.log(age < 18);
// Test 10
let number1 = 10;
let number2 = 20;
console.log("Is number1 > number2? I predict False.");
console.log(number1 > number2);
