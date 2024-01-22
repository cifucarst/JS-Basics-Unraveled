// Definition of a function called 'performTask' that takes an argument named 'day'.
function performTask(day) {
    // Initiates the switch statement, which will evaluate the value of 'day'.
    switch (day) {
        // If 'day' is equal to any of these cases ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday').
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            // Prints to the console that it is a workday and work tasks are being performed.
            console.log('It is a workday. Performing work tasks.');
            // Exits the switch block.
            break;

        // If 'day' is equal to 'Saturday' or 'Sunday'.
        case 'Saturday':
        case 'Sunday':
            // Prints to the console that it is the weekend and leisure time is being enjoyed.
            console.log('It is the weekend. Enjoying leisure time.');
            // Exits the switch block.
            break;

        // If 'day' does not match any of the above cases.
        default:
            // Prints to the console that the day is not recognized and suggests checking the input.
            console.log('Unrecognized day. Check the input.');
    }
}