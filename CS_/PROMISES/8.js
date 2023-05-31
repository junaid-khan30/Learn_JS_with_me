/*

Write a Program to find the count of followers for the below array of 
github users

var githubUsers = ['ip11', 'daryllmamaril', 'paramsingh1', 'darlenemae', 'ry','HanzalaKhamkar','Tabassuminggg'];


Step 2 : 
Push the output res.data objects into `userData`  array

Step 3 : 
Print all the objects in userData Array

*/

var axios = require("axios");
var githubUsers = ['ip11', 'daryllmamaril', 'paramsingh1', 'darlenemae', 'ry', 'HanzalaKhamkar', 'Tabassuminggg'];
var apiCalls = [];
var userData = [];

for (var i = 0; i < githubUsers.length; i++){
    apiCalls.push(hitGitHubAPI(githubUsers[i]));
}

Promise.all(apiCalls)
    .then((responses) => {
        for (var i =0; i < responses.length; i++){
            userData.push({
                username: responses[i].data.login,
                followers: responses[i].data.followers
            });
        }
        console.table(userData);
    })
    .catch( (err)=> {
        console.log(err);
    })

    function hitGitHubAPI(username) {
        return axios.get(`https://api.github.com/users/${username}`, {
            auth: {
                username: `sania-codes`,
                password: `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`
            }
        });
    }