// Enable strict mode to prevent silent errors and improve code safety
'use strict';

// Define a function named `favoriteCharacter` that logs the value of `this` to the console
function favoriteCharacter() {
  console.log(`${this}`);
}

// Create an object named `character` with two properties: `name` and `age`
const character = {
  name: "Batman",
  age: "T5",
};

// Call the `favoriteCharacter` function without any arguments
favoriteCharacter();
