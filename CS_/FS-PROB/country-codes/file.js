var fs = require("fs");
fs.readFile("cities.json", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        var CountryCodes = [];
        var list = JSON.parse(data);
        for (var i = 0; i < list.length; i++) {
            if(!CountryCodes.includes(list[i].country)){
                CountryCodes.push(list[i].country);
            }
        }
        console.log(CountryCodes); 
        console.log(CountryCodes.length);
    }
});