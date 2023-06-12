var axios = require("axios");
var readlineSync = require("readline-sync");

async function main(){
    try {
        var username = readlineSync.question("Enter your github username : ");
        var res = await axios.get(`http://api.github.com/users/${username}`);
        console.log("res.data");
    }catch (error){
        console.log("Invalid Github Username/Server issue");
    }
}
main();