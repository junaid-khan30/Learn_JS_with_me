var fs = require("fs/promises");

fs.readFile("todos.json")
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.error(err);
})

