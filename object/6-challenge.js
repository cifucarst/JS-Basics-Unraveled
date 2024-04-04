/*
Challenge Requirements:

1. The user must be able to enter their username and password.
2. The system must be able to validate whether the username and password entered by the 
   user exist in the database.
3. If the username and password are correct, the system should display a welcome message 
   and show the user's timeline.
4. If the username and password are incorrect, the system should display an error message 
   and not show any timeline.
*/

// Database containing user information
const userDataBase = [
    {
        username: "andres",
        password: "123"
    },
    {
        username: "caro",
        password: "456"
    },
    {
        username: "mariana",
        password: "789"
    },
]

// User timeline data
const userTimeLine = [
    {
        username: "Estefany",
        timeline: "I love JavaScript"
    },
    {
        username: "Oscar",
        timeline: "Bebeloper is the best"
    },
    {
        username: "Estefany",
        timeline: "I love JavaScript"
    },
    {
        username: "Mariana",
        timeline: "I prefer coffee over tea"
    },
    {
        username: "Andres",
        timeline: "I don't feel like working today"
    },
]

// Prompt user for username and password
const username = prompt("What is your username?");
const password = prompt("What is your password?");

// Function to check if the user exists in the database
function existingUser(username, password) {
    for (let i = 0; i < userDataBase.length; i++) {
        if (userDataBase[i].username === username && userDataBase[i].password === password) {
            return true; // Return true if user exists
        }
    }
    return false; // Return false if user does not exist
}

// Function to sign in the user
function signIn(username, password) {
    if (existingUser(username, password)) {
        alert(`Welcome to your account, ${username}`); // Display welcome message if user exists
        console.log(userTimeLine); // Show user timeline
    } else {
        alert("Oops, incorrect username or password"); // Display error message if user does not exist
    }
}

signIn(username, password); // Call signIn function with provided username and password