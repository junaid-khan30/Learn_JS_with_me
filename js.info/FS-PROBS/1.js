//API : Application Programming Intefrace


var fs = require("fs");

console.log("I am getting started with prayers");

fs.readFile("data.txt",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})

console.log("Get out of Deppression , and pray and workhard at same time ");
//fs functions are async, you can see that with this eg
