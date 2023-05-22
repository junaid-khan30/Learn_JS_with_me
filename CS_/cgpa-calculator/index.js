var readlineSync = require('readline-sync');
var mgpaCalculator = require("./mgpa.js");
var cgpaCalculator = require("./cgpa.js");

while (true){
console.log("-------------------");
console.log("OPTIONS");
console.log("-------------------");
console.log("0 Exit Program");
console.log("1 Calculate MGPA");
console.log("2 Calculate CGPA");
console.log("-------------------");

var userChoice = readlineSync.questionInt("Select from the Options Menu:");
switch (userChoice) {
    case 1:
        mgpaCalculator();
        break;
    case 2:
        cgpaCalculator();
        break;
    case 0:
        console.clear();
        console.log("Okay! Exiting from program. Bye Bye...");
        process.exit(0);
        break;
    default:
        console.log("Invalid Option! Please Select Valid Option From the Menu.");
}
var decisionToContinue = readlineSync.question("Want to perform again? y/N:");
if (decisionToContinue == 'n' || decisionToContinue == 'N'){
    console.log("Okay! Exiting from program. Bye Bye...");
    process.exit(0);
}
}
