/*Analyze the following code block and write the output along with 4-5 lines of reasoning.*/
for (var k = 10; k >= 1; k--) {
    var str1 = "";
    for (var i = k; i >= 1; i--) {
        str1 += i + " ";
    }
    console.log(str1);
}
/* The code block consists of two nested for loops.
The outer loop initializes k with a value of 10 and iterates as long as k is greater than or equal to 1. In each iteration, k is decremented by 1.
Inside the outer loop, a new empty string variable str1 is declared.
The inner loop initializes i with the current value of k and iterates as long as i is greater than or equal to 1. In each iteration, i is decremented by 1.
Inside the inner loop, the value of i is concatenated to the str1 variable along with a space character.
After each inner loop completes, the console.log statement is called to print the string str1.
The output displays a pattern where each line represents the numbers from k to 1, separated by spaces, starting from 10 and decreasing by 1 in each subsequent line.*/