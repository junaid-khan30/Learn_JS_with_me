
var a = 1;
var b = 2;
var c = 4 - (a = b + 10);
console.log(b + ++c);
console.log(a, b, c);

/*
var a = 1;: Declares a variable a and assigns it the value 1.
var b = 2;: Declares a variable b and assigns it the value 2.
var c = 4 - (a = b + 10);: Calculates the value of a (which becomes 12), subtracts it from 4, and assigns the result to c (so, c becomes -8).
console.log(b + ++c);: Increments the value of c by one (-7), then adds it to b (2). Outputs the result, which is 2 + (-7) = -5.
console.log(a, b, c);: Outputs the values of a, b, and c, which are 12, 2, and -7, respectively
*/