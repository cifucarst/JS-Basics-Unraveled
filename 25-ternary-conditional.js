// Declaring a variable 'message'.
// Setting the age to 20.
// Checking if the age is 18 or older.
// Assigning a message based on the age condition.
// Logging the message to the console.

let message;
const age = 20;

if (age >= 18) {
    message = "He/She is of legal age, can enter.";
} else {
    message = "He/She is not of legal age, cannot enter.";
}

console.log(message);

// Using the ternary operator structure.
// Condition ? true : false
const newMessage = age >= 18 
    ? "He/She is of legal age, can enter." 
    : "He/She is not of legal age, cannot enter.";

console.log(newMessage);