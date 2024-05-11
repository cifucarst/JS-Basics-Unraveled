// #02 FUNCTIONS AND SCOPE

/*
EXERCISE:
- Create examples of basic functions representing the different possibilities of the language: No parameters or return, with one or more parameters, with return...
- Check if you can create functions within functions.
- Use some examples of functions already created in the language.
- Test the concept of LOCAL and GLOBAL variables.
You must print the result of all examples to the console (and consider that each language may have more or less possibilities)

EXTRA CHALLENGE (optional):
Create a function that receives two text string parameters and returns a number.
- The function prints all numbers from 1 to 100. Considering that:
- If the number is a multiple of 3, it shows the first parameter text.
- If the number is a multiple of 5, it shows the second parameter text.
- If the number is a multiple of 3 and 5, it shows both concatenated text strings.
- The function returns the number of times the number has been printed instead of the texts.

Pay special attention to the syntax you should use in each case.
Each language follows conventions that you must respect for the code to be understandable.
*/

// <-------------------------> Functions <------------------------->
// A function in JavaScript is a block of code or a set of instructions that performs a specific task and can be reused at will. There are various ways to create a function in JavaScript.

// Self-Executing Function
(function () {
    console.log("Self-executing");
})();

// Callbacks
var funB = function () {
    return console.log('Function B executed');
};
var funA = function (callback) {
    callback();
};
funA(funB);

// --->> Function Declarations

// This form allows you to declare a function that will exist throughout the code.

function functionDeclaration() {
    console.log('This is the result of a function declaration');
}

functionDeclaration();

// It is possible to execute the greet() function even before it has been created and it would work correctly, since JavaScript first looks for function declarations and then processes the rest of the code.

// --->> Local and Global Variables

// A variable declared inside a function is only visible within that function. This variable is known as local.

function localVariable() {
    let local = 'I am a local variable';

    console.log('Showing the use of a local variable: ' + local);
}

localVariable();

// A function can also access an external or global variable. The function has complete access to the external variable. It can also modify it. The global variable is only used if there is no local one.

let globalVariable = 'I am a global variable';

function globalVariableFunction() {
    globalVariable = 'Accessing the global variable from the function'; // Change the value of the global variable

    let message = 'Hello! ' + globalVariable;
    console.log(message);
}

console.log(globalVariable); // Before calling the function

globalVariableFunction();

console.log('Now the global variable is: ' + globalVariable); // the value was modified by the function

// If a variable with the same name is declared inside the function, it shadows the global one. For example, in the following code, the function uses the local userName variable. The external one is ignored:

let userName = 'John';

console.log('The global variable is ' + userName);

function showMessage() {
    let userName = 'Bob'; // declares local variable

    let message = 'Hello, ' + userName; // Bob
    console.log('Accessing from the function reads the message: ' + message);
}

// the function creates and uses its own local userName variable
showMessage();

console.log(
    'The global variable did not change because the function used the one within its scope, so the global variable remains: ' +
        userName
); // John, it remains, the function did not access the external variable

// --->> Functions with Parameters

// It is possible to call a function and pass parameters or arguments for it to use:

function functionWithParameters(from, text) {
    // parameters: from, text
    console.log(from + ': ' + text);
}

functionWithParameters('Ann', 'Hello!');
functionWithParameters('Ann', 'How are you?');

// in case a function is called that requires arguments and not all parameters are determined, those that are not defined will be undefined

console.log('This is an example of a function with an undefined parameter: ');
functionWithParameters('Hello');

// It is possible to set default values for arguments:

function defaultValueFunction(a, b = 'default value') {
    console.log(`My name is ${a} and my value is: ${b}`);
}
defaultValueFunction('Mabel');

// --->> Functions with Return

// A function with return is a function that returns something when called. For example:

function sum(a, b) {
    return a + b;
}

console.log('The result of the sum is: ' + sum(1, 2));

// --->> Anonymous Functions

// Anonymous functions or lambda functions are a type of functions that are declared without a function name and are housed inside a variable, referring to it each time we want to use it:

const greeting = function () {
    return 'Hello';
};

console.log(greeting); // Print the function
console.log(greeting()); // Print the output 'Hello'

// --->> Arrow Functions

// Arrow functions are a short way of writing functions that appears in JavaScript starting from ECMAScript 6. Basically, it consists of removing the function keyword and adding => before opening the curly braces:

const traditionalFunction = function () {
    return 'Traditional function.';
};

console.log(traditionalFunction());

const arrowFunction = () => {
    return 'Arrow function.';
};

console.log(arrowFunction());

// --->> Function within Another Function

// Without determining an argument

function outerFunction() {
    let innerFunction = (message) => {
        console.log(`Inner function executed, with the message ${message}!`);
    };
    innerFunction('Very well');
}

outerFunction();

// Determining arguments

function addSquare(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}

console.log('The square of 2 plus the square of 3 is ' + addSquare(2, 3));

// --->> Built-in Language Function

// In this example, Math is used. Math is a built-in object that has properties and methods for mathematical constants and functions. It is not a function object. Unlike other global objects, the Math object cannot be edited.
// Math works with the Number type. It does not work with BigInt.

// Using Math to calculate the area of a circle remembering that the formula is PI*r2:

const area = (radius) => {
    let circleArea = Number((Math.PI * Math.pow(radius, 2)).toFixed(2)); // toFixed() function returns a string
    return circleArea;
};

console.log(area(2));

// <-------------------------> EXTRA <------------------------->
const extraExercise = (text1, text2) => {
    let counter = 0;

    for (let i = 1; i < 100; i++) {
        if (i % 3 == 0 && i % 5 != 0) {
            console.log(text1);
        } else if (i % 3 != 0 && i % 5 == 0) {
            console.log(text2);
        } else if (i % 3 == 0 && i % 5 == 0) {
            console.log(text1 + '+' + text2);
        } else {
            console.log(i);
            counter += 1;
        }
    }

    return counter;
};

console.log(
    'The number of times a number has been printed is: ',
    extraExercise('text1', 'text2') // The number of times a number has been printed is:  53
);
