// Question No.17:
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.



// Print message about inviting only two people
console.log("\nSorry, I can only invite two peoples for dinner.");


// Original guest list
let dinnerGuests = ["Sania Shaikh", "Kamran Khan Tessori", "Hunaina", "Zia Khan", "Daniyal Nagori", "Noor e Saba"];


// Remove guests until only two remain
while (dinnerGuests.length > 2) {
    let removedGuest = dinnerGuests.pop();
    if (removedGuest) {
        console.log(`\nSorry, ${removedGuest}, I can't invite you to dinner`);
    }
}
// Invite the remaining two guests
for (let guest of dinnerGuests) {
    console.log(`\nHey ${guest}, you're still invited to dinner!`);
}

// Clear the list
dinnerGuests.pop();
dinnerGuests.pop();

// Print to ensure list is empty
console.log("Empty guest list:", dinnerGuests);