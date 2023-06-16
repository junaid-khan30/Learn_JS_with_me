function printFreq(arr, num) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            ++counter;
        }
    }
     console.log(counter);
}
printFreq([1, 21, 23, 65, 21, 98, 21], 21);
