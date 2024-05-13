"use strict";
// Question No.37:
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message,
// and a shirt of any size with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
// Answer:
// Define the make_shirt function with default parameters
function make_shirt(size = "Large", message = "I love Typescript") {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}".`);
}
// Create a large shirt with default message
make_shirt();
// Create a medium shirt with default message
make_shirt("Medium");
// Create a shirt of any size with a different message
make_shirt("Small", "Hello, World!");
