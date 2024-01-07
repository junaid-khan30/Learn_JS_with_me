var a = "Walter";
var b = "Prash";
console.log(a + b);
console.log('"WalterPrash"');
console.log("\"WalterPrash\"");
console.log(`"${a}${b}"`);
console.log(`"${a}\t\n${b}"`);

/*
console.log(a + b);: Concatenates the values of a and b and outputs the result. The output is WalterPrash.
console.log('"WalterPrash"');: Outputs the string "WalterPrash" directly.
console.log("\"WalterPrash\"");: Outputs the string "WalterPrash" using escaped double quotes.
console.log("${a}${b}");: Uses template literals to concatenate the values of a and b within double quotes and outputs the result. The output is "WalterPrash".
console.log("${a}\t\n${b}");: Uses template literals to create a string that includes the values of a and b separated by a tab (\t) and a newline character (\n) within double quotes. 
The output will show the effect of the tab and newline characters.
*/