var arr = [9, 8, -7, 6, 0, 55, -77, -1];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        console.log(arr[i]);
    }
}
var index = 0;
while (index < arr.length) {
    if (arr[index] > 0) {
        console.log(arr[index]);
    }
    ++index;
}

/*
The for loop iterates through each element of the array arr and prints values that are less than 0. It prints -7, -77, and -1 since these are the negative values in the array.

The while loop then iterates through the array and prints values that are greater than 0. It prints 9, 8, 6, 55 since these are the positive values in the array.

The output reflects the negative values printed during the first loop and the positive values printed during the second loop. 
The loops demonstrate how to iterate through an array using both a for loop and a while loop, 
applying conditional statements to filter and print specific values based on their sign.

*/