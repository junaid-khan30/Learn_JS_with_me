/*
Write a JavaScript program to check whether the given number is an Armstrong number or not.

Input : 
The first line should be the integer N.
Output : 
The output should be a Boolean. 
*/

const readline = require('readline');

// Function to calculate the power of a number
function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

// Function to check if a number is an Armstrong number
function isArmstrongNumber(number) {
    const numDigits = String(number).length;
    let temp = number;
    let sum = 0;

    while (temp > 0) {
        const digit = temp % 10;
        sum += power(digit, numDigits);
        temp = Math.floor(temp / 10);
    }

    return sum === number;
}

// Creating an interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Reading input from the user
rl.question('Enter the number: ', (answer) => {
    const N = parseInt(answer);

    // Checking if the number is an Armstrong number
    const result = isArmstrongNumber(N);

    // Displaying the result
    console.log(result);

    // Close the interface
    rl.close();
});

