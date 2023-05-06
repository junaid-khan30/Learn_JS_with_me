//Another method with out using strings
var readlineSync = require("readline-sync");

var inputNum = readlineSync.questionInt("Enter the value of N: "); //input N

function countDigits(num) {
    var count = 0;
    while (num != 0) {
        count++;
        //console.log(num % 10);
        num = Math.floor(num / 10);
    }
    return count;
}

function isArmstrong(num) {
    var temp = num;
    var digitsCount = countDigits(num);
    var sum = 0;
    while (num != 0) {
        sum += (num % 10) ** digitsCount;
        num = Math.floor(num / 10);
    }
    if (sum == temp) return true;
    else return false;
}

var result = isArmstrong(inputNum);
console.log(result);