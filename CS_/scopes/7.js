let arr = [1, 44, 55, 66];
//arr = [];
arr.length = 0;
arr.push(100);
console.log(typeof arr);//in JS, arrays are objects 
console.log(arr);
//NOTE : arr.length =0; will delete all the elements 
