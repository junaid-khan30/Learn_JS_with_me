//To comeout of callbackhell , promises were introduced 
var axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/posts")
     .then((res)=>{
        console.log(res.data[0]);
        return "something";
     })
     .then((data)=>{
        console.log(data);
     })
     .catch((err)=>{
        console.log(err);
     })