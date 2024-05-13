// Question No.31:
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


// Array of usernames
let userNames = ["admin", "sania", "dua", "laraib", "sumaira"];

// Check if the list of users is not empty
if (userNames.length > 0) {
    // Loop through the array and print greetings
    for (let username of userNames) {
        if (username === "admin"){
            console.log("Hello admin, would you like to see a status report?");
        } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}  else {
    console.log("We need to find some users!");
}

// Remove all usernames from the array
userNames = [];

// Check if the list of users is not empty after removal
if (userNames.length > 0) {
    // Loop through the array and print greetings (should not execute)
    for (let username of userNames) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
} else {
    console.log("We need to finds some users!");
}