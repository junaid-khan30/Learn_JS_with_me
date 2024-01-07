 
var num = 2;
var t = 2;
(t *= 3) + 5;
t + 5;
console.log(t);
num *= 3 + 5;
console.log(num);
/*
var num = 2;: Declares a variable num and assigns it the value 2.
var t = 2;: Declares a variable t and assigns it the value 2.
(t *= 3) + 5;: Multiplies the value of t by 3 (resulting in 6), then adds 5 to the result (11). However, this result is not stored or used in subsequent operations.
t + 5;: Adds 5 to the current value of t (2), but the result is not stored or used further.
console.log(t);: Outputs the value of t, which is 6 (the value after the multiplication).
num *= 3 + 5;: Multiplies the current value of num (2) by the result of 3 + 5 (8), updating the value of num to 16.
console.log(num);: Outputs the updated value of num, which is 16.
*/