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

// Define property descriptors for the new object
const descriptors = {
    // Add any additional properties or modify existing ones if needed
};

// Create a new object 'sacha' with 'persona' as its prototype and using descriptors
const sacha = Object.create(person, descriptors).init("sacha").greet();

// Note:
// - 'Object.create(person, descriptors)' creates a new object with 'person' as its prototype.
// - The 'descriptors' object can be used to define or modify properties during object creation.
// - The 'init' method sets the 'name' property and returns 'this', allowing 'greet' to be called directly.
// - Method chaining is used here to call 'init' and 'greet' in a single statement.
// - Ensure that 'descriptors' is defined with appropriate properties if needed, or an empty object can be passed.