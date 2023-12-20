// Class representing a comment
class Comment {
    constructor({
        content,
        studentName,
        studentRole = "student",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    };

    // Method to publish/display the comment
    publish(){
        console.log(`${this.studentName} ("${this.studentRole}")`);
        console.log(`${this.likes} likes`);
        console.log(`${this.content}`);
    }
};

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
            }else{
                this._name = newName;
            };
    };
};

// Instances of courses
// ...

// Class representing a learning path
class LearningPath {
    constructor({
        name,
        courses = [],
    }){
        this.name = name
        this.courses = courses
    }
}

// Instances of learning paths
// ...

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

    // Method to create a public comment
    publicComment(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publish();
    };
};