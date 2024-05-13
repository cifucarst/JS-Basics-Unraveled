#!/usr/bin/env node

/**
 * Value and Reference
 */

// Value types

let my_int_a = 10;                     // Assigns the integer value 10 to my_int_a
let my_int_b = my_int_a;               // Copies the value of my_int_a into my_int_b
my_int_b = 20;                         // Overrides the value of my_int_b with 20
// my_int_a = 30;                      // This comment suggests my_int_a can be changed to 30
console.log(my_int_a);                 // Prints the current value of my_int_a
console.log(my_int_b);                 // Prints the current value of my_int_b

// Reference types

let my_list_a = [10, 20];              // Creates a list with elements 10 and 20 and assigns it to my_list_a
let my_list_b = my_list_a.slice();     // Assigns a shallow copy of my_list_a to my_list_b
my_list_b.push(30);                    // Adds element 30 to my_list_b
console.log(my_list_a);                // Prints the current elements of my_list_a
console.log(my_list_b);                // Prints the current elements of my_list_b

// Functions with value data

function my_int_func(my_int) {
    my_int = 20;                       // Assigns 20 to my_int
    console.log(my_int);
}

let my_int_c = 10;                     // Assigns the integer value 10 to my_int_c
my_int_func(my_int_c);                 // Calls my_int_func with my_int_c as argument
console.log(my_int_c);                 // Prints the current value of my_int_c

// Functions with reference data

function my_list_func(my_list) {
    my_list.push(30);                  // Appends 30 to the list

    let my_list_d = my_list.slice();   // Assigns a shallow copy of my_list to my_list_d
    my_list_d.push(40);                // Appends 40 to my_list_d

    console.log(my_list);              // Prints the current elements of my_list
    console.log(my_list_d);            // Prints the current elements of my_list_d
}

let my_list_c = [10, 20];              // Creates a list with elements 10 and 20 and assigns it to my_list_c
my_list_func(my_list_c);               // Calls my_list_func with my_list_c as argument
console.log(my_list_c);                // Prints the current elements of my_list_c

/**
 * Extra
 */

// By value

function value(value_a, value_b) {
    let temp = value_a;                // Assigns the value of value_a to temp
    value_a = value_b;                 // Assigns the value of value_b to value_a
    value_b = temp;
    return [value_a, value_b];         // Returns value_a and value_b as an array
}

let my_int_d = 10;                     // Assigns the integer value 10 to my_int_d
let my_int_e = 20;                     // Assigns the integer value 20 to my_int_e
let [my_int_f, my_int_g] = value(my_int_d, my_int_e);  // Calls value function with my_int_d and my_int_e as arguments
console.log(`${my_int_d}, ${my_int_e}`);  // Prints the current values of my_int_d and my_int_e
console.log(`${my_int_f}, ${my_int_g}`);  // Prints the swapped values of my_int_d and my_int_e

// By reference

function ref(value_a, value_b) {
    let temp = value_a;                // Assigns the reference of value_a to temp
    value_a = value_b;                 // Assigns the reference of value_b to value_a
    value_b = temp;                    // Assigns the reference of temp to value_b
    return [value_a, value_b];         // Returns value_a and value_b as an array
}

let my_list_e = [10, 20];              // Creates a list with elements 10 and 20 and assigns it to my_list_e
let my_list_f = [30, 40];              // Creates a list with elements 30 and 40 and assigns it to my_list_f
let [my_list_g, my_list_h] = ref(my_list_e, my_list_f);  // Calls ref function with my_list_e and my_list_f as arguments
console.log(`${my_list_e}, ${my_list_f}`);  // Prints the current elements of my_list_e and my_list_f
console.log(`${my_list_g}, ${my_list_h}`);  // Prints the swapped elements of my_list_e and my_list_f