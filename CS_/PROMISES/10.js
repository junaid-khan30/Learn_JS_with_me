function abc(num1,num2){
    if(num1<num2){
        console.log(`${num1} is less than ${num2}`);
    }else if(num1>num2){
        console.log(`${num1} is greater than ${num2}`);
    }else {
        console.log("Both are equal");
    }
    var counter = 0;
    for (var i = 0; i<=2**32; i++){
        counter++;
    }
    console.log(counter);
}

console.log("I am First");
abc(15,19);
console.log("I am Last");

// The abc() is a sync function 