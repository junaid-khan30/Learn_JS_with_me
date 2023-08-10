//Objects : KEY - VALUE / DICTIONARY
//JS DATA TYPES

var city = "Hyderabad";
var age = 44;

var address = {
    street : "HSR Layout",
    pincode : "50001",
    city : "Hyderabad",
    marks : [10, 12, 15, 18]
}

console.log(address);
console.table(address);

console.log(address.street);
console.log(address.marks);

//Write a function to return average of marks array

function avgMarks(array){
    result = 0;
    for(var i=0; i<array.length; i++){
        result += array[i];
    }return result/array.length;
}
console.log(avgMarks(address.marks));