/* includes()
Determines whether an array includes a certain
element, returning true or false accordingly
*/

// include with numbers

const numbers = [1,2,3,4,5]
const result1 = numbers.includes(13)
console.log(result1)

// _________________________________________

/* indexOf()
Returns the first index at which a given element
can be found in the array, or returns -1 if the element is not present
*/

const fruits = ['apple','cherry','grape','mango']

const index1 = fruits.indexOf('blueberry')

console.log(index1) // -1 

// _________________________________________

// lastIndexOf()

const numbersAgain = [2,4,6,8,10,6]

const lastIndex1 = numbersAgain.lastIndexOf(6)
console.log(lastIndex1) // 5