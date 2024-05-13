"use strict";
// Question No.19:
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
// Working with Exercise 18..
// Define array of places to visit
let placesToVisit = ["Turkey", "Dubai", "Saudi Arabia", "Azerbaijan", "Iran", "Iraq"];
// Print message indicating the number of places you want to visit.
console.log(`\nYou are inviting ${placesToVisit.length} people to dinner.`);
// Print original order
console.log("\nOriginal Order:", placesToVisit);
// Print alphabetical order without modifying original list
console.log("\nAlphabetical Order:", [...placesToVisit].sort());
// Show original order is maintained
console.log("\nOriginal Order:", placesToVisit);
// Print reverse alphabetical order without modifying original list
console.log("\nReverse Alphabetical Order:", [...placesToVisit].sort().reverse());
// Show original order is maintained
console.log("\nOriginal Order:", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed Order:", placesToVisit);
// Reverse the order again to restore original order
placesToVisit.reverse();
console.log("\nOriginal Order:", placesToVisit);
// Sort the array alphabetically
placesToVisit.sort();
console.log("\nSorted Alphabetically:", placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted Reverse Alphabetically:", placesToVisit);
