console.log(7 || 8);
console.log(8 || 2 || 4);
console.log(0 || 0 || 10);
console.log(-2 || 9 || 10);

/*
console.log(7 || 8); - Outputs the result of the logical OR operation between 7 and 8. The || operator returns the first truthy value encountered, so it returns 7.

console.log(8 || 2 || 4); - Outputs the result of the logical OR operation between 8, 2, and 4. The || operator returns the first truthy value, which is 8.

console.log(0 || 0 || 10); - Outputs the result of the logical OR operation between 0, 0, and 10. The || operator returns the first truthy value, which is 10.

console.log(-2 || 9 || 10); - Outputs the result of the logical OR operation between -2, 9, and 10. The || operator returns the first truthy value, which is -2.

In summary, the output is determined by the logical OR operations, returning the first truthy value encountered or the last falsy value if all values are falsy.
*/