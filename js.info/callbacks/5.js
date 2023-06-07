var axios = require("axios");
var fs = require("fs/promises");

axios.get("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
    var users = res.data;
    return fs.writeFile("users.json",JSON.stringify(users))
})
.then((data)=>{
    console.log("user.json file has been created");
})
.catch((err)=>{
    console.error("Something went wrong ,Please check your code snippet");
})