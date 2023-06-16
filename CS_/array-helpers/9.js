/*function rightToLeft(arr) {
    console.log(arr.reverse());
}
rightToLeft([1, 3, 4, 5]); //[5, 4, 3, 1]
//leftToRight ([20, 30, 10, 50, 90]); //*/

function rightToLeft(arr) {
    var reversed = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);

    } console.log(reversed);
}
rightToLeft([1, 2, 3]);