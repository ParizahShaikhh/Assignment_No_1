// Question No.13:
// Your Own Array: Think of your favorite mode of transportation,
// such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”

// Store examples of favorite mode of transportation in an array
let transportationModes = ["Tesla Model S", "BMW 5 Series", "Toyota Prius", "Honda Civic", "Range Rover"];

// Print statements about each transportation mode
transportationModes.forEach(mode => {
    console.log(`I would like to own a ${mode}.`);
});