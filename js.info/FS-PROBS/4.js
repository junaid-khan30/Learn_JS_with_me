var fs = require("fs");
fs.readFile("countries.json",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        var countryCodes = [];
        var list = JSON.parse(data);
        for(var i =0; i<list.length; i++){
            if(!countryCodes.includes(list[i].country)){
                countryCodes.push(list[i].country);
            }
        }
        console.log(countryCodes);
        console.log(countryCodes.length);
        console.log(list.length);
     }
});
/*
function countryData(country, list){
    var cities = [];
    for (var i=0; i < list.length; i++){
        if(list[i].country === country){
            countries.push(list[i]);
        }
    }
    return countries;
}*/