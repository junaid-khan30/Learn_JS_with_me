// Objects : Key - Value / Directory
// JS Data Types

var city = "Banglore";
var age = 55;

var address = {
    street : "HSR Layout",
    pincodes : 515761,
    city : "Banglore",
    marks : [10,20,30,40,50]
}

console.log(address);
console.table(address);

console.log(address.street);
console.log(address.marks);

//funtion to get average of marks
function average(marks){
    var sum = 0; 
    for (var i=0; i<marks.length; i++){
        sum += marks[i];
    }return sum/marks.length;
}

console.log(`Average of marks is ${average(address.marks)}`);