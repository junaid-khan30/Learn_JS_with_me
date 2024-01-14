/*
LAB 2 : Reverse the string


*/

var str = 'HELLO'; //output : OLLEH
// var reverse = "";
// for(var i=4; i>=0; i--){
//     reverse += str[i];
// }
// console.log(reverse);


// // Iterate through the string in reverse order and build the reversed string
// for (let i = str.length - 1; i >= 0; i--) {
//   reversedStr += str[i];
// }

// // Print the reversed string
// console.log(reversedStr);


//Print Reverse Pattern of HELLO 
var pattern = "";
for (var i=4; i>=0; i--){
    console.log(`${pattern}${str[i]}`);
    pattern += `${str[i]} `;
}