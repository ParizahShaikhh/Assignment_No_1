// Question No.21:
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


// Define an object for storing country information.
let countries :{[key:string]: { capital:string, population:number, language:string} } = {
   "USA": {
    capital: "Washington, D.C.",
    population: 331000000,
    language: "English"
   },
   "France": {
    capital: "Paris",
    population: 67200000,
    language: "French"
   },
   "Japan": {
    capital: "Tokyo",
    population: 126500000,
    language: "Japanese"
   },
   "Brazil": {
    capital: "Brasilia",
    population: 213000000,
    language: "Portuguese"
   },
   "India": {
    capital: "New Delhi",
    population: 1380000000,
    language: "Hindi, English"
   },
};

// Print the information for each country.
console.log("Information about different countries:");
for (let country in countries){
console.log(`Country: ${country}`);
console.log(`Capital: ${countries[country].capital}`);
console.log(`Population: ${countries[country].population}`);
console.log(`Language: ${countries[country].language}`);
console.log();

}