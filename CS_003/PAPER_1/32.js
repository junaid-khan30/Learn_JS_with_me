var arr = [9, 8, -7, 6, 0, 55, -77, -1];
arr.push(10);
console.log(arr);
arr.unshift(99);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);

/*
arr.push(10): This adds the value 10 to the end of the array arr using the push method. The array now becomes [9, 8, -7, 6, 0, 55, -77, -1, 10].

arr.unshift(99): This adds the value 99 to the beginning of the array arr using the unshift method. The array now becomes [99, 9, 8, -7, 6, 0, 55, -77, -1, 10].

arr.pop(): This removes the last element from the array arr using the pop method. The array now becomes [99, 9, 8, -7, 6, 0, 55, -77, -1].

arr.shift(): This removes the first element from the array arr using the shift method. The array now becomes [9, 8, -7, 6, 0, 55, -77, -1].
*/