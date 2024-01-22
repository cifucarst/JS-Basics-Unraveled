/*In JavaScript, the this keyword refers to the current execution context, and its 
value is determined by how a function is called or how an object is accessed. 
The value of this is dynamic and can change depending on the context in which a 
function is invoked. Here are some common scenarios where the value of this can be 
different:*/

/*Default Binding:

When a function is called in the global scope, this inside the function refers to the 
global object (e.g., window in a browser environment).*/

function globalFunction() {
    console.log(this); // refers to the global object (e.g., window in a browser)
}
globalFunction();

//____________________________________________________________________________________

/*Implicit Binding:

When a function is called as a method of an object, this inside the function refers 
to the object on which the method is invoked.*/

const obj = {
    property: "value",
    method: function() {
        console.log(this.property); // refers to the obj's property
    }
};

obj.method();

//____________________________________________________________________________________

/*Explicit Binding:

You can explicitly set the value of this using functions like call, apply, or bind.*/

function explicitFunction() {
    console.log(this);
}

const explicitObj = { name: "Explicit Object" };

explicitFunction.call(explicitObj); // sets this to explicitObj

//____________________________________________________________________________________

/*New Binding:

When a function is used as a constructor with the new keyword, this refers to the
newly created instance.*/

function ConstructorFunction(name) {
    this.name = name;
}

const instance = new ConstructorFunction("New Instance");
console.log(instance.name); // "New Instance"

//____________________________________________________________________________________

/*Arrow Functions:

Arrow functions do not have their own this binding; instead, they inherit the this 
value from the enclosing lexical scope.*/

const arrowFunction = () => {
    console.log(this); // refers to the outer scope's this (lexical binding)
};

arrowFunction();