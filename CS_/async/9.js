//Normal Function
// function xyz(hours) {
//     console.log(`Hello There!, I slept for ${hours} hours`);
// }

//Variable Function - Method 2
var xyz = function (hours) {
    console.log(`Hello There!, I slept for ${hours} hours`);
}


//Fat Arrow Functions

var xyz = (hours) => {
    console.log(`Hello There!, I slept for ${hours} hours`);
}

xyz(15);