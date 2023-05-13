var readlineSync = require('readline-sync');

//for String Input:
var fname = readlineSync.question("What is your name?");
var quote = readlineSync.question("What is your fav quote?");
console.log(fname,quote);

//For int input:
var age = readlineSync.questionInt("What is your age :");
console.log(`Your are ${age} old `);

//npm : node package manager
//write npm run dhoni to get ls -l 
// write npm run start to get index.js