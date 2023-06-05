//METHOD 2 : Promises chaining
var fs = require("fs/promises");

fs.readFile("todos.json")
.then((data)=>{
    var todos = JSON.parse(data);
    var ten = todos.slice(0,10);
    return fs.writeFile("ten.json",JSON.stringify(ten));
})
.then(()=>{
    console.log("Todos are extracted");
})
.catch((err)=>{
    console.error((err));
});
