var readlineSync = require('readline-sync');

var fname = readlineSync.question("Wassup Buddy!!!!");
var quote = readlineSync.question("What is fav quote??");

//For integer Input
var age = readlineSync.questionInt("Enter your age : ");

//For email
var email = readlineSync.questionEMail("Enter your email to get scammed  ");

console.log(fname,quote);
console.log(`Your age is ${age}`);
console.log(`We keep spamming you at ${email}`);