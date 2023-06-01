var readlineSync = require("readline-sync");
var axios = require("axios");
var clc = require("cli-color");

var cityName = readlineSync.question(clc.yellow("Enter your City Name : "));
var api_key = "b3031bf47673eb8a19ee7c39450b3306";
function getWeather(cityName) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`);
}

getWeather(cityName)
    .then((res) => {
        var temp = ((res.data.main.temp) - 273.15).toFixed(2);
        console.log((clc.red(`${cityName} Current Weatehr is : ${temp} \u00B0C`)));
    })
    .catch((err) => {
        console.log(err);
    })