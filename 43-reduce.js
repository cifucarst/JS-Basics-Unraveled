/* reduce
Executes a reducer function on each element of an array, returning a single value.
*/

const numbersReduce = [1,2,3,4,5]

// Summing up all the numbers in the array
const sums = numbersReduce.reduce((accumulator,currentValue) => accumulator + currentValue,0)
console.log(`numbers reduce: ${numbersReduce}`)
console.log(`sum: ${sums}`)

// _______________________________________________________________________

const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye'];

// Counting the frequency of each word in the array
const wordFrequency = words.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++; // Increment count if word exists
  } else {
    accumulator[currentValue] = 1; // Initialize count to 1 for new words
  }
  return accumulator;
}, {});

console.log("Word frequency:", wordFrequency); // Print the object in a readable format


// _______________________________________________________________________



const numbers = [3,10,20,50]
// Imperative way of obtaining the sum of numbers in an array
let total = 0
for(let number of numbers){
    total += number
}
console.log(total)

// _______________________________________________________________________

// Using reduce to find the sum of numbers in an array
let totalReduce = numbers.reduce((accumulator,number) => {
    return accumulator + number
},0)
console.log(totalReduce)

// _______________________________________________________________________

// Using reduce with a shorter syntax to find the sum of numbers in an array
let totalReduceShort = numbers.reduce((accumulator,number) => accumulator + number,0)
console.log(totalReduceShort)

// _______________________________________________________________________

// Using a separate accumulator function and passing it to reduce
let accumulatorFunction = (accumulating,number) => accumulating + number;
let finalTotal = numbers.reduce(accumulatorFunction,0)
console.log(finalTotal)

// _______________________________________________________________________

// Getting doubles of numbers in an array using `reduce`

const numbers2 = [71,41,19,88,3,65]

// Doubling each number in the array
const accumulateDoubles = (accumulator,number) => {
    accumulator.push(number * 2)
    return accumulator
}
const doubles = numbers2.reduce(accumulateDoubles,[])