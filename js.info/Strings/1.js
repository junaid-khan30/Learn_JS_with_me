var single = 'single-quoted';
var double = "double-quoted";

var backticks = `backtickss`;
console.log(single);
console.log(double);
console.log(backticks);

//Single and double quotes are essentially the same. Backticks, however, allow us to embed any expression into the string, by wrapping it in ${…}:

function sum(a, b){
    return (a + b);
}
console.log(`6 + 2 = ${sum(6, 2)}`);

//Another advantage of using backticks is that they allow a string to span multiple lines:

var boyslist = `boyslist
prash
abhinav
adnan
`;
console.log(boyslist);

//But single or double quotes do not work this way.
//If we use them and try to use multiple lines, there’ll be an error