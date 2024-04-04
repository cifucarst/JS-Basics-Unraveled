// spread operator

const morseCode1 = ['....', '---'] // Morse code representations for letters H and O
const morseCode2 = ['.-..', '.-'] // Morse code representations for letters L and A

function combineMorseMessages(morseCode1, morseCode2){
    return [...morseCode1, ...morseCode2]; // Combines two arrays using spread operator
}
console.log("\n")
console.log(combineMorseMessages(morseCode1, morseCode2)) // Output: Combined array of morse codes

// _______________________________________________________________________________

const numbers = [1, 2, 3]
const string = "string"

console.log(combineMorseMessages(numbers, string)) // Output: Combined array of numbers and a string (TypeError)

// _______________________________________________________________________________

// Expanding arguments in functions:
// The spread operator can be used to pass a variable number of arguments to a function:

function sum(a, b, c) {
    return a + b + c;
}

const numbersArray = [1, 2, 3];

const result = sum(...numbersArray);

console.log(result); // Output: 6

// _______________________________________________________________________________

// Creating copies of objects:
// You can also use the spread operator to create shallow copies of objects:

const originalObject = { a: 1, b: 2 };
const copyObject = { ...originalObject };

console.log(copyObject); // Output: Shallow copy of the original object

// _______________________________________________________________________________

// Combining objects:

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject); // Output: Merged object with combined properties


// In summary, the spread operator ... is a useful tool in JavaScript for expanding 
// array elements, creating copies of arrays and objects, passing arguments to functions, and 
// combining objects. It's a versatile feature that allows you to write more 
// concise and readable code.