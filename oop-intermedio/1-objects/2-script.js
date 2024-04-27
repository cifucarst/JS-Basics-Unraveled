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

// Log all own property descriptors of 'juan'
console.log(Object.getOwnPropertyDescriptors(juan));

// Add a new property 'pruebaNASA' to 'juan' with specific property descriptors
Object.defineProperty(juan,"pruebaNASA",{
    value: "aliens",
    writable: false,   
    enumerable: false, 
    configurable: false 
});

// Add a new property 'navigator' to 'juan' representing a browser navigator object
Object.defineProperty(juan, "navigator",{
    value: chrome, // Assuming chrome is a browser object representing Google Chrome
    writable: true, // Allowing the property value to be changed
    enumerable: false, // Not showing the property in iterations like for...in loops
    configurable: true, // Allowing the property to be deleted or its attributes changed later
})

// Add a new property 'editor' to 'juan' representing an editor object
Object.defineProperty(juan,"editor",{
    value: VsCode, // Assuming VsCode is an editor object representing Visual Studio Code
    writable: false, // Disallowing changes to the property value
    enumerable: true, // Showing the property in iterations like for...in loops
    configurable: false // Disallowing the property to be deleted or its attributes changed later
})

// Add a new property 'terminal' to 'juan' representing a terminal object
Object.defineProperty(juan,"terminal",{
    value: wsl, // Assuming wsl is a terminal object representing Windows Subsystem for Linux
    writable: true, // Allowing the property value to be changed
    enumerable: true, // Showing the property in iterations like for...in loops
    configurable: false // Disallowing the property to be deleted or its attributes changed later
})

// Log all own property descriptors of 'juan' after adding the new properties
console.log(Object.getOwnPropertyDescriptors(juan));