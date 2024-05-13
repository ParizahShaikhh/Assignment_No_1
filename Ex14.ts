// Question No.14:
// Guest List: If you could invite anyone, living or deceased, to dinner,
// who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

// Store names of people to invite to dinner in an array
let dinnerGuests = ["Kamran Khan Tessori", "Zia Khan", "Daniyal Nagori"];

// Print an invitation message to each person
dinnerGuests.forEach(guest => {
    console.log(`Dear ${guest}, \nYou are cordially invited to dinner at my place. It would be an honor to have your presence. \n\nSincerely,\n[Parizah Shaikh]`);
});