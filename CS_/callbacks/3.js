var axios = require("axios");
var fs = require("fs/promises");

axios.get("http://jsonplaceholder.typicode.com/users")
     .then((res)=> {
      var users = res.data;
      fs.writeFile("users.json",JSON.stringify(users))
      .then(()=>{
        console.log("File users.json is created");
      })
        
     })
     .catch((err)=>{
        console.error("Hey Dumb! type your url properly");
     })
//the api are getting from another server by axios.get
//axios is a http client, and its a promise based library which helps to make http network calls 
//axios is like curl in linux 