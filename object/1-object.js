/**
Objects => Data Structure
Key / Value

object = {
    property: value,
    property: value
}
*/

const person = {
    name: 'Jhon',
    age: 30,
    address: {
        street: 'AV Insurgentes 187',
        city: 'CDMX'
    },
    greet(){
        console.log(`Hello, my name is ${person.name}`)
    }
}

console.log(person)

// return the object's name
console.log('object\'s name: ',person.name)

// returning the method
console.log(person.greet)

// modifying the object with a new property
person.phone = '555-555-555'

// verifying if the object was added
console.log('person phone: ',person.phone)

// adding a new method
person.sayGoodBye = () => {
    console.log("bye")
}

person.sayGoodBye()

// accessing a specific property in the object
console.log('person.address.street: ',person.address.street)

// deleting a property
delete person.phone;

console.log(person)

// A method is not possible to delete we can add an undefined
delete person.sayGoodBye();