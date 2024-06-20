// Define an object named 'person' with a method 'greet'
// This object will be used as a prototype
const person = {
    greet: function(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

// Create an empty object named 'sacha'
const sacha = {};

// Set the prototype of 'sacha' to 'person'
// This means 'sacha' will inherit the 'greet' method from 'person'
Object.setPrototypeOf(sacha, person);

// Note:
// - 'sacha' now has access to the 'greet' method from 'person'
// - The 'name' property needs to be added to 'sacha' for the 'greet' method to work correctly
sacha.nombre = "Sacha"; // Add 'name' property to 'sacha'

// Test the inherited 'greet' method
sacha.greet(); // Outputs: "Hello, my name is Sacha"