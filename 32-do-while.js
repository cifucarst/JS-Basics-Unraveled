/*
The do-while loop in JavaScript works similarly to the while loop, but with a
crucial difference: the condition is evaluated after the code block is executed.
This means that the code block will be executed at least once, even if the
initial condition is already false.

Here is the basic structure of the do-while loop: */

do {
    // Code to be executed at least once
    // The condition is evaluated after each iteration
} while (condition);


let counter = 0;
do {
  console.log(`Iteration ${counter}`);
  counter++;
} while (counter < 5);