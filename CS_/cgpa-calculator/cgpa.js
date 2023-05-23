var readlineSync = require('readline-sync');

function cgpaCalculator() {
    var studentName = readlineSync.question("Enter Student Name : ");
    var matCount = readlineSync.questionInt("Enter Number Of MATs : ");

    var creditsSum = 0;
    var mgpaSum = 0;
    var result = [];
    for (var i = 0; i < matCount; i++) {
        var obj = {};
        obj["MAT"] = readlineSync.question(`Enter MAT - ${i + 1} name : `);
        obj["CREDITS"] = readlineSync.questionInt(`Enter ${obj["MAT"]} Credits  : `);
        obj["MGPA"] = readlineSync.questionFloat(`Enter ${obj["MAT"]} MGPA  : `);
        obj["CREDITS X MGPA"] = obj["MGPA"] * obj["CREDITS"];
        mgpaSum += obj["CREDITS X MGPA"];
        creditsSum += obj["CREDITS"];
        result.push(obj);
    }
    console.log(`\n\nCGPA REPORT`);
    console.log(studentName);
    console.table(result);
    var total = (mgpaSum / creditsSum).toFixed(2);
    console.log(`CGPA : ${mgpaSum} / ${creditsSum} = ${total}  (UNTIL MAT-${matCount})`);

}

module.exports = cgpaCalculator;