// Define an object named 'person1' with various properties
const person1 = {
    eyes: "brown",                     // Property 'eyes' with a value of "brown"
    hair: "black",                     // Property 'hair' with a value of "black"
    sweater: "orange, blue, and white", // Property 'sweater' with a value of "orange, blue, and white"
    pantalon: "yellow",                // Property 'pantalon' with a value of "yellow"
    piel: "skin-color-1"               // Property 'piel' with a value of "skin-color-1"
}

// Define another object named 'person2' with some overlapping and some new properties
const person2 = {
    eyes: "green",                     // Property 'eyes' with a value of "green"
    skin: "skin-color-2"               // Property 'skin' with a value of "skin-color-2"
}

// Define another object named 'person3' with some overlapping and some new properties
const person3 = {
    eyes: "blue",                      // Property 'eyes' with a value of "blue"
    sweater: "violet"                  // Property 'sweater' with a value of "violet"
}

// Create a new object 'fusion' by merging properties from 'person1', 'person2', and 'person3'
// Object.assign({}, person1, person2, person3) copies properties from all source objects into a new object
// If multiple source objects have the same property, the last one wins (properties in 'person3' will overwrite those in 'persona1' and 'persona2')
const fusion = Object.assign({}, person1, person2, person3);

// Note:
// - 'fusion' is a new object that contains properties from 'person1', 'person2', and 'person3'
// - Properties from 'person2' and 'person3' overwrite those in 'person1' if they have the same key
// - The final values for 'eyes', 'piel', and 'sweater' in 'fusion' will be "blue", "skin-color-2", and "violet" respectively
console.log(fusion); // Output the merged object to verify the result
