const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

const nuMbers = [1, 2, 3, 4, 5];
const doubleDNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}
console.log(doubleDNumbers); // Output: [2, 4, 6, 8, 10]


const numBers = [1, 2, 3, 4, 5];
const eveNNumbers = numbers.filter(num => num % 2 === 0);
console.log(eveNNumbers); // Output: [2, 4]



const numbErs = [1, 2, 3, 4, 5];
const evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  console.log(evenNumbers); // Output: [2, 4]

  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log(sum); // Output: 15
  