var nums = [4, 7, 99, 100, 121, 14, 78, 13];
var odd = [];
for (var i = 0; i < nums.length; ++i) {
    if (nums[i] % 2 === 1) {
        odd.push(nums[i]);
        nums.splice(i, 1);
        --i;
    }
}
console.log(odd);
console.log(nums);

/*
var nums = [4, 7, 99, 100, 121, 14, 78, 13];: This initializes an array nums with eight numeric elements.

var odd = [];: This initializes an empty array odd where odd numbers will be collected.

for (var i = 0; i < nums.length; ++i) {: This initiates a for loop to iterate through each element of the array.

if (nums[i] % 2 === 1) {: This checks if the current element is an odd number.

odd.push(nums[i]); nums.splice(i, 1); --i;: If the condition is met, the odd number is pushed to the odd array, and the element is removed from the original nums array using splice. The --i is used to adjust the loop counter after the removal.

console.log(odd);: Finally, it prints the array containing odd numbers.

console.log(nums);: It prints the modified nums array after removing odd numbers.

Now, let's break down the reasoning:

The loop checks each element in the nums array for odd numbers.
If an odd number is found, it is pushed to the odd array, and the odd number is removed from the original nums array.
The loop counter is adjusted (--i) to account for the removed element.
The output will display the odd array containing odd numbers and the modified nums array without the odd numbers.
*/