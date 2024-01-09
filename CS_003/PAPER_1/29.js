var a = true;
var b = 1;
var c = 3.14;
var d = '100';
var e = null;
var t;
console.log(typeof a);
console.log(typeof b, typeof c);
console.log(typeof d);
console.log(typeof +d);
console.log(typeof e);
console.log(typeof t);

/*
typeof a: This prints "boolean" since the variable a is assigned the boolean value true.

typeof b, typeof c: This prints "number" for variable b and "number" for variable c because b is assigned the integer value 1, and c is assigned the floating-point value 3.14.

typeof d: This prints "string" because variable d is assigned a string value '100'.

typeof +d: The unary plus operator (+) attempts to convert the string to a number. The output is "number" because d is converted to the numeric value 100.

typeof e: This prints "object" because e is explicitly assigned the value null, and in JavaScript, null is considered an object.

typeof t: This prints "undefined" because the variable t is declared but not assigned any value.
*/