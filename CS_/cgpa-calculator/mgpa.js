var readlineSync = require('readline-sync');

function mgpaCalculator() {
    var studentName = readlineSync.question("Enter Student Name : ");
    var matNo = readlineSync.questionInt("Enter MAT Number : ");

    var courseCount = readlineSync.questionInt(`Enter Number of Courses in MAT-${matNo} : `);

    var courseCodes = [];
    var courseNames = [];
    var courseCredits = [];
    var gradePoints = [];

    var report = [];
    var creditsSum = 0;
    var cpSum = 0;

    for (var i = 0; i < courseCount; i++) {
        var obj = {};
        courseCodes[i] = readlineSync.question(`Enter Course Code${i + 1} : `);
        obj["COURSE CODE"] = courseCodes[i];

        courseNames[i] = readlineSync.question(`Enter Course Name for ${courseCodes[i]} : `);
        obj["COURSE NAME"] = courseNames[i];

        courseCredits[i] = readlineSync.questionInt(`Enter Course Credits for ${courseNames[i]} : `);
        obj["CREDITS"] = courseCredits[i];

        gradePoints[i] = readlineSync.questionInt(`Enter Obtained Grade Points for ${courseNames[i]} : `);
        obj["GRADE POINTS (GP)"] = gradePoints[i];

        obj["CREDIT POINTS (CP)"] = gradePoints[i] * courseCredits[i];
        creditsSum += courseCredits[i];
        cpSum += obj["CREDIT POINTS (CP)"];
        report.push(obj);
    }
    console.log(`\n\nMAT ${matNo} (M${matNo}) - MGPA REPORT`);
    console.log(studentName);


    console.table(report);
    var total = (cpSum / creditsSum).toFixed(2);
    var mgpa = `${cpSum} / ${creditsSum} = ${total}`;
    console.log(mgpa);

}

module.exports = mgpaCalculator;