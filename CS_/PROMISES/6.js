/*

Step 1 : Generate Random number between 1-100 into num1 variable
Step 2 : Generate Random number between 1-100 into num2 variable

Step 3 : Fire the below API using axios 

http://36.255.86.216/${num1}/${num2}

Step 4 : If the sum in the res.data is Prime, Do not fire back the API. Stop The Program

Step 5 : Continue Firing the API, if the res.data is not Prime


*/
var axios = require("axios");

function main() {
    var num1 = Math.floor(Math.random() * 100) + 1;
    var num2 = Math.floor(Math.random() * 100) + 1;
    hitAPI(num1, num2)
        .then((res) => {
            if (!isPrime(res.data.sum)) {
                console.log(`${res.data.sum} aint a Prime, Firing Again!!!!!!`);
                main();
            } else {
                console.log(`Firing is stopped. ${res.data.sum} is Prime !!!!!!!`);
                console.timeEnd("Prash");
            }
        })
        .catch((err) => {
            console.log(err);
        })
}
console.time("Prash");
main();
function hitAPI(num1, num2) {
    return axios.get(`http://36.255.86.216/${num1}/${num2}`);
}
function isPrime(num) {
    if (num <= 1) {
        return 0;
    }
    for (var i = 2; i * i <= num; i++) {
        if (num % i == 0) {
            return 0;
        }
    }
    return 1;
}