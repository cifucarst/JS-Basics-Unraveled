// Define an object named 'obj1' with properties 'a', 'b', and 'c'.
// Property 'c' is an object itself, containing properties 'd' and 'e'.
const obj1 = {
    a: "a",            // Property 'a' with a value of "a"
    b: "b",            // Property 'b' with a value of "b"
    c: {               // Property 'c' is an object with two properties
        d: "d",        // Property 'd' with a value of "d" inside object 'c'
        e: "e"         // Property 'e' with a value of "e" inside object 'c'
    }
};

// Create an empty object named 'obj2'
const obj2 = {};

// Iterate over each property in 'obj1'
for (prop in obj1) {
    // Copy each property from 'obj1' to 'obj2'
    obj2[prop] = obj1[prop];
}

// Note: This is a shallow copy. The nested object 'c' is shared between 'obj1' and 'obj2'.
