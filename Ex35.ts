// Question No.35:
// Animals: Think of at least three different animals that have a common characteristic.
//  Store the names of these animals in a list,
//  and then use a for loop to print out the name of each animal.
//  • Modify your program to print a statement about each animal,
//  such as A dog would make a great pet.
//  • Add a line at the end of your program stating what these animals have in common.
//  You could print a sentence such as Any of these animals would make a great pet!



// Array of animals with a common characteristic
let animals = ["dog", "cat", "rabbit"];

// Print the names of each animal
console.log("Animals:")
for (let animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
console.log("\nStatements about each animal:");
for (const animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

// Print the common characteristic
console.log("\n Common characteristic:");
console.log("Any of these animals would make a great pet!");