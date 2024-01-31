/* Card Game Implementation
   Imagine you're building a simple card game. You have an array representing a deck
   of cards, and you want to perform the following operations:
      1. Shuffle the deck: Randomly rearrange the order of the cards in the deck.
      2. Deal cards: Deal a specific number of cards to players from the top of the deck.
   
   This exercise involves using the splice() method to shuffle the deck and deal
   cards. */

// Initial deck of cards
const deck = ["♠︎", "♣︎", "♥︎", "♦︎", "♠︎", "♣︎", "♥︎", "♦︎", "♠︎", "♣︎", "♥︎", "♦︎"];

// Fisher-Yates Algorithm to shuffle the deck
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        // Generate a random index j within the remaining cards
        const j = Math.floor(Math.random() * (i + 1));
        
        // Swap the current card with the randomly selected card
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Function to deal a specific number of cards from the top of the deck
function dealCards(numCard) {
    // Use splice to extract the specified number of cards from the top of the deck
    const dealtCards = deck.splice(0, numCard);
    return dealtCards;
}

// Shuffle the deck using the Fisher-Yates Algorithm
shuffleDeck();

// Deal cards to players
const player1Hand = dealCards(3);
const player2Hand = dealCards(3);
const player3Hand = dealCards(3);

// Display the hands of each player
console.log(`Player 1 Hand: ${player1Hand}`);
console.log(`Player 2 Hand: ${player2Hand}`);
console.log(`Player 3 Hand: ${player3Hand}`);