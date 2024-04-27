// Define an object named 'juan' with various properties
const juan = {
    name: "juanito",
    age: 18,
    approvedCourses: ["Course 1"],
    // Method to add a new course to the 'approvedCourses' array
    addCourse(newcourse){
        console.log("This",this); // Log the current context
        this.approvedCourses.push(newcourse); // Add the new course to 'approvedCourses'
    }
}

// Log the keys of 'juan'
console.log(Object.keys(juan)); 

// Log all own property names of 'juan'
console.log(Object.getOwnPropertyNames(juan));

// Log an array of [key, value] pairs for each enumerable property of 'juan'
console.log(Object.entries(juan));

// Log all own property descriptors of 'juan'
console.log(Object.getOwnPropertyDescriptors(juan));

// Add a new property 'testNASA' to 'juan' with specific property descriptors
Object.defineProperty(juan,"testNASA",{
    value: "aliens",
    enumerable: true, // Property can be enumerated
    writable: true,   // Property can be changed
    configurable: true // Property can be redefined or deleted
});