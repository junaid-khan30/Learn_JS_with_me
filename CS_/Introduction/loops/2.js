/*
LAB1 : Print the Below Pattern
       H
       H E
       H E L
       H E L L
       H E L L O

*/

var str = "HELLO";
for(var i=0; i<str.length; i++){
    let pattern = "";
    for(var j=0; j<=i; j++){
        pattern += str[j] + " ";
    }
    console.log(pattern);
}

//another way to do this without nested loop

var temp = "";
for(var i=0; i<str.length; i++ ){
    console.log(temp + str[i]);
    temp += str[i] + " ";
}