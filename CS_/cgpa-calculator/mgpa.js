var readlineSync = require('readline-sync');

function mgpaCalculator() {
    var studentName = readlineSync.question("Enter Student Name : ");
    var matNo = readlineSync.questionInt("Enter MAT Number : ");
    var courseCount = readlineSync.questionInt(`Enter Number of Courses in MAT-${matNo} : `);
    var courseCodes = [];
    var courseName = [];
    var courseCredits = [];
    var gradePoints = [];

    for (var i = 0; i < courseCount; i++) {
        courseCodes[i] = readlineSync.question(`Enter Course Code ${i + 1}:`);
        courseName[i] = readlineSync.question(`Enter Course Name for ${courseCodes[i]}`);
        courseCredits[i] = readlineSync.question(`Enter Course Credits for ${courseName[i]}`);
        gradePoints[i] = readlineSync.question(`Enter Obtained Grade Points for ${courseName[i]} :`);
    }

}

module.exports = mgpaCalculator;