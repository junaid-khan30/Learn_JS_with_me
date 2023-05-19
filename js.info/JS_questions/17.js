/*Analyze the following code block and write the output along with 4-5 lines of reasoning.*/
console.log(+"" + 1 + 0);
console.log(-"" + 1 + 0);
console.log("" - 1 + 0);
console.log(" " + 5);
console.log(false + true);
console.log(6 / "2");
console.log("2" / "3");
console.log("4" + "5" + "%");
console.log("$" + 4 + 5);
console.log("4%" - 2);
console.log("   -11    " + 55);
console.log("   -11    " - 55);
console.log(null + 1);
console.log(null * 8);
console.log(undefined + 1);
console.log("undefined" + 1);
console.log("            " - 2);

/* console.log(+"" + 1 + 0);
Output: 10
Reasoning: The unary + operator is used to convert an empty string "" to a numeric value, which results in 0. Then, the subsequent concatenation operations are performed, resulting in the string "10", which is the output.

console.log(-"" + 1 + 0);
Output: 10
Reasoning: Similar to the previous line, the unary - operator converts an empty string "" to a numeric value, resulting in 0. The subsequent concatenation operations also yield the string "10", which is the output.

console.log("" - 1 + 0);
Output: -1
Reasoning: The subtraction operation is performed between an empty string "" and the number 1, resulting in -1. The subsequent addition operation with 0 does not change the value, so the output remains -1.

console.log(" " + 5);
Output: " 5"
Reasoning: The string concatenation operation is performed between a space character " " and the number 5, resulting in the string " 5", which includes the space character.

console.log(false + true);
Output: 1
Reasoning: In JavaScript, false is treated as 0 and true is treated as 1 when used in numeric operations. Therefore, the addition operation between false and true results in 1.

console.log(6 / "2");
Output: 3
Reasoning: The division operation is performed between the number 6 and the string "2", which is automatically converted to a number. The result is 3, which is the output.

console.log("2" / "3");
Output: 0.6666666666666666
Reasoning: Both the strings "2" and "3" are converted to numbers, and the division operation is performed between them. The result is a floating-point number 0.6666666666666666.

console.log("4" + "5" + "%");
Output: "45%"
Reasoning: The string concatenation operation is performed between the strings "4", "5", and "%", resulting in the string "45%".

console.log("$" + 4 + 5);
Output: "$45"
Reasoning: The string concatenation operation is performed between the strings "$", "4", and "5", resulting in the string "$45".

console.log("4%" - 2);
Output: NaN
Reasoning: The subtraction operation is attempted between the string "4%" and the number 2. However, the string cannot be converted to a numeric value, resulting in NaN (Not a Number) as the output.

console.log(" -11 " + 55);
Output: " -11 55"
Reasoning: The string concatenation operation is performed between the strings " -11 " and "55", resulting in the string " -11 55".

console.log(" -11 " - 55);
Output: -66
Reasoning: The subtraction operation is performed between the string `"*/