var readlineSync = require('readline-sync');

var inputNum = readlineSync.question("Enter the value of N : "); //input N

function isArmstrong(num){
    console.log(num.split(""));
    
}

isArmstrong(inputNum);

//DRY - Do not Repeat Yourself 

//KISS - Keep it Simple ! Stupid  or Keep it Super Simple 

//var result = isArmstrong(inputNum);

//console.log(result);
//any input coming from readline- sync.question is string by default.