// 10 data types
/*
primitives    complex
string        object
number        array
boolean       function
null
undefined
symbol
bigint*/

let number = 23;
number = number + 10;
console.log(number);

let isTrue = true;
isTrue = false;
console.log(isTrue);

// complex data type, is mutable
let user = {name: "pepito", age: 15};
user.age = 20;
console.log(user);

let fruits = ["apple", "pear"];
fruits[0] = "watermelon";
console.log(fruits);

function changeName(object) {
    object.name = "New name";
};

let person = {name: "Antonio"};
console.log(changeName(person));
