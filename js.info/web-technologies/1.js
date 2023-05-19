/*Analyze the following code block and write the output along with 4-5 lines of reasoning.*/
var human = {
    fname: "Prash",
    lname: "BM",
    age: 55,
    address: "Bangalore",
    alive: true,
}
var address = "fname";
console.log(human);
console.log(human.address);
console.log(human.age);
console.log(human.alive);
console.log(human["address"]);
console.log(human[address]);

/*The code block declares an object named human with properties such as fname, lname, age, address, and alive.
console.log(human) prints the entire human object, displaying all the properties and their corresponding values.
console.log(human.address) accesses the address property directly from the human object and outputs its value, which is "Bangalore".
console.log(human.age) accesses the age property directly from the human object and outputs its value, which is 55.
console.log(human.alive) accesses the alive property directly from the human object and outputs its value, which is true.
console.log(human["address"]) uses bracket notation to access the address property of the human object and outputs its value, which is "Bangalore".
console.log(human[address]) uses the value of the variable address, which is "fname", as a key to access the corresponding property in the human object. It outputs the value of the fname property, which is "Prash". */