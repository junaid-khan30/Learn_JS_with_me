// using data of data.js file here 
var data = require("./data.js");

function extractCountry(data, countryName){
    var countries = [];
    for ( var i =0; i < data.length; i++){
        if (data[i].country.includes(countryName)){
            countries.push(data[i]);
        }
    }
    return countries;
}
var result = extractCountry(data, "Russia");
console.log(result);
console.log(result.length);

function countriesList(data){
    var countries = [];
    for ( var i =0; i < data.length; i++){
        if (!countries.includes(data[i].country)){
            countries.push(data[i].country);
        }
    }
    return countries;
}
var countries = countriesList(data);

function newData(countries) {
    var finalData = {};
    for ( var i = 0; i < countries.length; i++) {
        finalData[countries[i]] = extractCountry(data, countries[i]);
    }
    return finalData;
}
var result = newData(countries);

console.log(result);