// Define a function that returns a personalized message
const personalizedMessage = () => 'Goodbye everybody🦸🏽‍♂️!';

// Create a constructor function for the Rocket class
function Rocket(name, ownMessage) {
  // Set the name and launchMessage properties for each rocket instance
  this.name = name;
  this.launchMessage = ownMessage;
}

// Create two instances of the Rocket class using the constructor function
const falcon9Rocket = new Rocket('Falcon 9', personalizedMessage);
const falcon9HeavyRocket = new Rocket('Falcon Heavy', personalizedMessage);

// Call the launchMessage method for each rocket instance and print the result to the console
console.log(falcon9Rocket.launchMessage());
console.log(falcon9HeavyRocket.launchMessage());

// Define an arrow function that returns a Rocket object
const RocketWithArrowFunction = (name, ownMessage) => ({
  name: name,
  launchMessage: ownMessage,
});

// Define a function that returns a personalized message for the arrow function
const personalizedMessageForArrowFunction = () => 'Successful launch!';

// Create an instance of the Rocket object using the arrow function
const falcon9Rocket1 = RocketWithArrowFunction('Falcon 9', personalizedMessageForArrowFunction);

// Access the name and launchMessage properties of the falcon9Rocket1 object and print them to the console
console.log(falcon9Rocket1.name);
console.log(falcon9Rocket1.launchMessage());
