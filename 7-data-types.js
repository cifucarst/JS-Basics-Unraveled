// Null
const snoopy = null;
console.log(snoopy);
console.log(typeof snoopy);

// Undefined
let name;
console.log(name); //undefined

// Symbol
const uniqueId = Symbol('id');
const symbol1 = Symbol(1);
const symbol2 = Symbol(1);
console.log(symbol1 === symbol2); //false

const ID = Symbol('id');
let user = {};
user[ID] = '1234';
console.log(user);

// Bigint - very large or very small numbers

const bigNumber = 123456787654345609876n;
console.log(bigNumber);

const numberOfParticlesTheUniverse = 234567890987654321234n;
console.log(numberOfParticlesTheUniverse);
