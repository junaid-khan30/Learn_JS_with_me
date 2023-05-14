var readlineSync = require('readline-sync');

//for String Input:
var fname = readlineSync.question("What is your name?");
var quote = readlineSync.question("What is your fav quote?");
console.log(fname,quote);

//For int input:
var age = readlineSync.questionInt("What is your age :");
console.log(`Your are ${age} old `);
//For email input:
var email = readlineSync.questionEMail("What is your email : ");
console.log(`Hey! ${fname},We keep spamming you at ${email}`);

//npm : node package manager
//write npm run dhoni to get ls -l 
// write npm run start to get index.js