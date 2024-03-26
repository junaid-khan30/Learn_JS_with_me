// Map
const doubleArray = array => array.map(item => item * 2);

// Map
function doubleArrayImperative(array) {
    const doubled = [];
    for (let i = 0; i < array.length; i++) {
      doubled.push(array[i] * 2);
    }
    return doubled;
  }


// Filter
const evenNumbers = array => array.filter(item => item % 2 === 0);

// Filter
function evenNumbersImperative(array) {
    const evens = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        evens.push(array[i]);
      }
    }
    return evens;
  }

// Reduce
const sumArray = array => array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
