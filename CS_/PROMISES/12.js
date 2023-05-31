function abc(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 < num2) {
            resolve(`${num1} is less than  ${num2}`);
        } else if (num1 > num2) {
            resolve(`${num2} is less than  ${num1}`);
        } else {
            reject("Both are equal");
        }
    })
}
console.log("First");
abc(4,4)
    .then((msg)=>{
        console.log(msg);
    })
    .catch((err)=>{
        console.log(err);
    });
console.log("Last");