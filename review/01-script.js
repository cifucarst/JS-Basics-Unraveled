/* 

#01 OPERATORS AND CONTROL STRUCTURES

Create examples using all types of operators in your language: Arithmetic, logical, comparison, assignment, identity, membership, bitwise...(Keep in mind that each language may have different ones).
Using operations with operators of your choice, create examples that represent all types of control structures that exist in your language: Conditionals, loops, exceptions...
You must print the result of all examples to the console.

EXTRA CHALLENGE (optional):
Create a program that prints to the console all numbers between 10 and 55 (inclusive), which are even and not 16 or multiples of 3.

Surely, by carefully reviewing the possibilities, you have discovered something new. */

// --------------------------------------- RESOLUTION --------------------------------------- //

// <<<---------------------->>> Types of operators <<<---------------------->>>

/* In JavaScript there are 10 types of operators */

// ---------------> 1. Arithmetic Operators <---------------

let sum = 1 + 1;
let subtraction = 5 - 2;
let multiplication = 2 * 3;
let division = 4 / 2;
let modulus = 4 % 2; // Returns the remainder of the division of 4 by 2
let exponentiation = 2 ** 3; // Raises 2 to the power of 3

// ---------------> 2. Assignment Operators <---------------

let x = 2; // assignment operator
x += 1; // addition and assignment operator, equivalent to x = x + 1
x -= 1; // subtraction and assignment operator, equivalent to x = x - 1
x *= 1; // multiplication and assignment operator, equivalent to x = x * 1
x /= 2; // division and assignment operator, equivalent to x = x / 2
x %= 2; // modulus and assignment operator, equivalent to x = x % 2
x **= 2; // exponentiation and assignment operator, equivalent to x = x ** 2

// ---------------> 3. Comparison Operators <---------------

// Examples providing a true result
let y = 4;
let z = 5;
let w = 1;
console.log(y == '4'); // Value equality check without type check
console.log(y != 3); // Inequality check without type check
console.log(y === 4); // Value and type equality check
console.log(y !== 3); // Inequality check considering value or type
console.log(z > y); // Greater than check
console.log(z >= y); // Greater than or equal to check
console.log(w < y); // Less than check
console.log(w <= y); // Less than or equal to check

// ---------------> 4. String Operators <---------------

let name = 'My' + 'GitHub';
console.log(name);

// ---------------> 5. Logical Operators <---------------

// Ternary operator
let age = 15;
age > 18 ? console.log('I am of legal age') : console.log('I am not of legal age');

// AND (&&)
console.log(true && true); // Returns true if both operands are true; otherwise, returns false.
console.log(0 && true); // Returns 0
// Considering the form "expr1 && expr2", && returns expr1 if it can be converted to false; otherwise, returns expr2.
// Examples of expressions that can be converted to false are null, 0, NaN, the empty string ("") or undefined.
// In the example, the log prints 0

// OR (||)
// The logical OR operator sets a condition where it returns the first value if it is true, or the second value if the first one is false.
// This can be read as «returns a (if true), or if not, b».

console.log(false || false); // Returns false
console.log(true || false); // Returns true
console.log(false || true); // Returns true
console.log(true || true); // Returns true
// Considering that any value above 0 is considered true and that any value that is 0 or falsy is considered false:

console.log(0 || null); // Returns false
console.log(44 || undefined); // Returns true
console.log(0 || 17); // Returns true
console.log(4 || 10); // Returns true

// Nullish coalescing (??)
// the a ?? b operator returns b only when a is undefined or null. Unlike the OR operator, with values like false, 0 or "", it does not return b.

console.log(42 || 50); // returns 42
console.log(42 ?? 50); // returns 42
console.log(false || 50); // returns 50
console.log(false ?? 50); // returns false
console.log(0 || 50); // returns 50
console.log(0 ?? 50); // returns 0
console.log(null || 50); // returns 50
console.log(null ?? 50); // returns 50
console.log(undefined || 50); // returns 50
console.log(undefined ?? 50); // returns 50

// Logical nullish assignment (??=)
// Especially useful in cases where a variable has the value null or undefined and you want to change its value

// Without logical nullish assignment
let t = null;
if (t === null || t === undefined) {
    t = 120;
}

// With logical nullish assignment
t ??= 120;

// Optional chaining (?.)

// This operator allows accessing properties even if their parent element does not exist to avoid an error.

// Example: Assuming you have a user object:

const user = {
    name: 'Moure',
    role: 'streamer',
    attributes: {
        life: 100,
        power: 25,
    },
};

// If you try to access its properties:

user.attributes.life;
user.attributes.power;

// Assuming that the attributes property of the user object does not yet exist (but it will), if you try to access the properties without attributes existing or occurring a match, an error will occur