function FtoC(f) {
    var c = ((f - 32) * 5 / 9).toFixed(2);
    return (c + "\u2103");
}
var FarToCel = function (f) {
    var c = ((f - 32) * 5 / 9).toFixed(2);
    return (c + "\u2103");
}
var f2c = (f) => {
    var c = ((f - 32) * 5 / 9).toFixed(2);
    return (c + "\u2103");
}
console.log(FtoC(75.5));
console.log(FarToCel(85.5));
console.log(f2c(95.5));

/*
console.log(FtoC(75.5));: Calls the FtoC function with the argument 75.5, which converts Fahrenheit to Celsius and prints the result with the ℃ symbol. The output is 24.17℃.
console.log(FarToCel(85.5));: Calls the FarToCel function (defined using function expression) with the argument 85.5, 
which converts Fahrenheit to Celsius and prints the result with the ℃ symbol. The output is 29.72℃.
console.log(f2c(95.5));: Calls the arrow function f2c with the argument 95.5, 
which also converts Fahrenheit to Celsius and prints the result with the ℃ symbol. The output is 35.28℃.
All three functions (FtoC, FarToCel, and f2c) perform the same Fahrenheit to Celsius conversion and return the result with the Celsius symbol (\u2103). 
Different syntaxes (function declaration, function expression, and arrow function) are used to define the functions, 
showcasing multiple ways to define functions in JavaScript.
*/