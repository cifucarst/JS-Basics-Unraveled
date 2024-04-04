class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I\'m ${this.age} years old.`)
    }
}

// a new instance
const person1 = new Person('Mariana',25)

console.log(person1.greet())