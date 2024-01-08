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

/*
The + operator is used for string concatenation when one operand is a string. The empty string "" is converted to 0 when using the unary + operator. So, +"" + 1 + 0 evaluates to 0 + 1 + 0, resulting in 10.
The - operator performs arithmetic subtraction. The empty string "" is converted to 0 when using the unary - operator. So, -"" + 1 + 0 evaluates to -0 + 1 + 0, resulting in 10.
The - operator performs arithmetic subtraction. An empty string "" is converted to 0 when used in a numeric context. So, "" - 1 + 0 evaluates to 0 - 1 + 0, resulting in -1.
The + operator is used for string concatenation. A space character " " is concatenated with the number 5, resulting in the string " 5".
The true and false boolean values are implicitly converted to 1 and 0, respectively, when used in a numeric context. So, false + true evaluates to 0 + 1, resulting in 1.
The division operator / performs division. The string "2" is converted to the number 2, so 6 / "2" evaluates to 6 / 2, resulting in 3.
The division operator / performs division. The strings "2" and "3" are converted to the numbers 2 and 3, respectively. So, "2" / "3" evaluates to 2 / 3, resulting in the approximate decimal value of 0.6666666666666666.
The + operator is used for string concatenation. The strings "4", "5", and "%" are concatenated together, resulting in the string "45%".
The + operator is used for string concatenation. The number 4 is concatenated with the strings "5", resulting in the string "$45".
The string "%" is not a valid operand for the - operator, so "4%" - 2 results in NaN (Not a Number).
The space characters in the string " -11 " are preserved during string concatenation. So, " -11 " + 55 evaluates to the string " -11 55".
The - operator performs arithmetic subtraction. The space characters in the string " -11 " are ignored and converted to the number -11, so " -11 " - 55 evaluates to -11 - 55, resulting in -66.
The null value is converted to 0 when used in a numeric context. So, null + 1 evaluates to 0 + 1, resulting in 1.
The null value is converted to 0 when used in a numeric context. So, null * 8 evaluates to 0 * 8, resulting in 0.
The undefined value is converted
*/