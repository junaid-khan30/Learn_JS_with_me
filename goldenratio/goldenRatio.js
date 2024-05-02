function goldenRatio(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        let a = 0;
        let b = 1;
        for (let i = 2; i <= n; i++) {
            const temp = a + b;
            a = b;
            b = temp;
        }
        return b / a; // Golden ratio approximation
    }
}

// Example usage:
const n = 10; // Calculate the golden ratio approximation for the nth Fibonacci number
const ratio = goldenRatio(n);
console.log(`The golden ratio approximation for the ${n}th Fibonacci number is: ${ratio}`);









function fibonacci(n) {
    var sequence = [0, 1];
    for (var i = 2; i <= n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

function goldenRatio(n) {
    var fibSequence = fibonacci(n);
    var last = fibSequence[fibSequence.length - 1];
    var secondToLast = fibSequence[fibSequence.length - 2];
    return last / secondToLast;
}
// Example usage:
var n = 10; // Adjust the value of n as needed
var ratio = goldenRatio(n);


