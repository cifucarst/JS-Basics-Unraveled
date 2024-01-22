/* Logical AND Operator (&&):

Syntax: expr1 && expr2
Returns true if both expressions expr1 and expr2 are true. If either of the expressions is false, the result is false.
Example: */

var x = 5;
var y = 10;
console.log(x > 0 && y > 0);  // Returns true, both conditions are true
console.log(x > 0 && y < 0);  // Returns false, one of the conditions is false


/* Logical OR Operator (||):

Syntax: expr1 || expr2
Returns true if at least one of the expressions expr1 or expr2 is true. 
Only returns false if both expressions are false.
Example: */

var x = 5;
var y = 10;
console.log(x > 0 || y > 0);  // Returns true, at least one condition is true
console.log(x < 0 || y < 0);  // Returns false, both conditions are false


/* Logical NOT Operator (!):

Syntax: !expr
Returns true if the expression expr is false, and vice versa. It is a unary operator that inverts the boolean value of the expression.
Example: */

var x = 5;
var y = 10;
console.log(!(x > 0));  // Returns false, the original condition is true
console.log(!(y < 0));  // Returns true, the original condition is false