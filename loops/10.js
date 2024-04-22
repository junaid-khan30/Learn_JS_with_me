let rows = 5;
for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += i;
    }
    console.log(pattern);
}

let num = parseInt(prompt("Enter a number: "));
for (let i = 1; i <= 10; i++) {
    console.log(num + ' x ' + i + ' = ' + (num * i));
}

let num = parseInt(prompt("Enter a number: "));
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log("Factorial of", num, "is", factorial);

let num = parseInt(prompt("Enter a number: "));
let isPrime = true;

