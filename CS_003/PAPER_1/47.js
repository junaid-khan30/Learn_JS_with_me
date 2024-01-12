function CtoF(c) {
    return ((c * 9) / 5) + 32 + " \u2109 ";
}
function FtoC(f) {
    var c = ((f - 32) * 5 / 9).toFixed(2);
    return (c + "\u2103");
}
var far = [66.2, 78, 99, 121, 55, 76.3];
for (var i = 0; i < far.length; i++) {
    console.log(FtoC(far[i]));
}
var cities = [
    { place: 'Amsterdam', temp: 66.2 },
    { place: 'Delhi', temp: 78 },
    { place: 'Mexico City', temp: 99 },
    { place: 'Cairo', temp: 121 },
    { place: 'Auckland', temp: 55 },
]
for (var i = 0; i < cities.length; i++) {
    console.log("The Temperature in " + cities[i].place + " is " + FtoC(cities[i].temp));
}
/*
The FtoC function is defined to convert Fahrenheit to Celsius, and the CtoF function is defined to convert Celsius to Fahrenheit.
The for loop iterates over the far array, applying the FtoC function to each Fahrenheit temperature and printing the result in Celsius with the ℃ symbol.
The for loop iterates over the cities array, printing the temperature in Celsius for each city using the FtoC function.
The toFixed(2) method is used to limit the number of decimal places to two in the Celsius conversion.
The Unicode characters \u2109 and \u2103 are used to represent the Fahrenheit and Celsius symbols, respectively.
*/