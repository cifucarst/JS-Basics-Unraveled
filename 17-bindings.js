/* context => It is the object that is executing 
a function at a specific moment */

/* binding => Assigning the value 
that 'this' will take when the function is executed */

/*
Types of binding

1. lexical binding (arrow functions)
2. new binding (object instantiation)
3. explicit binding (indirect invocation)
4. implicit binding (method invocation)
5. default binding (direct invocation)

How to determine which binding to apply

    how the function was written
    modifications since creation
    the place of invocation (call site)
*/

// default binding

// Function to demonstrate default binding
function whoAmI() {
    console.log(`Hello, I am: `, this);
}
whoAmI();

//_____________________________________________________________________

/* implicit binding => Occurs when we invoke
a method of an object. */
const sacha = {
    name: "sacha",
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    },
    brother: {
        name: "Eric",
        greet: function () {
            console.log(`Hey, the brother here, my name is
            ${this.name}`);
        },
    },
};

// Invoking methods using implicit binding
sacha.greet();
sacha.brother.greet();

//_____________________________________________________________________

// explicit binding => allows us to choose exactly which object we want
// 'this' to be when the function is executed

const sacha1 = {
    name: "Sacha",
    greet: function (shouting, withFarewell) {
        const normalGreeting = `Hello, my name is ${this.name}`;
        const normalFarewell = `bye`;

        // Applying explicit binding using call and apply
        const greeting = shouting ?
            normalGreeting.toUpperCase() : normalGreeting;
        const farewell = shouting ?
            normalFarewell.toUpperCase() : normalFarewell;

        console.log(greeting);

        if (withFarewell) {
            console.log(farewell);
        }
    }
}

/*function.prototype.call => a method that allows us to invoke a function changing
its context */

// Calling the greet function with explicit binding using call and apply
sacha1.greet.call({ name: "Pepe" }, true, true);
sacha1.greet.apply({ name: "Pepe" }, [true, true]);


// function.prototype.bind => a method of functions that returns a new
// function with the context bound to the object we specify.


//_____________________________________________________________________

// new binding (object instantiation)

// Constructor function to create objects with new binding
function Person(name) {
    this.name = name;
}

// Creating an object using new binding
const sachaObj = new Person('Sacha');


//_____________________________________________________________________

// lexical binding (arrow functions)
// occurs when we write a function with arrow functions.

'use strict'

const sachaArrow = {
    name: "Sacha",
    twitter: "@sachalifs",
    greet: function () {
        // Using lexical binding with arrow functions
        const followMeOnTwitter = () => {
            console.log(`Follow me on Twitter: ${this.twitter}`);
        }

        console.log(`Hello, my name is ${this.name}`);
        followMeOnTwitter();
    }
}
