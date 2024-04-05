// Function to implement the bubble sort algorithm
function bubbleSort(lists) {
    const n = lists.length; // Get the length of the array

    // Iterate through the array
    for (let i = 0; i < n; i++) {
        // Iterate through the array up to the current length - 1 - i
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements and swap them if necessary
            if (lists[j] > lists[j + 1]) {
                [lists[j], lists[j + 1]] = [lists[j + 1], lists[j]]; // Swap elements using destructuring assignment
            }
        }
    }
    return lists; // Return the sorted array
}

// Function to generate a random list of a given size
function generateRandomList(size) {
    const lists = []; // Initialize an empty array to store the random list

    // Iterate 'size' times to generate random numbers and push them into the array
    for (let i = 0; i < size; i++) {
        lists.push(Math.floor(Math.random() * 100) + 1); // Generate a random number between 1 and 100 (inclusive)
    }

    return lists; // Return the generated random list
}

const listSize = 10; // Define the list size as 10 for this example
const lists = generateRandomList(listSize); // Generate a random list of size 'listSize'

console.log("Lista desordenada:"); // Output message indicating the unsorted list
console.log(lists); // Output the unsorted list

const sortList = bubbleSort([...lists]); // Sort the list using the bubble sort algorithm

console.log("Lista ordenada:"); // Output message indicating the sorted list
console.log(sortList); // Output the sorted list