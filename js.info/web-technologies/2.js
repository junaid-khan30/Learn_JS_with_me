/*Analyze the following code block and write the output along with 4-5 lines of reasoning.*/
var human = {
    fname: "Prash",
    lname: "BM",
    age: 55,
    address: "Bangalore",
    alive: true,
    "yo yo": "yes yes",
    1: 22,
    33: 44
}
var alive = "age";
console.log(human.alive);
console.log(human["alive"]);
console.log(human[alive]);
console.log(human["yo yo"]);
console.log(human[33])
/* The code block declares an object named human with various properties including fname, lname, age, address, alive, "yo yo", 1, and 33.
console.log(human.alive) accesses the alive property directly from the human object and outputs its value, which is true.
console.log(human["alive"]) uses bracket notation to access the alive property of the human object and outputs its value, which is also true.
console.log(human[alive]) uses the value of the alive variable, which is "age", as a key to access the corresponding property in the human object. It outputs the value of the age property, which is 55.
console.log(human["yo yo"]) uses bracket notation to access the "yo yo" property of the human object and outputs its value, which is "yes yes".
console.log(human[33]) uses bracket notation to access the 33 property of the human object and outputs its value, which is 44.*/