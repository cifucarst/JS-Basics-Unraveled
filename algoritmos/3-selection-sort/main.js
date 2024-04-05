function selectionSort(lists) {
    // Iterate through the entire array
    for (let i = 0; i < lists.length; i++) {
        // Find the remaining minimum value within the unsorted part of the array
        let idxDes = i;
        for (let j = i + 1; j < lists.length; j++) {
            if (lists[idxDes] > lists[j]) {
                idxDes = j;
            }
        }

        // Once the minimum number is found, swap it with the first value in the unsorted part
        [lists[i], lists[idxDes]] = [lists[idxDes], lists[i]];
    }

    return lists;
}

// Example usage
const listSize = parseInt(prompt("How big will the list be?"));
const lists = Array.from({ length: listSize }, () => Math.floor(Math.random() * 100) + 1);
console.log(lists);

const sortedList = selectionSort(lists.slice()); // Create a copy of the array before sorting
console.log(sortedList);