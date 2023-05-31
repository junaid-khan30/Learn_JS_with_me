var readlineSync = require("readline-sync");
var axios = require("axios");
function main() {
    var username = readlineSync.question("Enter your Username : ");
    hitGitHubAPI(username)
        .then((res) => {
            console.log(`No of Followers for ${username} is ${res.data.followers}`);
        })
        .catch((err) => {
            console.log(err);
        })
}
main();
function hitGitHubAPI(username) {
    return axios.get(`https://api.github.com/users/${username}`);
}