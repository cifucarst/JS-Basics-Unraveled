// Function to perform linear search on a list
function linearSearch(list, target) {
    let match = false; // Initialize a variable to track whether the target is found in the list

    // Iterate through each element in the list
    for (let element of list) {
        // Check if the current element matches the target
        if (element === target) {
            match = true; // If found, set match to true
            break; // Exit the loop since the target has been found
        }
    }

    return match; // Return whether the target was found in the list or not
}

// Function to execute when the window loads
window.onload = function() {
    // Prompt the user for the size of the list and convert it to an integer
    const listSize = parseInt(prompt('[+] What will be the size of the list?'));
    // Prompt the user for the number to find and convert it to an integer
    const target = parseInt(prompt('[+] Which number do you want to find?'));

    // Generate a list of random integers with the specified size
    const list = Array.from({ length: listSize }, () => Math.floor(Math.random() * 101));

    // Perform linear search on the list for the target
    const found = linearSearch(list, target);

    // Output the generated list to the browser console
    console.log(list);
    // Output whether the target was found in the list or not to the browser console
    console.log(`\n[+] The element ${target} ${found ? 'is' : 'is not'} in the list`);
};