/* Raffle winner verification program
In this program, you can verify if a person is among the list of winners in a raffle. 
Simply input the name or ticket number, and the program will check and display the 
winner's information.
*/

// List of winning participants with their respective IDs, names, and ticket numbers
const winningParticipants = [
    {id: 1, name: "Jennifer", ticketNumber: 1},
    {id: 8, name: "Michael", ticketNumber: 8},
    {id: 15, name: "Emily", ticketNumber: 15},
    {id: 47, name: "Charley", ticketNumber: 47},
]

// Function to find a winner by their name
function findWinnerByName(name){
    // Using the find() method to search for a participant with the given name
    const winner = winningParticipants.find(participant => participant.name === name)
    // If winner is found, return winner's information; otherwise, return a message indicating no winner found
    return winner || 'No winner found with that name.'
}

// Function to find the index of a winner by their ticket number
function findIndexWinnerByTicket(ticketNumber){
    // Using the findIndex() method to search for the index of a participant with the given ticket number
    const index = winningParticipants.findIndex(participant => participant.ticketNumber === ticketNumber)
    // If index is found, return the index; otherwise, return a message indicating no winner found
    return index !== -1 ? index : 'No winner found with that ticket number'
}

// Function to display winner's information or a message indicating no winner found
function displayWinnerInformation(winner){
    if (winner !== undefined && winner != null && winner !== 'No winner found with that name.'){
        // If winner's information is valid, display winner's information
        console.log('Winner information: ', winner)
    } else {
        // If no winner is found, display a message indicating no winner found
        console.log('No winner found')
    }
}

// Find winner by name and store the result
const winnerByName = findWinnerByName('Emily')
// Find index of winner by ticket number and store the result
const indexWinnerByTicket = findIndexWinnerByTicket(15)

// Display winner's information or a message indicating no winner found
displayWinnerInformation(winnerByName)
// Display index of winner by ticket number
console.log('Index of Winner by Ticket Number: ', indexWinnerByTicket)