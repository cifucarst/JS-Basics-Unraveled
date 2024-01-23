/*
array.forEach((item) => {
    code to execute
})
*/

let list = ["eat","sleep","code","repeat"]

list.forEach((item) => {
    console.log(item)
})

//_______________________________________________________________________________

// Example 1: Iterating over an array of numbers
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
});

//_______________________________________________________________________________

// Example 2: Using arrow functions
const numeros = [1, 2, 3, 4, 5];

numeros.forEach(number => console.log(number));

//_______________________________________________________________________________

// Example 3: Modifying elements during iteration
const doubledNumbers = [];

numeros.forEach(function(number) {
  doubledNumbers.push(number * 2);
});

console.log(doubledNumbers);
// Output: [2, 4, 6, 8, 10]