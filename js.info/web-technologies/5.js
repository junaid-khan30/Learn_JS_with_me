/*Analyze the following code block and write the output along with 4-5 lines of reasoning.*/
let fruit = 'apple';
let bag = {
    [fruit + 'Computers']: 5
};
console.log(bag["appleComputers"]);
/*The code block initializes a variable fruit with the value 'apple'.
The bag object is declared with a computed property name [fruit + 'Computers']. The expression fruit + 'Computers' evaluates to 'appleComputers'.
The computed property name 'appleComputers' is used to define a property in the bag object with the value 5.
console.log(bag["appleComputers"]) accesses the value of the appleComputers property using bracket notation and outputs its value, which is 5. */