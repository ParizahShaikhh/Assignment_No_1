// Question No.16:
// More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


// Print the original invitations
console.log("Original invitations:");


// Store names of people to invite to dinner in an array
let dinnerGuests = ["Kamran Khan Tessori", "Zia Khan", "Daniyal Nagori"];

// Print an invitation message to each person
dinnerGuests.forEach(guest => {
    console.log(`\nDear ${guest}, \nYou are cordially invited to dinner at my place. It would be an honor to have your presence. \n\nSincerely,\n[Parizah Shaikh]`);
});


// Inform about the bigger dinner table
console.log("\nGreat news! We found a bigger dinner table!");

// Add a new guest to the beginning
dinnerGuests.unshift("Sania Shaikh");

// Add a new guest to the middle
let middleIndex = Math.floor(dinnerGuests.length / 2);
dinnerGuests.splice(middleIndex, 0, "Hunaina");

// Add a new guest to the end
dinnerGuests.push("Noor e Saba");

// Print new invitations
console.log("\nNew invitations:");
dinnerGuests.forEach(guest => {
    console.log(`\nDear ${guest}, \nYou are cordially invited to dinner at my place. It would be an honor to have your presence. \n\nSincerely,\n[Parizah Shaikh]`);
});

