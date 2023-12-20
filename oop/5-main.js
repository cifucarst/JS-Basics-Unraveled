// Function to play a video based on its ID
function videoPlay(id){
    const secretUrl = "https://ultrasecretplatzi.com/" + id;
    console.log("Playing from URL " + secretUrl);
};

// Function to stop a video based on its ID
function videoStop(id){
    const secretUrl = "https://ultrasecretplatzi.com/" + id;
    console.log("Pausing URL " + secretUrl);
};

// Class representing a Platzi class
class PlatziClass {
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    };

    // Method to play the class video
    play(){
        videoPlay(this.videoID);
    };

    // Method to stop the class video
    stop(){
        videoStop(this.videoID);
    };
};

// Class representing a Course
class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish"
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    // Getter for the course name
    get name(){
        return this._name;
    };

    // Setter for the course name with validation
    set name(newName){
        if(newName === "Poor basic programming course"){
            console.error("Hey... no");
        } else {
            this._name = newName;
        };
    };
};

// Instances of courses
const basicProgCourse = new Course({
    name: "Free basic programming course",
    isFree: true,
});

const definitiveHTMLCourse = new Course({
    name: "Definitive HTML and CSS course",
});

const practicalHTMLCourse = new Course({
    name: "Practical HTML and CSS course",
    lang: "english",
});

// Other course instances...

// Class representing a learning path
class LearningPath {
    constructor({
        name,
        courses = [],
    }){
        this.name = name;
        this.courses = courses;
    }
}

// Instances of learning paths
const webSchool = new LearningPath({
    name: "Web Development School",
    courses: [
        basicProgCourse,
        definitiveHTMLCourse,
        practicalHTMLCourse,
    ],
});

// Other learning path instances...

// Main class
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
    }){
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
    };
};

// Subclasses of Student
class FreeStudent extends Student {
    constructor(props){
        super(props);
    }

    approvedCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Sorry, " + this.name + ", you can only take free courses.");
        }
    }
}

class BasicStudent extends Student {
    constructor(props){
        super(props);
    }

    approvedCourse(newCourse){
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Sorry, " + this.name + ", you cannot take courses in English.");
        }
    }
}

class ExpertStudent extends Student {
    constructor(props){
        super(props);
    }

    approvedCourse(newCourse){
        if(newCourse){
            this.approvedCourses.push(newCourse);
        }
    }
}

// Instances of students
const juan = new FreeStudent ({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPath: [
        webSchool,
    ]
});

const miguelito = new BasicStudent ({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@juanito.com",
    twitter: "miguelito_feliz",
    learningPath: [
        webSchool,
    ],
});