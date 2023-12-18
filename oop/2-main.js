// This code defines a class named `Student` using the class syntax.
class Student {
    // Constructor method that takes an object with optional properties as an argument
    constructor({
        name, // Required property - student's name
        email, // Optional property - student's email
        age, // Required property - student's age
        approvedCourses = [], // Optional property - array of approved courses (default empty)
    }) {
        // Assigning constructor arguments to object properties
        this.name = name;
        this.age = age;
        this.email = email ?? null; // Set email to null if undefined
        this.approvedCourses = approvedCourses;
    }

    // Method to add a new course to the student's approved courses
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

// Creating a new instance of the `Student` class named `miguelito` using an object literal
const miguelito = new Student({
    name: "Miguelito",
    age: 28,
    approvedCourses: [
        "Curso de Analisis de negocios",
        "Curso de visualizacion de datos pra BI",
    ],
    email: "miguelito@yahoo.com",
});
