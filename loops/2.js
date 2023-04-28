/*
Print the Below Pattern 
H
H E 
H E L
H E L L
H E L L O
*/

var str = "HELLO";
var temp = "";
//console.log(str[0]);
//console.log(`${str[0]}${str[1]}`);
//console.log(`${str[0]}${str[1]}${str[2]}`);




for (var i = 0; i < str.length; i++) {
    console.log(`${temp}${str[i]}`);
   temp += `${str[i]} `;

}