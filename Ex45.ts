// Question No.45:
// Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.



// Answer:
// Define an interface to represent the structure of a car object
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow for arbitrary key-value pairs
}

// Define a function to create a car object
function createCar(manufacturer: string, model: string, ...extras: [string, any][]): Car {
    // Create a new car object with the required properties
    const car: Car = {
        manufacturer: manufacturer,
        model: model
    };

    // Add any additional key-value pairs provided as arguments
    for (const extra of extras) {
        car[extra[0]] = extra[1];
    }

    // Return the created car object
    return car;
}


// Call the function with required information and additional key-value pairs
const myCar: Car = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

// Print the returned object to ensure all information was stored correctly
console.log(myCar);