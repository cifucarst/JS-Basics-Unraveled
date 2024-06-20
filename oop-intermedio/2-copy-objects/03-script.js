// Define an object named 'obj1' with properties 'a', 'b', and 'c'.
// Property 'c' is an object itself, containing properties 'd' and 'e'.
const obj1 = {
    a: "a",            // Property 'a' with a value of "a"
    b: "b",            // Property 'b' with a value of "b"
    c: {               // Property 'c' is an object with two properties
        d: "d",        // Property 'd' with a value of "d" inside object 'c'
        e: "e"         // Property 'e' with a value of "e" inside object 'c'
    }
}

// Convert the object 'obj1' to a JSON string and assign it to 'stringifiedComplexObj'.
// This string can be used to store or transmit the object data.
const stringifiedComplexObj = JSON.stringify(obj1);

// Parse the JSON string back into an object and assign it to 'obj2'.
// This creates a deep copy of 'obj1', meaning 'obj2' is a completely separate object.
const obj2 = JSON.parse(stringifiedComplexObj);

// Log the 'obj2' object to the console to verify the deep copy.
console.log(obj2); 

// Log the JSON string representation of 'obj1' to the console.
console.log(stringifiedComplexObj);

// Note:
// - 'obj2' is a deep copy of 'obj1', so changes to 'obj2' will not affect 'obj1' and vice versa.
// - The nested structure of 'obj1' is preserved in 'obj2'.