function printFreq(arr, num){
    var counter = arr.reduce((acc, current)=>(current === num) ? ++acc : acc,0 );
    console.log(counter);
}
printFreq([1, 21, 23, 65, 21, 98, 21], 21);