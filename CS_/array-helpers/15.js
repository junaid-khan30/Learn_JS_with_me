function printFreq(arr, num) {
    var counter = arr.reduce((acc, current) => (current === num ? acc + 1 : acc), 0);
    console.log("Frequency of", num, "in the array:", counter);
  }
  printFreq([1, 21, 23, 65, 21, 98, 21], 21);
