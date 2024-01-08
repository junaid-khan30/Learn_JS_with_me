var a = 5;
console.log(~a);

/*
Binary representation of a is 00000000000000000000000000000101 (32 bits, assuming signed 32-bit integers).
Applying the bitwise NOT operation (~) flips all the bits, resulting in 11111111111111111111111111111010.
Converting the binary representation back to decimal, considering it as a signed integer, results in -6.
Therefore, console.log(~a); outputs -6 due to the bitwise NOT operation on the binary representation of the number 5.
*/