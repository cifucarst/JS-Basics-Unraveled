// Owner and address details
const owner = "Lucy";
const address = "123 avenue";

// Function to greet the dog, incorporating owner and address information
function dogGreeting(owner, address) {
    // Using 'this.dogName' to dynamically include the dog's name (set by the context)
    console.log(`Hi, I'm ${this.dogName} and live with ${owner} at ${address}`);
}

// Object representing a new house with a dog named Coconut
const newHouse = {
    dogName: 'Coconut',
}

// Calling dogGreeting using the call method to set the context to 'newHouse'
dogGreeting.call(newHouse, owner, address);

//___________________________________________

// Creating an array with necessary values (owner and address)
const necessaryValues = [owner, address];

// Calling dogGreeting using the apply method with the array of necessary values
dogGreeting.apply(newHouse, necessaryValues);

//___________________________________________

// Using the bind method to create a new function with a fixed context ('newHouse') and pre-set owner and address
const bindingWithBind = dogGreeting.bind(newHouse, owner, address);

// Calling the newly created function
bindingWithBind();
