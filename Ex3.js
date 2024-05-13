"use strict";
// Question No.3:
// Name Cases: Store a person’s name in a variable,
//  and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
// variable to store a person name..
let PersonName = "Parizah Shaikh";
console.log(PersonName.toUpperCase());
console.log(PersonName.toLowerCase());
// Creating a function to title case a string
function titlecase(sentence) {
    // break the sentence in words and convert those words in lower case
    let words = sentence.toLowerCase().split(" ");
    // converting words into uppercase
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
    // join words back to the sentence
    return words.join(' ');
}
// calling function
console.log(titlecase(PersonName));
// creating function to title case a word
function TitleCaseWord(word) {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
}
// call Function
console.log(TitleCaseWord("Allah"));
