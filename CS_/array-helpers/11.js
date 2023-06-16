function reverseArray(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    }
    console.log(arr);
}

reverseArray([1, 3, 4, 5]); // Output: [5, 4, 3, 1]