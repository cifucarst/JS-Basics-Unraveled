// Define a class named 'Person'
class Person {
    // Constructor method to initialize the 'nombre' property
    constructor(name) {
        this.name = name;
    }

    // Method to greet using the 'nombre' property
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// Create instances of the 'Persona' class
const sacha = new Person("Sacha");
const eric = new Person("Eric");
const vicky = new Person("Vicky");


// JavaScript translates this class-based code to prototypes

// Define a constructor function named 'Person'
function Person(name) {
    this.name = name; // Initialize the 'name' property
}

// Add a method 'greet' to the prototype of 'Person'
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
}

// Note:
// - The class-based syntax is syntactic sugar over the prototype-based inheritance.
// - The constructor function and the prototype method achieve the same result as the class syntax.