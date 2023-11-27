// Pass by value

// Define variables of primitive data types
let x = 1;
let y = "Hello";
let z = null;

// Assign the values of x and y to other variables
let a = x;
let b = y;

// Print the values of all variables
console.log("x:", x, "y:", y, "z:", z, "a:", a, "b:", b);

// Assign new values to x and y
x = 12;
y = "Platzi";

// Print the values of all variables
console.log("x:", x, "y:", y, "z:", z, "a:", a, "b:", b);

// Explanation:

// The values of x and y are passed by value. This means that when a variable of a primitive data type is assigned to another variable, a copy of the value is made. Any changes made to the second variable will not affect the original variable.

// In this case, the values of x and y are assigned to a and b. Any changes made to a or b will not affect x or y.

// For example, when we assign the value 12 to x, the value of a is also assigned 12. However, when we assign the value "Platzi" to y, the value of b is not updated.


// Pass by reference

// Define variables of compound data types
let fruits = ["apple"];
let breads = ["🍞"];

// Add elements to the fruits and breads arrays
fruits.push("pear");
breads.push("🥮");

// Define variables that refer to fruits and breads
let copyfruits = fruits;
let copybreads = breads;

// Add elements to the fruits and breads arrays
fruits.push("banana");
breads.push("🥮");

// Print the values of fruits, copyfruits, breads, and copybreads
console.log("fruits:", fruits, "copyfruits:", copyfruits, "breads:", breads, "copybreads:", copybreads);

// Explanation:

// The values of fruits and breads are passed by reference. This means that when a variable of a compound data type is assigned to another variable, the reference to the original object is made. Any changes made to the second variable will affect the original object.

// In this case, the variables fruits and breads refer to the same objects. When we add elements to fruits or breads, the changes are reflected in both variables.


// Complex data type - Pass by reference

// Define variables of complex data types
let fruits = {
  orange: "🍊"
};
let vegetables = fruits;

// Change the value of the orange property of fruits
vegetables.orange = "🥦";

// Print the values of fruits and vegetables
console.log("fruits:", fruits, "vegetables:", vegetables);

// Explanation:

// The value of the orange property of fruits is passed by reference. This means that when we change the value of the property in vegetables, the change is reflected in fruits as well.

// In this case, the variables fruits and vegetables refer to the same object. When we change the value of the orange property in vegetables, the change is reflected in both variables.
