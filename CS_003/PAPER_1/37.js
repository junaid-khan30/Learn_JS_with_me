var even = [];
var odd = [];
var arr = [9, 5, 6, 6, 9, 3, 0, 5, 2, 9, 1];
for (var i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
        even.push(arr[i]);
    }
    else {
        odd.push(arr[i]);
    }
}
arr = [];
console.log('arr:', arr)
console.log('even:', even)
console.log('odd:', odd)

/*
var even = []; var odd = [];: These lines initialize two empty arrays, even and odd, which will be used to store even and odd elements from the original array.

var arr = [9, 5, 6, 6, 9, 3, 0, 5, 2, 9, 1];: This initializes an array arr with eleven numeric elements.

The loop iterates through each element of the array. If the index i is even, the element is pushed into the even array; otherwise, it is pushed into the odd array.

arr = [];: This reassigns an empty array to arr, essentially clearing the original array.

console.log('arr:', arr) console.log('even:', even) console.log('odd:', odd): It prints the content of three arrays - the cleared arr, even, and odd.

Now, let's break down the reasoning:

The loop separates the elements of the original array into two arrays, even and odd, based on their indices.
After the loop, the original array arr is cleared.
The console.log statements print the cleared arr, along with the arrays even and odd.
*/