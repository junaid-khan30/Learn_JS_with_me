var fs = require('fs');

var newFile1 = '1.json';
var newFile2 = '0.json';

fs.readFile('data.json', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    var todoData = JSON.parse(data);
    var completedUsers = [];
    var falseUsers = [];

    for (var i = 0; i < todoData.length; i++) {
      if (todoData[i].completed === true) {
        completedUsers.push(todoData[i]);
      } else if (todoData[i].completed === false) {
        falseUsers.push(todoData[i]);
      }
    }

    fs.writeFile(newFile1, JSON.stringify(completedUsers), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Completed users exported to ${newFile1} successfully.`);
      }
    });

    fs.writeFile(newFile2, JSON.stringify(falseUsers), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`TO GET FALSE users exported to ${newFile2} successfully.`);
      }
    });
  }
});

//CLI APP 
var readlineSync = require('readline-sync');
var fs = require('fs');

function displayMenu() {
    console.clear();
    console.log("---------------");
    console.log("OPTIONS");
    console.log("0 Exit Program");
    console.log("1 TO GET TRUE data");
    console.log("2 TO GET FALSE data");
    console.log("---------------");

    var userChoice = readlineSync.questionInt("Select what you want from above options: ");

    switch (userChoice) {
        case 0:
            console.log(" Exiting program!");
            process.exit(0);
        case 1:
            ToGetCompletedTrue();
            break;

        case 2:
            completedFalse();
            break;

        default:
            console.log("Option not present! Please select a valid option from the Menu : ");
            setTimeout(() => {
                displayMenu();
            }, 2500);
    }
}

displayMenu();

function ToGetCompletedTrue() {
    fs.readFile('data.json', (err, data) => {
        if (err) {
            console.log(err);
        }

        var dataJson = JSON.parse(data);
        var trueJson = [];

        for (var i = 0; i < dataJson.length; i++) {
            if (dataJson[i].completed) {
                trueJson.push(dataJson[i]);
            }
        }

        fs.writeFile('1.json', JSON.stringify(trueJson), err => {
            if (err) {
                console.log(err);
            } else {
                console.log('1.json file updated!');

                var decisionToContinue = readlineSync.question("Want to perform again? yes/no : ");
                if (decisionToContinue.toLowerCase() === 'n') {
                    console.log("Bye Bye...");
                    process.exit(0);
                } else {
                    displayMenu();
                }
            }
        });
    });
}

function completedFalse() {
    fs.readFile('data.json', (err, data) => {
        if (err) {
            console.log(err);
        }

        var dataJson = JSON.parse(data);
        var falseJson = [];

        for (var i = 0; i < dataJson.length; i++) {
            if (!dataJson[i].completed) {
                falseJson.push(dataJson[i]);
            }
        }

        fs.writeFile('0.json', JSON.stringify(falseJson), err => {
            if (err) {
                console.log(err);
            } else {
                console.log('0.json file updated!');

                var proceed = readlineSync.question("Want to perform again? yes/no : ");
                if (proceed.toLowerCase() === 'n') {
                    console.log("Bye Bye...");
                    process.exit(0);
                } else {
                    displayMenu();
                }
            }
        });
    });
}