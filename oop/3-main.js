// Advantages and disadvantages of literal objects vs. OOP objects

// **Using literal objects:**
const juan1 = {
    // Basic information
    name: "JuanDC",
    username: "juandc",
    points: 100,
    
    // Nested object for social media
    socialMedia: {
        twitter: "fjuandc",
        instagram: "fjuandc",
        facebook: undefined, // Facebook not specified
    },
    
    // Arrays for completed and planned courses
    approvedCourses: [
        "curso definitivo de HTML y CSS",
        "curso practico de HTML y CSS",
    ],
    learningPath: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "curso definitivo de HTML y CSS",
                "curso practico de HTML y CSS",
                "curso de responsive design",
            ]
        },
        {
            name: "Escuela de videojuegos",
            courses: [
                "curso de introduccion a la produccion de vgs",
                "curso de unreal engine",
                "curso de unity 3d",
            ]
        },
    ]
};

const miguelito1 = {
    // Similar structure for another student
    // Use spread operator to avoid repeating code
};

// **Advantages of literal objects:**
/* Simple and concise for small data sets.
* Easy to create and modify.
* No need for a separate class definition.

// **Disadvantages of literal objects:**
* Duplication of code for multiple students.
* Difficulty adding new properties or methods for all students.
* No code reuse or encapsulation.*/

// **Using an OOP class:**
class Student {
    constructor({
        name,
        email, // Added email property
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPath = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPath = learningPath;
    }
};

const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
});

const miguelito2 = new Student({
     // Use spread operator again
});

// **Advantages of OOP:**
/* Code reuse through a single class definition.
* Easier to add new properties or methods for all students.
* Encapsulation of data and methods for better organization.

// **Disadvantages of OOP:**
* More complex setup compared to literal objects.
 May be overkill for small data sets.*/

// Choose the approach that best suits your specific needs and project size.