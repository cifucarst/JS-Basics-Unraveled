// Traditional function for almuerzo with explicit return
// function almuerzo(proteina, verdura) {
//     return `${proteina} ${verdura}`;
// }
// console.log(almuerzo('huevo', 'brocoli'));

// Arrow function for almuerzo with explicit return
const almuerzo1 = (proteina, verdura) => {
    return `${proteina} ${verdura}`;
}
console.log(almuerzo1('huevo', 'brocoli'));

//_______________________________________

// Regular function for greeting
const greeting = function (name) {
    return `Hi, ${name}`;
}

// Arrow function for greeting with implicit return
const newGreeting = (names) => `Hi, ${names}`;

//_______________________________________

// Lexical binding example with a fictional character object
const fictionalCharacter = {
    name: 'Uncle Ben',
    // Traditional function as a method with access to 'this'
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`);
    },
    // Arrow function as a method with a lexical scope for 'this'
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`);
        // Note: Arrow functions don't have their own 'this', so they inherit from the enclosing scope.
    },
}

// Invoking methods with different function types
fictionalCharacter.messageWithTraditionalFunction("With great power comes great responsibility");
fictionalCharacter.messageWithArrowFunction("Beware of Doctor Octopus.");