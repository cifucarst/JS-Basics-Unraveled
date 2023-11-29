// Explicit type casting

const string = '42';
const integer = parseInt(string);
console.log(integer);
console.log(typeof integer);

const stringDecimal = '3.14';
const float = parseFloat(stringDecimal);
console.log(float);
console.log(typeof float);

const binary = '1010';
const decimal = parseInt(binary, 2);
console.log(decimal);
console.log(typeof decimal);

// Implicit type casting
const sum = '5' + 3;
console.log(sum);

const sumWithBoolean = '3' + true;
console.log(sumWithBoolean);

const sumWithNumber = 2 + true;
console.log(sumWithNumber);

const stringValue = '10';
const numberValue = 10;
const booleanValue = true;
