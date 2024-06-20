// Define an object named 'pet' with properties 'specie' and 'name'
const pet = {
    specie: "cat",  // Property 'specie' with a value of "cat"
    name: "Haru"   // Property 'name' with a value of "Haru"
};

// Define an object named 'person' with various properties including a nested object 'pet'
const person = {
    eyes: "brown",                        // Property 'eyes' with a value of "brown"
    hair: "black",                        // Property 'hair' with a value of "black"
    sweater: "orange, blue, and white",   // Property 'sweater' with a value of "orange, blue, and white"
    pantalon: "yellow",                   // Property 'pantalon' with a value of "yellow"
    skin: "skin-color-1",                 // Property 'skin' with a value of "skin-color-1"
    pet,                              // Property 'pet' referencing the 'mascota' object
};

// Create a new object 'clon' by copying all properties from 'person' using Object.assign()
// Object.assign({}, persona) creates a shallow copy of 'persona'
// This means 'clon' will have the same properties and values as 'person', but nested objects (like 'pet') will be shared
const clon = Object.assign({}, person);

// Note:
// - 'clon' is a new object, so changes to 'clon' will not affect 'person' and vice versa.
// - However, this is a shallow copy, so changes to the nested 'mascota' object in 'clon' will affect the 'pet' object in 'person'.
// - For a deep copy, consider using a different method, such as JSON serialization or a deep copy utility function.
console.log(clon); // Output the cloned object to verify the copy
