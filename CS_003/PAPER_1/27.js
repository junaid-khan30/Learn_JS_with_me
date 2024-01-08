var y = 0;
var t = 5;
console.log(--t - --t - t-- + ++y + 0);
console.log(y);
console.log(t);

/*
console.log(--t - --t - t-- + ++y + 0); - Evaluates the expression from left to right:

--t: Pre-decrements t to 4.
--t: Pre-decrements t again to 3.
t--: Uses the current value of t (3) and then post-decrements t to 2.
++y: Pre-increments y to 1.
The sum is 3 - 2 - 2 + 1 + 0 = -1, which is the output.
console.log(y); - Outputs the current value of y, which is now 1 after the pre-increment operation.

console.log(t); - Outputs the current value of t, which is now 2 after the operations in the first line.

In summary, the code demonstrates the order of operations in a complex expression involving pre-decrement, post-decrement, pre-increment, and subtraction, 
resulting in the output values of -1, 1, 
and 2 for the three console.log statements.

*/