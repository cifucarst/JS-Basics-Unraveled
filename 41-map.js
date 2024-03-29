/*
Transforming with map()
Allows applying a function to each element
of an array and constructing a new array with the results
*/

// Methods that iterate over an array.
// Methods that do not modify the original array (immutability)

const numbers = [1,2,3,4,5]
const squaredNumbers = numbers.map(num => num * num) // Squares each number in the array

console.log(numbers) // Original array remains unchanged
console.log(squaredNumbers) // New array with squared numbers

//__________________________________________

const doubles = numbers.map(function(number){
    return number * 2
}) // Doubles each number in the array

console.log(numbers) // Original array remains unchanged
console.log(doubles) // New array with doubled numbers

//__________________________________________


const products = [
    {id: "wofjdswfa", name: "t-shirt", price:500},
    {id: "eiowtwrio", name: "sneakers", price:2000},
    {id: "fieowetng", name: "pants", price:1500}
]

const discountedProducts = products.map(function(product){
    // Apply discount only if the price is greater than or equal to 100
    if (product.price < 100) return product
    
    return {
        ...product,
        price: product.price * 0.9 // Apply a 10% discount
    }
})

console.log(products) // Original array remains unchanged
console.log(discountedProducts) // New array with discounted products

//__________________________________________

// Extracting data from an object

const productIds = products.map(function(product){
    return product.id
}) // Extracts IDs from the array of products

const productIdsArrows = products.map(({id}) => id) // Using arrow function to extract IDs

console.log(productIds) // Array of product IDs
console.log(productIdsArrows) // Array of product IDs (using arrow function)
