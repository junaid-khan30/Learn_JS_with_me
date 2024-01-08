console.log(7 && 8);
console.log(8 && 2 && 4);
console.log(-2 && 9 && 0);
console.log(-2 && 9 && 10);

/*
console.log(7 && 8); - Outputs the result of the logical AND operation between 7 and 8. The && operator returns the last truthy value if all values are truthy. In this case, both 7 and 8 are truthy, so it returns 8.

console.log(8 && 2 && 4); - Outputs the result of the logical AND operation between 8, 2, and 4. Again, the && operator returns the last truthy value, which is 4.

console.log(-2 && 9 && 0); - Outputs the result of the logical AND operation between -2, 9, and 0. The first falsy value encountered is 0, so it returns 0.

console.log(-2 && 9 && 10); - Outputs the result of the logical AND operation between -2, 9, and 10. All values are truthy, so it returns the last truthy value, which is 10.
*/