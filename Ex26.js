"use strict";
// Question No.26:
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// Version that runs the if block
let alien_color = "red";
if (alien_color === "red") {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
// Version that runs the else block
let alien_color1 = "green"; // Assigning a different color
if (alien_color1 === "red") {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
