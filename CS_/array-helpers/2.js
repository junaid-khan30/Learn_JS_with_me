//Array Helper Methods
//forEach()

var arr = [100, 99, 10, 1000, 88, 99, 99];
var result = [];
for(var i=0; i<arr.length; i++){
    result = (arr[i] * 2);
    console.log(result);
}
console.log("------------------------------");
var resultValue = arr.map(ele => ele * 2);
console.log(resultValue);
console.log("------------------------------");
arr.forEach(function (ele, index){
    console.log(`${ele} is located at ${index} index in arr Array`);
});