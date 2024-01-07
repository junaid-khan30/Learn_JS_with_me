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
/*
var age = 45;: Declares a variable age and assigns it the value 45.
The if-else statement checks if age is greater than or equal to 12. 
If true, it further checks if age is less than or equal to 19. 
If both conditions are true, it prints "You are Teen." Otherwise, 
it prints "Time to make money." If the initial condition is false, it prints "Hey Kiddo."
console.log("You are Teen");: Since age (45) does not satisfy the conditions in the if-else statement,
this line is skipped.

Now, the ternary conditional operator:
4. (age >= 12) ? (age <= 19) ? console.log("You are Teen") : console.log("Time to make money") : console.log("Hey Kiddo");: 
This line is equivalent to the if-else statement. 
It checks if age is greater than or equal to 12. 
If true, it further checks if age is less than or equal to 19. 
If both conditions are true, it prints "You are Teen." Otherwise, it prints "Time to make money." 
If the initial condition is false, it prints "Hey Kiddo."
*/