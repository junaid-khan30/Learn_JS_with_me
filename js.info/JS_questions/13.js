/*Analyze the following code block and write the output along with 4-5 lines of reasoning.*/
var fname = "prash";
console.log(typeof fname);
var value = true;
console.log(typeof value);
value = String(value);
console.log(typeof value);
/*console.log(typeof fname);
Output: "string"
Reasoning: The typeof operator is used to determine the type of the variable fname, which is a string. Therefore, it will output "string".

console.log(typeof value);
Output: "boolean"
Reasoning: The typeof operator is used to determine the type of the variable value, which is a boolean. Therefore, it will output "boolean".

console.log(typeof value);
Output: "string"
Reasoning: After converting the boolean value to a string, the variable value now holds a string value. Therefore, the typeof operator will output "string".*/