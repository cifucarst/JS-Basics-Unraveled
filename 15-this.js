// implicit binding

// Creating an object 'house' with properties 'dogName' and a method 'dogGreeting'.
const house = {
    dogName: "Fido",
    dogGreeting: function(){
        // Printing a message using the 'dogName' property of the current object.
        console.log(`Hi, I'm ${this.dogName}`);
    }
}

// Invoking the 'dogGreeting' method of the 'house' object.
house.dogGreeting();


//_________________________________________

// explicit binding

// Declaring a function 'dogGreetingDos' without an associated object.
function dogGreetingDos(){
    // Printing a message using the 'dogName' property, which should be explicitly provided during function invocation.
    console.log(`Hi, I'm ${this.dogName}`);
}

// Creating a new object 'newHouse' with properties 'dogName' and 'dogAge'.
const newHouse = {
    dogName: "Coconut",
    dogAge: 3,
}

// Using the 'call' method to explicitly bind the 'dogGreetingDos' function to the 'newHouse' object.
dogGreetingDos.call(newHouse);

//_________________________________________

// Creating a function 'newDogGreeting' with parameters 'owner' and 'address'.
function newDogGreeting(owner, address){
    // Printing a message using the 'dogName' property, and additional information about the owner and address.
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} at ${address}`);
}

// Declaring variables 'owner' and 'address' with values.
const owner = 'Lucy';
const address = "Avenue 123";

// Using the 'call' method to explicitly bind the 'newDogGreeting' function to the 'newHouse' object,
// and passing 'owner' and 'address' as additional parameters.
newDogGreeting.call(newHouse, owner, address);