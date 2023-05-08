//To understand 1.js of objects dir 
var data = [1, 55, 66, 77, 88, 99, 102, 198];

function extractEven(data){
    var evenArray = [];
    for (var i=0; i<data.length; i++){
        if (data[i] % 2 == 0){
            evenArray.push(data[i]);
        }
    }
    return evenArray;
}
console.log(extractEven(data));