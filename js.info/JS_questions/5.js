/* Analyze the following code block and write the output along with 4-5 lines of reasoning.*/ 
var i = 0;
while (i <= 10) {
    console.log(i);
    --i;
}
/*here i is assigned as 0 and while is given 
The condition i <= 10 is checked. Since i is 0, the condition is true.

console.log(i); prints the current value of i, which is 0.
--i; decrements the value of i by 1. After this line, i becomes -1.
The loop continues:
The condition i <= 10 is checked. Since i is -1, the condition is still true.
The code block is executed again.
console.log(i); prints the current value of i, which is -1.
--i; decrements i further by 1. After this line, i becomes -2.
The loop continues to iterate, following the same pattern of printing i and decrementing its value by 1 in each iteration.
The loop will continue indefinitely because i keeps getting smaller and never reaches a value greater than 10. This is because the loop is stuck in an infinite decreasing loop. */