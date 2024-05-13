// Question No.22:
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// Define list of people to invite to dinner
let dinnerGuests = ["Kamran Khan Tessori", "Zia Khan", "Daniyal Nagori"];

// Try to access an index that is out of bounds to produce an error
console.log(dinnerGuests[3]); // This line will cause an array index error since there is no element at index 3

 // Print message indicating the number of people invited to dinner.
 console.log(`\nYou are inviting ${dinnerGuests.length} people to dinner.`);

 // Print invitation message to each person
 for (let guest of dinnerGuests) {
    console.log(`\nDear ${guest}, you are cordially invited to dinner!`);
 }
