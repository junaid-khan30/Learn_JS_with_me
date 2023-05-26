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

//Promise Chaining
//the return value of a .thenn() block is an automatic input to 
//subsequent .then() block