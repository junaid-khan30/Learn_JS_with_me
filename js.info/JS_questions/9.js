/*Analyze the following code block and write the output along with 4-5 lines of reasoning.*/
var a = 15;
var b = 10;
console.log(a ^ b);
console.log(a % b);
console.log(20 ** 2);
console.log(-15 << 2);
console.log(15 << 2);
console.log(10 >> 2);
console.log(-15 >> 2);
console.log(-22 >> 3);
console.log(-22 >>> 3);
/* console.log(a ^ b);
Output: 5
Reasoning: The ^ operator performs a bitwise XOR operation on the binary representation of a and b. In binary, 15 is represented as 1111 and 10 as 1010. Performing XOR on these values results in 0101, which is 5 in decimal.

console.log(a % b);
Output: 5
Reasoning: The % operator calculates the remainder of the division of a by b. In this case, 15 divided by 10 yields a remainder of 5.

console.log(20 ** 2);
Output: 400
Reasoning: The ** operator represents exponentiation. Thus, 20 raised to the power of 2 is 400.

console.log(-15 << 2);
Output: -60
Reasoning: The << operator performs a left shift operation, shifting the bits of the binary representation of -15 two positions to the left. Shifting left by two positions effectively multiplies the number by 2^2, resulting in -60.

console.log(15 << 2);
Output: 60
Reasoning: Similar to the previous line, this line performs a left shift operation on the binary representation of 15, shifting the bits two positions to the left. Shifting left by two positions effectively multiplies the number by 2^2, resulting in 60.

console.log(10 >> 2);
Output: 2
Reasoning: The >> operator performs a sign-propagating right shift operation, shifting the bits of the binary representation of 10 two positions to the right. Shifting right by two positions effectively divides the number by 2^2, resulting in 2.

console.log(-15 >> 2);
Output: -4
Reasoning: The >> operator performs a sign-propagating right shift operation on the binary representation of -15, shifting the bits two positions to the right. Shifting right by two positions effectively divides the number by 2^2, resulting in -4.

console.log(-22 >> 3);
Output: -3
Reasoning: The >> operator performs a sign-propagating right shift operation on the binary representation of -22, shifting the bits three positions to the right. Shifting right by three positions effectively divides the number by 2^3, resulting in -3.

console.log(-22 >>> 3);
Output: 536870909
Reasoning: The >>> operator performs a zero-fill right shift operation on the binary representation of -22, shifting the bits three positions to the right. Unlike the >> operator, the >>> operator fills the leftmost positions with zeroes. Shifting right by three positions and filling with zeroes results in the positive decimal value 536870909.`*/