// Question No.41:
// Magicians: Make a array of magician’s names.
// Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.


// Answer:
// Define the function show_magicians
function show_magicians(Magicians: string[]): void {
    console.log("Magicians:");
    Magicians.forEach(magician => console.log(magician));
}

// Array of magician's names
let magicians: string[] = ["Penn Jillette", "Teller", "David Copperfield", "Harry Houdini"];


// Call the show_magicians function
show_magicians(magicians);