// Class representing a course with a name and an array of classes
class Course {
    constructor({
        name,
        classes = [], // Default empty array for classes
    }) {
        // Use private property for name to control access
        this._name = name;
        
        // Store classes directly (no private prop needed for now)
        this.classes = classes;
    }

    // Getter for the course name
    get name() {
        return this._name;
    }

    // Setter for the course name with a validation check
    set name(nuevoNombrecito) {
        if (nuevoNombrecito === "curso malito de programacion basica") {
            console.error("Bad course name, try something else!"); // Avoid this name
        } else {
            this._name = nuevoNombrecito;
        }
    }
}

// Course instances
const cursoProgBasica = new Course({
    name: "curso gratis de programacion basica",
});

// Demonstrate changing the name using the setter
cursoProgBasica.name = "lalala";

const cursoDefinitivoHTML = new Course({
    name: "curso definitivo de HTML y CSS",
});

const cursoPracticoHTML = new Course({
    name: "curso practico de HTML y CSS",
});

const cursoDataBusiness = new Course({
    name: "curso de databusiness",
});

const cursoDataViz = new Course({
    name: "curso de dataviz",
});

const cursoUnity = new Course({
    name: "curso de intro a unity",
});

const cursoUnReal = new Course({
    name: "curso de unreal",
});


// Class representing a learning path with a name and an array of courses
class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

// Learning path instances with references to course objects
const escuelaWeb = new LearningPath({
    name: "Escuela de desarrollo web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
});

const escuelaData = new LearningPath({
    name: "Escuela de data science",
    courses: [
        cursoProgBasica,
        cursoDataBusiness,
        cursoDataViz,
    ],
});

const escuelaVgs = new LearningPath({
    name: "escuela de desarrollo de video juegos",
    courses: [
        cursoProgBasica,
        cursoUnity,
    ],
});


// Class representing a student with various details and learning paths
class Student {
    constructor({
        name,
        email,
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
}

// Student instances with learning paths as references
const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPath: [
        escuelaWeb,
        escuelaVgs,
    ],
});

const miguelito2 = new Student({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@juanito.com",
    twitter: "miguelito_feliz",
    learningPath: [
        escuelaWeb,
        escuelaData,
    ],
});
