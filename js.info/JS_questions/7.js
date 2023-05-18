/* Analyze the following code block and write the output along with 4-5 lines of reasoning.*/
var age = 45;
if (age >= 12) {
    if (age <= 19) {
        console.log("You are Teen");
    } else {
        console.log("Time to make money");
    }
} else {
    console.log("Hey Kiddo");
}
(age >= 12) ? (age <= 19) ? console.log("You are Teen") : console.log("Time to make money") : console.log("Hey Kiddo");

/*var age = 45; assigns the value 45 to the variable age.
The first if statement checks the condition age >= 12. Since age is 45, the condition is true, and the code block inside the if statement is executed.
Inside the first if statement, the second if statement checks the condition age <= 19. Since age is not less than or equal to 19, the condition is false, and the else block is executed.
The line console.log("Time to make money"); is executed and prints "Time to make money".

The ternary operator ? : at the end of the code block is a shorthand if-else statement.
It checks the condition (age >= 12), which is true. Therefore, the expression after the first question mark is evaluated.
Since the first condition is true, the expression (age <= 19) is evaluated. However, it is false because age is not less than or equal to 19. Therefore, the expression after the second question mark is executed.
The line console.log("Time to make money"); is executed again and prints "Time to make money". */