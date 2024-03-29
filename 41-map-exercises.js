/* Farenheit to Celsius conversion

Create a program that takes an array of temperatures in Farenheit as input and converts
them to celsius using the formula
c = 5/9 * (F-32)
*/

const temperaturesInFahrenheit = [32,68,95,212,123,456,765,323]

// Convert temperatures from Fahrenheit to Celsius
const temperatureInCelsius = temperaturesInFahrenheit.map(fahrenheit => {
    const celsius = parseInt(5 / 9 * (fahrenheit - 32))
    return celsius
})

console.log(`temperature in Fahrenheit ${temperaturesInFahrenheit}`)
console.log(`temperatures in Celsius: ${temperatureInCelsius}`)


// ________________________________________________________________________

/* Sum of elements in an array
Create a program that takes an array of numbers as input and calculates the sum of all 
elements in that array.
*/

const numbers = [1,2,3,4,5]

let sum = 0

// Calculate sum of numbers in the array
numbers.forEach(number => {
    sum += number
})
console.log(`array of numbers: ${numbers}`)
console.log(`Sum of numbers: ${sum}`)