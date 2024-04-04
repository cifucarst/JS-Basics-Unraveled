/*
Finding Substring Indexes
Given an array of strings and a target string, 
write a function to determine if the target string
is present in the array. If it is present, return
the index of the first occurrence and the index
of the last occurrence, otherwise, return -1
*/

const stringArray = ['apple','banana','orange','grape','banana','kiwi'] // Array of strings

const target = 'banana' // Target string to find in the array

function findStringIndexesInArray(array, target) {
    // Object to store the result
    const result = {
        includesTargetString: false, // Flag indicating if the target string is found
        firstOccurrencesIndex: -1, // Index of the first occurrence of the target string
        lastOccurrencesIndex: -1, // Index of the last occurrence of the target string
    }

    // Loop through each element in the array
    array.forEach((element, index) => {
        // Check if the element includes the target string
        if (element.includes(target)) {
            result.includesTargetString = true; // Set flag to true indicating target string is found
            result.firstOccurrencesIndex = array.indexOf(target); // Set index of first occurrence
            result.lastOccurrencesIndex = array.lastIndexOf(target); // Set index of last occurrence
        }
    });

    return result; // Return the result object
}

// Call the function to find indexes of the target string in the array
const result = findStringIndexesInArray(stringArray, target);

console.log(result); // Print the result