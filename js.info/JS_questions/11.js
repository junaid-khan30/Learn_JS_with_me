/*Analyze the following code block and write the output along with 4-5 lines of reasoning.*/
var str = "code.in";
var fun = "booze";
console.log(typeof str);
console.log(str.length);
console.log(str[0]);
str = 'code..in' + fun + "do boo poo";
console.log(`${str}its rainy today${fun}do boo poo`);
console.log(str + "its rainy today" + fun + "do boo poo");

/* var str = "code.in";
A variable str is declared and assigned the value "code.in", which is a string.

var fun = "booze";
Another variable fun is declared and assigned the value "booze", also a string.

console.log(typeof str);
Output: "string"
Reasoning: The typeof operator is used to determine the type of the variable str, which is a string. Therefore, it will output "string".

console.log(str.length);
Output: 7
Reasoning: The length property of a string returns the number of characters in the string. In this case, the string "code.in" has 7 characters, so the output will be 7.

console.log(str[0]);
Output: "c"
Reasoning: Strings in JavaScript are zero-indexed, so accessing str[0] retrieves the first character of the string, which is "c". Therefore, the output will be "c".

str = 'code..in' + fun + "do boo poo";
The variable str is reassigned a new value by concatenating the string 'code..in', the value of fun ("booze"), and the string "do boo poo". The resulting value is 'code..inboozedo boo poo'.

console.log(${str}its rainy today${fun}do boo poo);
Output: "code..inboozedo boo pooits rainy todayboozedo boo poo"
Reasoning: This line uses string interpolation with the template literal syntax (${}) to concatenate the value of str, the string "its rainy today", the value of fun, and the string "do boo poo". The interpolated values are then combined into a single string, resulting in "code..inboozedo boo pooits rainy todayboozedo boo poo".

console.log(str + "its rainy today" + fun + "do boo poo");
Output: "code..inboozedo boo pooits rainy todayboozedo boo poo"
Reasoning: This line uses string concatenation to combine the value of str, the string "its rainy today", the value of fun, and the string "do boo poo". The resulting string is the same as the previous line, "code..inboozedo boo pooits rainy todayboozedo boo poo". */