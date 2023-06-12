var axios = require("axios");
var readlineSync = require("readline-sync");

async function main(){
    try {
        var username = readlineSync.question("Enter your github username : ");
        var res = await axios.get(`http://api.github.com/users/${username}`);
        var profile_pic_url = res.data.avatar_url;
        var res2 = await axios.get(profile_pic_url);
        console.log(res2.data);
    }catch (error){
        console.log("Invalid Github Username/Server issue");
    }
}
main();