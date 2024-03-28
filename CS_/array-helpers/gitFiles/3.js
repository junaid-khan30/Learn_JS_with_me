const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

const nuMbers = [1, 2, 3, 4, 5];
const doubleDNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}
console.log(doubleDNumbers); // Output: [2, 4, 6, 8, 10]
