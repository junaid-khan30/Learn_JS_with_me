var fs = require("fs/promises");
var axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/users")
     .then((res)=>{
        var users = res.data;
        fs.writeFile("new.json",JSON.stringify(users))
        .then(()=>{
            console.log("File has been created!!");
        })
        .catch((err)=>{
            console.log(err);
        })

     })
     .catch((err)=>{
        console.error("Network Issue!Connection error");
     })