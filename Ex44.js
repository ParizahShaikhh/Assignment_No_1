"use strict";
// Question No.44:
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times,
// using a different number of arguments each time.
Object.defineProperty(exports, "__esModule", { value: true });
// Answer:
// Define a function makeSandwich that accepts a variable number of arguments representing sandwich items
function makeSandwich(...items) {
    // Print a summary of the sandwich being ordered
    console.log("Sandwich Summary:");
    // Check if the sandwich is empty
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    }
    else {
        // Print the items included in the sandwich
        console.log("You ordered a sandwich with the following items:");
        for (const item of items) {
            console.log("- " + item);
        }
    }
    // Print an empty line for clarity
    console.log();
}
// Call the makeSandwich function three times with different number of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato"); // Sandwich with multiple items
makeSandwich("Turkey", "Swiss"); // Sandwich with two items
makeSandwich("Peanut Butter", "Jelly"); // Sandwich with two items
