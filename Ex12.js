"use strict";
// Question No.12:
// Greetings: Start with the array you used in Exercise 11,
// but instead of just printing each person’s name,
// print a message to them. The text of each message should be the same,
// but each message should be personalized with the person’s name.
Object.defineProperty(exports, "__esModule", { value: true });
// Store names of friends in an array
let friends = ["Arish", "Aries", "Parizah shaikh", "Hunaina"];
// Print a personalized greeting message to each person.
friends.forEach(name => {
    console.log(`Hello, ${name}! Have a great day!`);
});
