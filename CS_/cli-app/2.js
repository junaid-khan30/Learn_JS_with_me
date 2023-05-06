var readlineSync = require('readline-sync');

var inputNum = readlineSync.question("Enter the value of N : "); //input N

//Solution -1 : Strings Method
function isArmstrong(num){
    var digits = num.split('');
    var sum = 0;
    for(var i=0; i<digits.length; i++){
        sum += digits[i] ** digits.length;
    }
    if(sum == num)return true;
    else return false;
    }

    var result = isArmstrong(inputNum);

    console.log(result);
//math.floor converts the float value to round off of it 
//math.ceil converts the number to next apprx forward value