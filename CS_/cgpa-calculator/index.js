var readlineSync = require('readline-sync');
var mgpaCalculator = require("./mgpa.js");
var cgpaCalculator = require("./cgpa.js");

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
        console.log("Okay! Exiting from program. Bye Bye...");
        break;
    default:
        console.log("Invalid Option! Please Select Valid Option From the Menu.");
}
