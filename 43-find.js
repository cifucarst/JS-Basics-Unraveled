/* find()
Returns the value of the first element in the array that satisfies the provided testing function. */

// Method that iterates over an array
// Method that does not modify the original array (Immutability).
const multipleOf5 = [5, 10, 15, 20];

// Finding the first number greater than 10 in the array
const firstNumberGreaterThan10 = multipleOf5.find(number => number > 10);

console.log(multipleOf5); // Output: [5, 10, 15, 20]
console.log(firstNumberGreaterThan10); // Output: 15

//_________________________________________________________________________________


const people = [
    { name: 'Juan', age: 25 },
    { name: 'María', age: 30 },
    { name: 'Pedro', age: 35 }
]

// Finding a person object with the name 'María'
const foundPerson = people.find(function(person) {
    return person.name === 'María';
});

console.log('Person found: ', foundPerson); // Output: { name: 'María', age: 30 }

//_________________________________________________________________________________

const numbers = [10, 20, 30, 40, 50];

// Finding a number greater than 20 with an index greater than 2
const findSpecifiedNumber = numbers.find(function(number, index) {
    return number > 20 && index > 2;
});

console.log(findSpecifiedNumber); // Output: 40