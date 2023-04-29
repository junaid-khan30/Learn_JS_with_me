var str = "Hyderabad";
var temp = '';
//console.log(str.length);

for(var i=0; i<str.length; i++){
    console.log(temp + str[i]);
    temp += str[i];
}