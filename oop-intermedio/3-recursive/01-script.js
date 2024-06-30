/*
Recursive Function in JavaScript

Recursion is a programming technique where a function calls itself to solve a 
problem. A recursive function must have a base case to prevent infinite calls 
and allow the execution to terminate. Recursion is commonly used for problems 
that can be divided into smaller, similar subproblems.

Example: Calculating Factorial using Recursion */

function factorial(n) {
    // Base case: if n is 0, the factorial of 0 is 1
    if (n === 0) {
      return 1;
    }
    // Recursive call: multiply n by the factorial of n-1
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5)); // Output: 120

/*
Explanation of the Example:

Base Case: if (n === 0) { return 1; }

This is the condition that stops the recursion. If n is 0, the function returns 1, as the factorial 
of 0 is 1.

Recursive Call: return n * factorial(n - 1);

Here, the function calls itself with n - 1. This call continues until the base case is reached.

Step-by-step execution for factorial(5):

factorial(5) calls factorial(4)
factorial(4) calls factorial(3)
factorial(3) calls factorial(2)
factorial(2) calls factorial(1)
factorial(1) calls factorial(0)
factorial(0) returns 1 (base case)
factorial(1) returns 1 * 1 = 1
factorial(2) returns 2 * 1 = 2
factorial(3) returns 3 * 2 = 6
factorial(4) returns 4 * 6 = 24
factorial(5) returns 5 * 24 = 120
Recursive Power of Caution

Recursion is a powerful tool, but it should be used carefully to avoid issues like stack overflow, 
which occurs if the recursion is too deep or doesn't have a proper base case. */