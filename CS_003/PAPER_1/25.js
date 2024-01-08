var t = 15;
var q = 1;
console.log(++t);
console.log(q++);
console.log(q);
var t = 15;
var q = 1;
console.log(--t);
console.log(q--);
console.log(q);

/*
console.log(++t); - Outputs the result of pre-incrementing t, which increases its value by 1 before the value is used. So, the output is 16.

console.log(q++); - Outputs the current value of q and then increments it by 1 (post-increment). The output is 1, but q is now 2.

console.log(q); - Outputs the current value of q, which is now 2.

console.log(--t); - Outputs the result of pre-decrementing t, which decreases its value by 1 before the value is used. So, the output is 14.

console.log(q--); - Outputs the current value of q and then decrements it by 1 (post-decrement). The output is 1, but q is now 0.

console.log(q); - Outputs the current value of q, which is now 0.

In summary, the code demonstrates the difference between pre-increment, post-increment, pre-decrement, and post-decrement operators, affecting the values of variables t and q.
*/