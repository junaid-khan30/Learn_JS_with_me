//Print Reverse Pattern of HELLO 
 /*
O
O L
O L L
O L L E
O L L E H */
var str = "HELLO"
var pattern = "";
for (var i=str.length - 1; i>=0; i--){
    console.log(`${pattern}${str[i]}`);
    pattern += `${str[i]} `;
}

// Question 1: Calculate the sum of numbers from 1 to 10 using a for loop.
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
  
console.log("Sum:", sum);


// Question 2: Print all even numbers between 20 and 30 using a for loop.
for (let i = 20; i <= 30; i++) {
    if (i % 2 === 0) {
       
  
