// Question No.43:
// Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.



// Answer:
function makeGreat(magicians: string[]): string[] {
    // Create a new array to store modified names
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        const greatMagician: string = "The Great " + magician;
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}


// Original array of magician names
const magicians: string[] = ["Penn Jillette.", "Teller.", "David Copperfield.", "Harry Houdini."];

// Call makeGreat() with a copy of the original array
let greatMagicians: string[] = makeGreat([...magicians]);


// Show both original and modified arrays
console.log("Original magicians:");
showMagicians(magicians);
console.log("\nGreat magicians:");
showMagicians(greatMagicians);