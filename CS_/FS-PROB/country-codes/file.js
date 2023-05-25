var fs = require('fs');
fs.readFile('cities.json', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        var countryCodes = [];
        var list = JSON.parse(data);
        for (var i = 0; i < list.length; i++) {
            if (!countryCodes.includes(list[i].country)) {
                countryCodes.push(list[i].country);
            }
        }
        for (var i = 0; i < countryCodes.length; i++) {
            var cities = countryData(countryCodes[i], list);
            fs.writeFile(`${countryCodes[i]}.json`, JSON.stringify(cities), (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`file has been created.`);
                }
            })
        }

    }
});


function countryData(country, list) {
    var cities = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i].country === country) {
            cities.push(list[i]);
        }
    }
    return cities;
}