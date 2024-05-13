"use strict";
// Question No.39:
// City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
Object.defineProperty(exports, "__esModule", { value: true });
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
// Answer:
// Define the city_country function
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Call the function with three different city-country pairs
let city1 = city_country("Lahore", "Pakistan");
let city2 = city_country("New York", "USA");
let city3 = city_country("Tokyo", "Japan");
// Print the returned values
console.log(city1);
console.log(city2);
console.log(city3);
