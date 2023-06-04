var fs = require("fs/promises");

//Promise will go to 'then' block if it is a success
//Promise will go to 'catch' block if it is a failure

console.log("Hi I am First");

fs.readFile("todos.json")
.then((data)=>{
    var todos = JSON.parse(data);
    console.log(todos[0]);
}).catch((err)=>{
    console.log(err);
})

console.log("Hi I am Last");

//line no 6 & 7 is to show that , fs is async 