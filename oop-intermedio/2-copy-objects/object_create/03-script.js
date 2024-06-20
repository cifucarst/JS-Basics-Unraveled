// Define an object named 'person' with two methods: 'init' and 'greet'
const person = {
    // Method to initialize the 'nombre' property
    init: function(name) {
        this.name = name; // Set the 'name' property to the passed argument
        return this;          // Return 'this' to enable method chaining
    },
    // Method to greet using the 'nombre' property
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
        return this;          // Return 'this' to enable method chaining
    }
}

// Create a new object 'sacha' with 'person' as its prototype
// Initialize 'sacha' with the name "sacha" and then call the 'greet' method
const sacha = Object.create(person).init("sacha").greet();

// Note:
// - 'Object.create(person)' creates a new object with 'person' as its prototype.
// - The 'init' method sets the 'name' property and returns 'this', allowing 'greet' to be called directly.
// - Method chaining is used here to call 'init' and 'greet' in a single statement.