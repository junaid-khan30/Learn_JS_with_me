var arr = [9, 8, -7, 6, 0, 55, -77, -1];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
        arr.splice(i, 1);
        --i;
    }
}
console.log(arr);

/*
var arr = [9, 8, -7, 6, 0, 55, -77, -1];: This initializes an array arr with eight numeric elements, including both positive and negative integers.

for (var i = 0; i < arr.length; i++) {: This initiates a for loop to iterate through each element of the array.

if (arr[i] >= 0) {: This checks if the current element is greater than or equal to 0 (non-negative).

arr.splice(i, 1); --i;: If the condition is met, it removes the element at index i using splice and then decrements i. This is done to handle the array modification during iteration properly.

console.log(arr);: Finally, it prints the modified array after removing non-negative elements.

Now, let's break down the array modification:

arr.splice(i, 1);: This removes the current element from the array.
--i;: This ensures that the loop counter i is decremented, compensating for the removed element.
*/