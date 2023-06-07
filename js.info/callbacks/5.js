var axios = require("axios");
var fs = require("fs/promises");

axios.get("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
    var users = res.data;
    return fs.writeFile("user.json",JSON.stringify(users))
})
.then(()=>{
    console.log("Users.json file has been created");
})
.catch((err)=>{
    console.error("Something went wrong");
})