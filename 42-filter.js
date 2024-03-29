/*
filter
Creating a new array with elements that meet a condition given by a function
*/

// Method that iterates over an array
// Method that does not modify the original array (immutability)

const firstNumbers = [1,2,3,4,5,6,7,8,9,10]

// Filtering even numbers from the array
const evenNumbers = firstNumbers.filter(number => {
    return number % 2 == 0
})
console.log(`even numbers 1-10: ${evenNumbers}`)

// _____________________________________________________________________


const products = [
    {id: "wofjdswfa", name: "shirt",price:500},
    {id: "eiowtwrio", name: "shoes",price:2000},
    {id: "fieowetng", name: "jeans",price:1500}
]

// Filtering products with a price less than 1000
const cheapProducts = products.filter(product => product.price < 1000)
console.log(cheapProducts)

// _____________________________________________________________________

// Predicate for identifying cheap products
const isCheap = product => product.price < 1000
const cheapProductShort = products.filter(isCheap)
console.log(cheapProductShort)

// _____________________________________________________________________


// Predicate for identifying expensive products
const isExpensive = product => !isCheap(product)
const expensiveProducts = products.filter(isExpensive)
console.log(expensiveProducts)

// _____________________________________________________________________

const numbers = [1,2,3,4,3,1]

// Filtering unique numbers from the array
const uniqueNumbers = numbers.filter((number,position,numbers) => {
    return position === numbers.indexOf(number)
})

console.log(uniqueNumbers)