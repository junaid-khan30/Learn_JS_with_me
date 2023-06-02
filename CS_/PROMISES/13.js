var obj = new Promise((resolve, reject)=> {
    if (25<=19) {
        
    }
})
getWeather(cityName)
    .then((res) => {
        var temp = ((res.data.main.temp) - 273.15).toFixed(2);
        setTimeout(()=> {
            load.succeed(`${cityName} Weather is Fetched`);
            console.log((clc.red(`${cityName} Current Weatehr is : ${temp} \u00B0C`)));
            load.stop();
        },4500);
    })
    .catch((err) => {
        console.log(err);
    })