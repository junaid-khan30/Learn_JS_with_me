var axios = require("axios");

axios.get("http://jsondaughter.typicode.com/users")
     .then((res)=> {
        console.log(res.data);
     })
     .catch((err)=>{
        console.error("Hey Dumb! type your url properly");
     })
//the api are getting from another server by axios.get
//axios is a http client, and its a promise based library which helps to make http network calls 
//axios is like curl in linux 