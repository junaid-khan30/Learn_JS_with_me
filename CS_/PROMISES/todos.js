//Extract the first 10 objects from the todos.json array 
//and insert into new file called ten.json

var axios = require("axios");
var fs = require("fs/promises");

axios.get("https://jsonplaceholder.typicode.com/todos")
     .then((res)=> {
      var todos = res.data.slice(0,10);
      
      fs.writeFile("ten.json",JSON.stringify(todos))
      .then(()=>{
        
        console.log("File ten.json is created");
      })
        
     })
     .catch((err)=>{
        console.error("Hey Dumb! type your url properly");
     })