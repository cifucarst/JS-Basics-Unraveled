// This code defines an object literal named `natalia`.
const natalia = {
    // Property: Name of Natalia
    name: "Natalia",

    // Property: Age of Natalia
    age: 20,

    // Property: Array of Natalia's approved courses
    approvedCourses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],

    // Method: Adds a new course to Natalia's approved courses
    approveACourse(newCourse) {
        this.approvedCourses.push(newCourse);
    },
};

console.log(natalia); // Prints the entire `natalia` object to the console


// This code defines a constructor function named `Student`.
function Student(name, age, approvedCourses) {
    // Assigning parameters to object properties
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;
}
// Adding a "getCourse" method to the `Student` prototype
Student.prototype.getCourse = function (newCourse) {
    this.approvedCourses.push(newCourse);
};

// Creating a new instance of the `Student` prototype named `juanita`
const juanita = new Student(
    "Juanita", // Name
    15, // Age
    [ // Approved courses
        "Curso de introducion a la produccion de videojuegos",
        "curso de creacion de personajes",
    ]
);