var str = "Hyderabad";

// console.log(str[5]);
// console.log(str.at(5));

// console.log(str[-1]);
// console.log(str.at(-1));

var temp = "";
for(var i=str.length -1; i>=0; i--){
    
    console.log(`${temp}${str[i]} `);
    temp += str[i];
}

for ( var i of str){
    console.log(i);
}