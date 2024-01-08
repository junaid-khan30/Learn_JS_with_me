var a = 4;
var b = 8;
console.log(a & b);
console.log(a | b);
console.log(a ^ b);

/*
console.log(a & b); - Outputs the result of the bitwise AND operation between the binary representations of a (100) and b (1000). 
The AND operation returns 0 where there are no matching 1 bits, so the result is 000 in binary, which is 0 in decimal.

console.log(a | b); - Outputs the result of the bitwise OR operation between the binary representations of a (100) and b (1000). 
The OR operation returns 1 where there is at least one matching 1 bit, so the result is 1100 in binary, which is 12 in decimal.

console.log(a ^ b); - Outputs the result of the bitwise XOR operation between the binary representations of a (100) and b (1000). 
The XOR operation returns 1 where there is an odd number of matching 1 bits, so the result is 1100 in binary, which is 12 in decimal.
*/