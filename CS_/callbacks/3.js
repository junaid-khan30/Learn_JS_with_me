var axios = require("axios");

axios.get("http://jsonplaceholder.typicode.com/users")
     .then((res)=> {
        console.log(res.data);
     })
     .catch((err)=>{
        console.error(err);
     })
//the api are getting from another server by axios.get