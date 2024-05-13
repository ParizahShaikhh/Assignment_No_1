"use strict";
// Question No.15:
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// Store names of people to invite to dinner in an array
let dinnerGuests = ["Kamran Khan Tessori", "Zia Khan", "Daniyal Nagori", "Parizah Shaikh"];
// Print an invitation message to each person
dinnerGuests.forEach(guest => {
    console.log(`\nDear ${guest}, \nYou are cordially invited to dinner at my place. It would be an honor to have your presence. \n\nSincerely,\n[Parizah Shaikh]`);
});
// Print the name of the guest who can't make it
let guestWhoCantMakeIt = "Parizah Shaikh";
console.log(`\nUnfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.`);
// Replace the guest who can't make it with a new person
let newGuest = "Hunaina";
let indexOfGuestWhoCantMakeIt = dinnerGuests.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    dinnerGuests.splice(indexOfGuestWhoCantMakeIt, 1, newGuest);
}
// Print a second set of invitation messages
console.log("\nSecond set of invitations:");
dinnerGuests.forEach(guest => {
    console.log(`\nDear ${guest}, \nYou are cordially invited to dinner at my place. It would be an honor to have your presence. \n\nSincerely,\n[Parizah Shaikh]`);
});
