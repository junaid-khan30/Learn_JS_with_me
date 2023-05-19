/*Analyze the following code block and write the output along with 4-5 lines of reasoning.*/
var anina = "22";
var walter = "11";
console.log(anina + walter);
console.log(+anina + +walter);

/* var anina = "22";
A variable anina is declared and assigned the value "22", which is a string.

var walter = "11";
Another variable walter is declared and assigned the value "11", also a string.

console.log(anina + walter);
Output: "2211"
Reasoning: The + operator is used to concatenate the values of anina and walter as strings. Therefore, "22" and "11" are combined to form the string "2211", which is the output.

console.log(+anina + +walter);
Output: 33
Reasoning: The unary + operator is used to convert the strings anina and walter to their corresponding numeric values before performing addition. The + operator, when used on a string, attempts to convert it to a number. Therefore, the string "22" is converted to the number 22, and the string "11" is converted to the number 11. The resulting numeric values, 22 and 11, are then added together, resulting in 33, which is the output.*/