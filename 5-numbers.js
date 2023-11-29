// 1. Integer and decimal types
const integer = 42;
const decimal = 3.14;
console.log(typeof integer, typeof decimal); //number number

// 2. Scientific notation
const scientific = 5e3;

// 3. Infinity and NaN
const infinity = Infinity;
const notANumber = NaN;

// Arithmetic operations
// 1. Addition, subtraction, multiplication, and division
const sum = 3 + 4;
const subtraction = 4 - 4;
const multiplication = 4 * 9;
const division = 4 / 2;

// 2. Modulus and exponentiation
const modulus = 15 % 8;
const exponentiation = 2 ** 3;

// Precision
const result = 0.1 + 0.2;
console.log(result); // No precision
console.log(result.toFixed(1));

console.log(result === 0.3); // The result is false due to lack of precision

// Advanced operations
const squareRoot = Math.sqrt(16);
console.log(squareRoot);
const absoluteValue = Math.abs(-7);
console.log(absoluteValue);
const random = Math.random();
console.log(random);
