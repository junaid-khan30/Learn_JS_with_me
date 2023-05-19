/*Analyze the following code block and write the output along with 4-5 lines of reasoning.*/
var a = "6";
var b = "9";
console.log(typeof a);
a = Number(a);
console.log(typeof a);

/* var a = "6";
A variable a is declared and assigned the value "6", which is a string representation of a number.

var b = "9";
Another variable b is declared and assigned the value "9", also a string representation of a number.

console.log(typeof a);
Output: "string"
Reasoning: The typeof operator is used to determine the type of the variable a, which is a string. Therefore, it will output "string".

a = Number(a);
The string value stored in the variable a is converted to a number using the Number() function.

console.log(typeof a);
Output: "number"
Reasoning: After converting the string to a number, the variable a now holds a numeric value. Therefore, the typeof operator will output "number".*/