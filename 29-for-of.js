/*for of => for each element of each thing
we are going to iterate until we find what we are
looking for, it is used on iterable objects, arrays,
strings.

for (variable of object){
    code
}
*/

let basket = ['apple','pear','oranges','grapes']

for(let fruit of basket){
    console.log(fruit)
}

//___________________________________________

// Definition of an array of numbers.
let numbers = [1, 2, 3, 4, 5];

// "for...of" loop to iterate over the elements of the array.
for (let num of numbers) {
    // Prints each number of the array to the console.
    console.log(num);
}

//____________________________________________

// Definition of an array of names.
let names = ["Alice", "Bob", "Charlie"];

// "for...of" loop using a Template Literal to print personalized messages.
for (let name of names) {
    console.log(`Hello, ${name}!`);
}