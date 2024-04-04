/* slice()
Creates a shallow copy of a portion of the array,
specified by start and end indices (end not included)
*/

const animals = ['ant','bison','camel','duck','elephant']; // Array of strings representing animals

console.log(animals.slice(2)); // Output: ['camel', 'duck', 'elephant'] - Slice from index 2 to end
console.log(animals.slice(1, 5)); // Output: ['bison', 'camel', 'duck', 'elephant'] - Slice from index 1 to 5 (not inclusive of index 5)
console.log(animals.slice(-1)); // Output: ['elephant'] - Slice starting from the last element
console.log(animals.slice()); // Output: ['ant', 'bison', 'camel', 'duck', 'elephant'] - Shallow copy of the entire array