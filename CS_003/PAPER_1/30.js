var arr = [9, "abc", null, 3.14, undefined];
console.log(arr.length);
console.log(arr[3]);
arr.push("prash");
arr[arr.length] = "ths";
console.log(arr);
var arr2 = new Array(10);
console.log(arr2.length);
console.log(arr2);

/*
console.log(arr.length): This prints the length of the array arr, which is 5 since there are five elements in the array.

console.log(arr[3]): This prints the value at index 3 in the array arr, which is 3.14.

arr.push("prash"): This adds the string value "prash" to the end of the array arr.

arr[arr.length] = "ths": This adds the string value "ths" to the end of the array arr using the length property.

console.log(arr): This prints the modified array arr with the additional elements.

var arr2 = new Array(10): This creates a new array arr2 with a length of 10, but it's initially empty.

console.log(arr2.length): This prints the length of the array arr2, which is 10 as specified during its creation.

console.log(arr2): This prints the contents of the array arr2, which will show undefined for each element since they are initially empty.
*/
