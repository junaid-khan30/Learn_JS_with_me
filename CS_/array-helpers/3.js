var arr = [100, 99, 10, 1000, 88, 99, 99];
var result = [];
//Method 1 : Imperative
// for (var i = 0; i < arr.length; i++) {
//     result.push(arr[i] * 2);
// }

//Method 2  : forEach
arr.forEach(ele => result.push(ele * 2));

console.log(result);