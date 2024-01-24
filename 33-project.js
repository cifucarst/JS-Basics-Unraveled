/*
Let's play guess the word

The user has 3 tries to guess the hidden word.

Requirements:

* The game must have a hidden word
* The game can give 1 hint for the word
* The user must enter a guess.
* The game must verify if the user's guess is correct
* The game must have a limited number of tries.
* The game must end when the user guesses the word or runs out of tries.
*/

let hiddenWord = "javascript";
let tries = 3;

function verifyGuess(guess, hiddenWord) {
    if (guess.toLowerCase() === hiddenWord) {
        return true;
    };
    return false;
};

function playGuessTheWord() {
    alert("Welcome to play guess the hidden word");
    alert("You have 3 tries to guess the word");
    alert("--hint-- the hidden word is a programming language");

    while (tries > 0) {
        let guess = prompt("Guess the word");

        if (verifyGuess(guess, hiddenWord)) {
            alert("Correct, you have guessed the word.!");
            break;
        } else {
            tries--;
            if (tries > 0) {
                alert(`Incorrect, you still have ${tries} remaining`);
            } else {
                alert(`You ran out of tries, the hidden word was ${hiddenWord}`);
            };
        };
    };
};

playGuessTheWord();
