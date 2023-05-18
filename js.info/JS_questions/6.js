/* Analyze the following code block and write the output along with 4-5 lines of reasoning. */
var num = 2;
var t = 2;
(t *= 3) + 5;
t + 5;
console.log(t);
num *= 3 + 5;
console.log(num);
/* Here *= is compound assignment operator whose function is to multiply the value with given number 

So here t is 2 and t*= 3 is 6 , after that we have +5 which adds to 11 but this value is not stored or used anywhere therefore value of t is 6

In num *= 3 + 5 , value of num gets mulitiplied by 8 therefore it is 16 */