for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}  

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => {
    console.log(number);
});

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue; // Skips iteration when i is 3
    }
    if (i === 8) {
        break; // Stops the loop when i is 8
    }
   
}
