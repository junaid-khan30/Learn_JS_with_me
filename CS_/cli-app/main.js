function getAvg(marks) {
    var sum = 0;
    for (var i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}

function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}


//variable functions 
var abc = function () {
    return "This is just abc function";
}

var xyz = function (str) {
    return str.toUpperCase();
}

var northstar = "northstar";


module.exports = {
average: getAvg,
factorial: factorial,
abc: abc,
xyz: xyz,
northstar : northstar
};