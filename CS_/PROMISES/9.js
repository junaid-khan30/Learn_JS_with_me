/* 

How to Create a Custom Promise ?
The States of a Promise : 
    State 1 : Pending State
    State 2 : Resolved/Fullfilled State
    State 3 : Rejected/Failed State

*/

function abc(num1,num2){
    if(num1<num2){
        console.log(`${num1} is less than ${num2}`);
    }else if(num1>num2){
        console.log(`${num1} is greater than ${num2}`);
    }else {
        console.log("Both are equal");
    }
}

abc(15,19);