// Mutability

fruits = ['apple','banana','orange'];
fruits.push('watermelon');

// Inmutability
const newFruits = fruits.concat(['grape','kiwi']);
console.log(fruits);
console.log(newFruits);

// Checking arrays with Array.isArray()
const isArray = Array.isArray(fruits);
console.log(isArray);

// practical exercise: sum all elements of an array
const numbersArray = [1,2,3,4,5];
let sum = 0
for(let i = 0; i < numbersArray.length; i++){
    sum += numbersArray[i];
};
console.log(sum);