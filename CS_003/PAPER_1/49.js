var c2f = (c) => {
    return ((c * 9) / 5) + 32 + " \u2109 ";
};
var c2f2 = (c) => ((c * 9) / 5) + 32 + " \u2109 ";
console.log(c2f(24.5));
console.log(c2f2(34.5));
/*
console.log(c2f(24.5));: Calls the arrow function c2f with the argument 24.5, 
which converts Celsius to Fahrenheit and prints the result with the ℉ symbol. The output is 76.1 ℉.
console.log(c2f2(34.5));: Calls the arrow function c2f2 with the argument 34.5, 
which also converts Celsius to Fahrenheit and prints the result with the ℉ symbol. The output is 94.1 ℉.
Both arrow functions (c2f and c2f2) perform the same Celsius to Fahrenheit conversion and 
return the result with the Fahrenheit symbol (\u2109). 
The difference in syntax illustrates the flexibility of arrow functions in JavaScript, 
allowing concise expressions when the function body is a single line.
*/