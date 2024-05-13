// Question No.6:
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.



// Store the name with whitespace
let whiteSpaceName = "\n\t Parizah Shaikh \n\t";

// Print the name with whitespace
console.log("Name with whitespace:");
console.log(whiteSpaceName);

// Strip whitespace and print the name
let withoutWhiteSpaceName = whiteSpaceName.trim();
console.log("\nStripped name:");
console.log(withoutWhiteSpaceName);