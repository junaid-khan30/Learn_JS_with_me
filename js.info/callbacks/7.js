var axios = require("axios");
var readlineSync = require("readline-sync");

function main(){
    var num1 = readlineSync.questionInt("Enter Number 1 : ");
    var num2 = readlineSync.questionInt("Enter Number 2 : ");
    hitAPI(num1,num2)
    .then((res)=>{
        console.log(res.data);
    })
    .catch((err)=>{
        console.log("Something went wrong with server.");
    });
}
main();

function hitAPI(num1, num2){
    return axios.get(`http://36.255.86.216/${num1}/${num2}`);
}