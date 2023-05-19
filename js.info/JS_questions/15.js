/*Analyze the following code block and write the output along with 4-5 lines of reasoning.*/
var a = 1;
console.log(typeof a);
a = Boolean(a);
console.log(typeof a);
console.log(a);
var b = 0;
console.log(typeof b);
b = Boolean(b);
console.log(typeof b);
console.log(b);
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean("0"));
/* var a = 1;
A variable a is declared and assigned the value 1, which is a numeric value.

console.log(typeof a);
Output: "number"
Reasoning: The typeof operator is used to determine the type of the variable a, which is a number. Therefore, it will output "number".

a = Boolean(a);
The numeric value stored in the variable a is converted to a boolean using the Boolean() function.

console.log(typeof a);
Output: "boolean"
Reasoning: After converting the number to a boolean, the variable a now holds a boolean value. Therefore, the typeof operator will output "boolean".

console.log(a);
Output: true
Reasoning: The value of a after conversion to a boolean is true. Therefore, it will output true.

var b = 0;
Another variable b is declared and assigned the value 0, which is a numeric value.

console.log(typeof b);
Output: "number"
Reasoning: The typeof operator is used to determine the type of the variable b, which is a number. Therefore, it will output "number".

b = Boolean(b);
The numeric value stored in the variable b is converted to a boolean using the Boolean() function.

console.log(typeof b);
Output: "boolean"
Reasoning: After converting the number to a boolean, the variable b now holds a boolean value. Therefore, the typeof operator will output "boolean".

console.log(b);
Output: false
Reasoning: The value of b after conversion to a boolean is false. Therefore, it will output false.

console.log(Boolean(""));
Output: false
Reasoning: The Boolean() function is used to convert an empty string "" to a boolean value. An empty string is considered falsy, so it will be converted to false. Therefore, it will output false.

console.log(Boolean(" "));
Output: true
Reasoning: The Boolean() function is used to convert a string with a single space " " to a boolean value. A non-empty string, even with whitespace characters, is considered truthy, so it will be converted to true. Therefore, it will output true.

console.log(Boolean("0"));
Output: true
Reasoning: The Boolean() function is used to convert the string "0" to a boolean value. A non-empty string, even if it contains the character "0", is considered truthy, so it will be converted to true. Therefore, it will output true. */