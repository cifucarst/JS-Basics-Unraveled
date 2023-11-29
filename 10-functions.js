// Functions -> Function declaration
function calculateDiscountedPrice(price, discountPercentage) {
    const discount = (price * discountPercentage) / 100;
    const priceWithDiscount = price - discount;
    return priceWithDiscount;
}

const originalPrice = 100;
const discountPercentage = 20;
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage);
console.log('original price $' + originalPrice);
console.log('Discount ' + discountPercentage + '%');
console.log(finalPrice);

//\/\/\/\/\/\/\/\/\\/\/\/\\/\/\/\/\\/\/\/\/\/\/\/\/\/\

// Abilities that functions have like other objects

// 1. Passing functions as arguments -> callback
function a() {}

function b(a) {}
b(a);

// Returning functions
function ap() {
    function bo() {
        return bo;
    }
}

// Assigning functions to variables -> function expression
const ar = function () {}

// Having properties and methods
function ad() {}

const obj = {};
a.call(obj);

// Nesting functions -> nested functions
function ab() {
    function ba() {
        function cb() {}
        cb()
    }
    ba()
}
ab()

// Is it possible to store functions in objects?
const rocket = {
    name: "Falcon 9",
    launchMessage: function launchMessage() {
        console.log('🧨');
    }
};
