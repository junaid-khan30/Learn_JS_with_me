// map()
// Declarative:
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
//Imperative
const numBers = [1, 2, 3, 4, 5];
const doubleDNumbers = [];
for (let i = 0; i < numBers.length; i++) {
  doubleDNumbers.push(numBers[i] * 2);
}
console.log(doubleDNumbers); // [2, 4, 6, 8, 10]


// filter()
// Declarative:
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
// Imperative:


const numbers = [1, 2, 3, 4, 5];
const evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}
console.log(evenNumbers); // [2, 4]


// reduce()
// Declarative:


const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15
// Imperative:


const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum); // 15