//Print Reverse Pattern of HELLO 
 /*
O
O L
O L L
O L L E
O L L E H */
var pattern = "";
for (var i=4; i>=0; i--){
    console.log(`${pattern}${str[i]}`);
    pattern += `${str[i]} `;
}