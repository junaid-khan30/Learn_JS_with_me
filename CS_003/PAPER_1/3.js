var a = 22;
var arr = [2, 3, 4];
var b = 22;
a = b;
console.log(a == 2);
console.log(a == b);
console.log(a != b);
console.log(b !== a);

/*
var a = 22;: Declares a variable a and assigns it the value 22.
var arr = [2, 3, 4];: Declares an array arr with elements 2, 3, and 4.
var b = 22;: Declares a variable b and assigns it the value 22.
a = b;: Assigns the value of b to a, so now both a and b are 22.
console.log(a == 2);: Outputs false since the value of a is now 22, not 2.
console.log(a == b);: Outputs true as both a and b have the same value, which is 22.
console.log(a != b);: Outputs false because a is equal to b.
console.log(b !== a);: Outputs false since !== checks both value and type, and in this case, both are the same (22).
*/