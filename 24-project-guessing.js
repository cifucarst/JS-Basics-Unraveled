// Generating a random secret number between 1 and 10 (inclusive).
const secretNumber = Math.floor(Math.random() * 10 + 1);

// Prompting the player to guess the secret number.
const playerNumber = parseInt(prompt("Guess the secret number between 1 and 10"));

// Logging the player's chosen number.
console.log(`This is the number you're playing with: ${playerNumber}`);

// Checking if the player's guess matches the secret number.
if (playerNumber === secretNumber) {
    console.log('Congratulations, you guessed the secret number!');
} 
// If the player's guess is lower than the secret number.
else if (playerNumber < secretNumber) {
    console.log('The number is too low, try again.');
} 
// If the player's guess is higher than the secret number.
else {
    console.log('The number is too high, try again.');
}