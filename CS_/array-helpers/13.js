function printArraySum(arr) {
    var sum = arr.reduce((acc, current) => acc + current, 0);
    console.log("Sum of the array elements:", sum);
  }
  printArraySum([1, 2, 3, 4, 5])