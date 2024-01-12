function sqrt(num) {
    console.log(num ** 0.5);
}
function sum(a, b) {
    console.log(a + b);
}
sum(10, 20);
sum(15, 19);
sqrt(121);
function printName(fname, lname) {
    return (fname + " " + lname);
}
var output = printName('Prashanth', 'THS');
console.log(output);
console.log(printName("The Hacking","School"));

/*
sum(10, 20);: Calls the sum function with arguments 10 and 20, which prints the sum 30.
sum(15, 19);: Calls the sum function with arguments 15 and 19, which prints the sum 34.
sqrt(121);: Calls the sqrt function with the argument 121, which prints the square root 11.
var output = printName('Prashanth', 'THS');: Calls the printName function with arguments 'Prashanth' and 'THS' and assigns the result to the variable output.
console.log(output);: Prints the value stored in the variable output, which is 'Prashanth THS'.
console.log(printName("The Hacking", "School"));: Calls the printName function with arguments "The Hacking" and "School", and prints the result, which is 'The Hacking School'.
*/