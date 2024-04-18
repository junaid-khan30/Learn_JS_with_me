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

