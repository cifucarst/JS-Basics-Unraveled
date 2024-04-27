// In JavaScript, static methods are functions defined in a class that can be called 
// directly on the class itself, rather than on an instance of that class. This means you
// don't need to create an object of the class to access those static methods; instead, 
// you invoke them directly from the class.

// Here's a practical example to illustrate how static methods work in JavaScript:

class MathHelper {
    // Static method to add two numbers
    static sum(a, b) {
    return a + b;
    }
    
    // Static method to subtract two numbers
    static subtract(a, b) {
    return a - b;
    }
    }
    
    // Calling the static method sum without needing to instantiate the class
    console.log(MathHelper.sum(5, 3)); // Output: 8
    
    // Calling the static method subtract without needing to instantiate the class
    console.log(MathHelper.subtract(10, 4)); // Output: 6
    
    // In this example, sum and subtract are static methods of the MathHelper class. You can
    // call these methods directly on the MathHelper class without needing to create an
    // instance of it.
    
    // Static methods are useful when you have functions that belong to a class but do not
    // depend on the state of any particular object. They can be used to group related
    // functions in a logical and coherent way within a class without the need to create
    // instances of it.