/*Analyze the following code block and write the output along with 4-5 lines of reasoning.*/ 
var a = 1;
var b = 2;
var c = 4 - (a = b + 10);
console.log(b + ++c);
console.log(a, b, c);
/*
(a = b + 10) assigns the value of b + 10 (12) to a and also returns the assigned value.

var c = 4 - (a = b + 10); subtracts the value assigned to a (12) from 4 and assigns the result (-8) to variable c.
At this point, a is 12, b is 2, and c is -8.

console.log(b + ++c); prints the value of b (2) plus the value of c after incrementing it by 1. The increment operator ++ is a prefix increment, which means the value of c will be incremented before the addition operation.
c is incremented to -7, and the sum of b (2) and c (-7) is -5.
The output of this line is -5.
console.log(a, b, c); prints the values of a, b, and c.
The current values of a, b, and c are 12, 2, and -7, respectively.
The output of this line is: 12 2 -7.*/