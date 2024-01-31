// Methods that modify the original array (Mutability).

/* splice()
   Modifies the content of an array by removing existing elements and/or adding new elements */

const vegetables = ["carrot", "broccoli", "spinach", "tomato"];

// Using splice to remove 1 element starting from index 2 and add "cucumber" and "onion" in its place
const removedVegetables = vegetables.splice(2, 1, "cucumber", "onion");

// Display the modified array and the elements removed by splice
console.log("Modified Vegetables Array:", vegetables);
console.log("Removed Vegetables:", removedVegetables);

//______________________________________________________________________________

/* reverse()
   Reverses the order of elements in an array in place. The first element becomes
   the last, and the last becomes the first */

const numbers = [1, 2, 3, 4, 5];

// Using reverse to reverse the order of elements in the "numbers" array
const reverseNumbers = numbers.reverse();

// Display the original and reversed arrays
console.log("Original Numbers Array:", numbers);
console.log("Reversed Numbers Array:", reverseNumbers);

//______________________________________________________________________________

/* sort()
   Sorts the elements of an array locally and returns the sorted array */

// sort() with numbers
const unsortedNumbers1 = [4, 18, 1, 62, 34];

// Using sort() without a comparator function (sorts based on UTF-16 code units)
const unicodeSortedNumbers = unsortedNumbers1.sort();

// Display the original and sorted arrays using default sort
console.log("Original Numbers Array (Unicode Sorted):", unsortedNumbers1);
console.log("Sorted Numbers (Unicode Sorted):", unicodeSortedNumbers);

// Using sort() with a comparator function to sort numbers in ascending order
const unsortedNumbers2 = [4, 18, 1, 62, 34];
const sortedNumbers = unsortedNumbers2.sort((a, b) => a - b);

// Display the original and sorted arrays with a comparator function
console.log("Original Numbers Array (With Comparator):", unsortedNumbers2);
console.log("Sorted Numbers (With Comparator):", sortedNumbers);

// sort() with strings utf-16
const cities = ["New York", "Paris", "Tokyo", "London"];

// Using sort() without a comparator function (sorts based on UTF-16 code units)
const sortedCities = cities.sort();

// Display the original and sorted arrays of cities
console.log("Original Cities Array (Unicode Sorted):", cities);
console.log("Sorted Cities (Unicode Sorted):", sortedCities);

//______________________________________________________________________________

/* fill()
   Changes all elements in an array to a static value, from the index
   start (default 0) to the index end (default array.length) */

const ages = [21, 35, 45, 50];

// Using fill to change elements from index 2 to 4 to 0
console.log("Filled Ages Array (0 from index 2 to 4):", ages.fill(0, 2, 4));

// Using fill to change elements from index 1 to the end to 15
console.log("Filled Ages Array (15 from index 1 to end):", ages.fill(15, 1));

// Using fill to change all elements in the array to 15
console.log("Filled Ages Array (All elements to 15):", ages.fill(15));   