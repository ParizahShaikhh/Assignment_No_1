"use strict";
// Question No.42:
// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
// Answer:
// Define the function show_magicians
function show_magicians(magicians) {
    console.log("Magicians:");
    magicians.forEach(magician => console.log(magician));
}
// Define the function make_great to modify magician's names
function make_great(magicians) {
    return magicians.map(magician => `The Great ${magician}`);
}
// Array of magician's names
let magicians = ["Penn Jillette.", "Teller.", "David Copperfield.", "Harry Houdini."];
// Call the make_great function to modify magician's names
let great_magicians = make_great(magicians);
// Call the show_magicians function to see the modified list
show_magicians(great_magicians);
