var myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
};
console.log(myCar);
//Dot notation 
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.year);

//Bracket notation 
myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;

console.log(myCar["make"]);
console.log(myCar["model"]);
console.log(myCar["year"]);

