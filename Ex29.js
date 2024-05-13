"use strict";
// Question No.29:
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
Object.defineProperty(exports, "__esModule", { value: true });
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// Array of favorite fruits
let favorite_fruits = ["apple", "banana", "strawberry"];
// Check for specific fruits in the array
if (favorite_fruits.includes("apple")) {
    console.log("I really like apples!");
}
else {
    console.log("I don't like apples.");
}
if (favorite_fruits.includes("banana")) {
    console.log("I really like banana!");
}
else {
    console.log("I don't like banana.");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("I really like strawberry!");
}
else {
    console.log("I don't like strawberry.");
}
if (favorite_fruits.includes("oranges")) {
    console.log("I really like oranges!");
}
else {
    console.log("I don't like oranges.");
}
if (favorite_fruits.includes("kiwi")) {
    console.log("I really like kiwi!");
}
else {
    console.log("I don't like kiwi.");
}
