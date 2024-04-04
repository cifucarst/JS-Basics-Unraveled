/* this

this --- class (refers to the class itself)
this --- object -- class (refers to the object created from the class)
*/

class Person {
    constructor(name, age) {
        this.name = name; // Initialize name property with the value passed to the constructor
        this.age = age; // Initialize age property with the value passed to the constructor
    }
}

const person1 = new Person('Alice', 25); // Create a new Person object

console.log(person1); // Output: Information about person1 object

person1.nuevoMetodo = function() {
    console.log(`Mi nombre es ${this.name}`); // Define a new method using "this" to access object properties
}