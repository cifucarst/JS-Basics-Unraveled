// Define an object named 'person1' with various properties
const person1 = {
    eyes: "brown",                     // Property 'eyes' with a value of "brown"
    hair: "black",                     // Property 'hair' with a value of "black"
    sweater: "orange, blue, and white", // Property 'sweater' with a value of "orange, blue, and white"
    pantalon: "yellow",                // Property 'pantalon' with a value of "yellow"
    piel: "skin-color-1"               // Property 'piel' with a value of "skin-color-1"
}

// Create a new object 'clon' by copying all properties from 'person1' using Object.assign()
// Object.assign({}, persona1) creates a shallow copy of 'persona1'
// This means 'clon' will have the same properties and values as 'persona1'
const clon = Object.assign({}, person1);

// Note:
// - 'clon' is a new object, so changes to 'clon' will not affect 'person1' and vice versa
// - This is a shallow copy, so nested objects (if any) would still reference the same objects in memory
console.log(clon); // Output the cloned object to verify the copy
