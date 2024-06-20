// la cocina del codigo
// https://www.youtube.com/watch?v=whIvWX7fxkU

// Object.create and Object.assign are two static methods of the Object class

// Static method
/* It is a function of the class that is not invoked on instances, but on
the class itself */

// Object.create()
/* It is a static method of the Object class that is used to create a new object with the
prototype that we pass as a parameter */

const person = {
    greet: function(){
        console.log(`Hello, my name is ${this.name}`)
    }
}

const sacha = Object.create(person)

/* Object.create is much closer to the prototype inheritance model that
JavaScript has */