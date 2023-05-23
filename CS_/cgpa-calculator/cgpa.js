var readlineSync = require('readline-sync');

var leaderBoard = [];

function cgpaCalculator() {
    var studentName = readlineSync.question("Enter Student Name : ");
    var matCount = readlineSync.questionInt("Enter Number Of MATs : ");
    var cgpaFound = false;
    var creditsSum = 0;
    var mgpaSum = 0;
    var result = [];
    for (var i = 0; i < matCount; i++) {
        var obj = {};
        obj["MAT"] = readlineSync.question(`Enter MAT - ${i + 1} name : `);
        obj["CREDITS"] = readlineSync.questionInt(`Enter ${obj["MAT"]} Credits  : `);
        obj["MGPA"] = readlineSync.questionFloat(`Enter ${obj["MAT"]} MGPA  : `);
        obj["CREDITS X MGPA"] = (obj["MGPA"] * obj["CREDITS"]).toFixed(2);
        mgpaSum += obj["CREDITS X MGPA"];
        creditsSum += obj["CREDITS"];
        result.push(obj);
    }
    console.log(`\n\nCGPA REPORT`);
    console.log(studentName);
    console.table(result);
    var cgpa = (mgpaSum / creditsSum).toFixed(2);
    console.log(`CGPA : ${mgpaSum} / ${creditsSum} = ${cgpa}  (UNTIL MAT-${matCount})`);

    //Time to Compute Leaderboard
    //Scenario 1: If the leaderboard is empty
    if (leaderBoard.length === 0) {
        leaderBoard.push({ cgpa, students: [studentName] });
    } else {
        for (var i = 0; i < leaderBoard.length; i++) {
            //Scenario 2 : Check if anyone in the leaderboard has the same cgpa
            if (leaderBoard[i].cgpa === cgpa) {
                leaderBoard[i].students.push(studentName);
                cgpaFound = true;
            }
        }
        //Scenario 3 : The new student has new cgpa, 
        if (!cgpaFound) {
            leaderBoard.push({ cgpa, students: [studentName] });
            //Now sort the leaderboard with cgpa
            leaderBoard.sort(function (a, b) { return b.cgpa - a.cgpa });
        }
    }
    for (var i = 0; i < leaderBoard.length; i++) {
        leaderBoard[i].rank = i + 1;
    }
    console.table(leaderBoard);

}

module.exports = cgpaCalculator;