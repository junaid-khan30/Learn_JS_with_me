var y = 10;
var x ;
x ?? (x = 5 ** 3);
console.log(x);
/*
?? Operator : it is called nullish coalscing operator which is basically a logical operator that returns the value of its left-hand operand if it is not null or undefined, otherwise, it evaluates the right-hand operand and returns its value.

In var x ;,  x is variable and not assigned by any value, So  by default it will take undefined when we execute x

In x ?? (x = 5 ** 3); since x is initially undefined, the nullish coalescing operator evaluates the right-hand side expression (x = 5 ** 3) that is 125
*/