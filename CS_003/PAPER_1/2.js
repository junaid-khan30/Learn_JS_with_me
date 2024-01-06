var y = 10;
var x ;
x ?? (x = 5 ** 3);
console.log(x);

/*
var y = 10;: Declares a variable y and assigns it the value 10.

var x;: Declares a variable x without assigning any value, so its current value is undefined.

x ?? (x = 5 ** 3);: The nullish coalescing operator (??) checks if x is null or undefined. If it is, it evaluates the expression on the right side and assigns that value to x. In this case, since x is initially undefined, the right side of ?? is evaluated, and x is assigned the value 5 ** 3 (125).

console.log(x);: Outputs the value of x, which is now 125 because of the nullish coalescing assignment.

So, the final output is 125. The ?? operator is used here to provide a default value (the result of 5 ** 3) for x only if x is initially null or undefined. If x already had a value (even a falsy one like 0), the right side of ?? would not be evaluated.
*/