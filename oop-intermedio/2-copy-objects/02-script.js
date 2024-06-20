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

// Create a shallow copy of 'obj1' and assign it to 'obj2'.
// This means 'obj2' will have the same properties as 'obj1' but will be a separate object.
// However, the nested object 'c' will be shared between 'obj1' and 'obj2'.
const obj2 = Object.assign({}, obj1);

// Create a new object 'obj3' with 'obj1' as its prototype.
// This means 'obj3' will inherit properties from 'obj1'.
const obj3 = Object.create(obj1);

// Note: 
// - Changes to primitive properties (a, b) in 'obj1' won't affect 'obj2' and vice versa.
// - Changes to the nested object 'c' will affect both 'obj1' and 'obj2' since it is a shallow copy.
// - 'obj3' inherits properties from 'obj1', so 'obj3.a', 'obj3.b', and 'obj3.c' will refer to 'obj1's properties.
