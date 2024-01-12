var person = {
    fname: 'prash',
    age: 77,
    address: 'Dubai',
    qualification: 'student'
}
console.log(person);
console.log(person.fname);
console.log(person.address);
console.log(person['age']);
for (var key in person) {
    console.log(key, person[key]);
}
console.table(person);

/*
The first console.log(person); prints the entire person object, showing all its properties and values.

The second console.log(person.fname); prints the value of the 'fname' property of the person object, which is 'prash'.

The third console.log(person.address); prints the value of the 'address' property of the person object, which is 'Dubai'.

The fourth console.log(person['age']); prints the value of the 'age' property of the person object using square bracket notation, which is 77.

The for...in loop iterates over all the properties of the person object, printing each key-value pair.

The console.table(person); prints a tabular representation of the person object, making it easier to visualize the key-value pairs.
*/