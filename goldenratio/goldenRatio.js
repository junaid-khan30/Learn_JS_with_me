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
        
