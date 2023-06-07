//To comeout of callbackhell , promises were introduced 
var axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/posts")
     .then((res)=>{
        
        return res.data[10];
     })
     .then((data)=>{
        console.log(data);
     })
     .catch((err)=>{
        console.log(err);
     })
     //Promise Chaining
     //the return value of a .then() block is an automatic input to subsequent .then() block
     //catch should always be at last , if any one .then() block fails then it will go to catch () block without checking othe .them() block 