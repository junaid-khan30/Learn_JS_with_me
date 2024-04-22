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
if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(num + " is a prime number");
} else {
    console.log(num + " is not a prime number");
}


let terms = parseInt(prompt("Enter the number of terms: "));
let a = 0, b = 1;
console.log("Fibonacci series:");
for (let i = 0; i < terms; i++) {
    
}
