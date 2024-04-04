class Animal {
    constructor(name, animalType) {
        this.name = name; // Initialize name property
        this.animalType = animalType; // Initialize animalType property
    }
    
    makeSound() {
        console.log('The animal makes a sound'); // Define a method to make a sound
    }
}

class Dog extends Animal {
    constructor(name, animalType, breed) {
        super(name, animalType); // Call the constructor of the superclass (Animal)
        this.breed = breed; // Initialize breed property specific to Dog class
    }
    
    makeSound() {
        console.log("The dog barks"); // Override the makeSound method for Dog class
    }
    
    run() {
        console.log(`${this.name} runs happily`); // Define a method to make the dog run
    }
}

const dog1 = new Dog("Bobby", "dog", "Pug"); // Create a new Dog object

console.log(dog1); // Output: Information about the dog
dog1.run(); // Output: Message indicating the dog is running
dog1.makeSound(); // Output: Message indicating the dog is barking

// Creating a new method directly on the dog1 object
dog1.newMethod = function() {
    console.log("This is a method"); // Define a new method for dog1 object
}

// Adding a new method to the Dog class prototype
Dog.prototype.secondMethod = function() {
    console.log("This is a new method"); // Define a new method for Dog class
}

dog1.secondMethod(); // Output: Call the new method added to Dog class prototype