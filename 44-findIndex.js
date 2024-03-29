/* findIndex()
Returns the index of the first element in an array that satisfies a provided condition
as a function. If no element satisfies the condition, it returns -1. */

// Array of random numbers
const randomNumber = [6, 14, 27, 56, 40];

// Finding the index of the first number greater than 50 in the array
const indexNumber = randomNumber.findIndex(number => number > 50);

// Output the array of random numbers and the index of the number greater than 50
console.log(`Random numbers: ${randomNumber}`);
console.log(`Index number: ${indexNumber}`);