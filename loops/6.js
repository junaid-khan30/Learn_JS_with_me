var str = "Hyderabad";

console.log(str[5]);
console.log(str.at(5));

console.log(str.at());
var temp = "";
for(var i=-1; i>=str.length * -1; i--){
    temp += str.at(i);
}

console.log(temp);