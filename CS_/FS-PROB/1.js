// API - Application Programming Interface

var fs = require("fs");
console.log(fs);
console.log("I am getting started with Adv. JS");


fs.readFile("text.txt", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});


console.log("I am dying at the end of this class");


// What is CB in the above code snippet?
// Note : The CB is asynchronous
// Call backs are asynchronous 