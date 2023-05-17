var readlineSync = require('readline-sync');

var leaderBoard = [];


function playGame() {
    //Step 1 : Computer will guess a random number between 1-100 and stores in targetNumber
    var targetNumber = randomNumber(1, 100);


    console.log(targetNumber); //This is just to cheat during game building/coding. To be removed at the end

    //Prompt User for their name
    var playerName = readlineSync.question("Enter your name : ");
    // User Enters their first Guess
    var guess = readlineSync.questionInt("Take a Guess : ");
    // This is the counter variable to store the no of attempts of the user guesses
    var score = 0;
    var scoreFound = false;

    while (guess != targetNumber) {
        //Time to Hint the player
        if (guess < targetNumber) {
            console.log(`${guess} Number is less than the Target Number!`);
            
        } else if (guess > targetNumber) {
            console.log(`${guess} Number is greater than the Target Number`);
        }
        ++score;
        guess = readlineSync.questionInt("Take an another Guess : ");
    }

    console.log(`Hey ${playerName} You won with Score : ${++score}. Congratulations!!!`);

    //Scenario 1: If the leaderboard is empty
    if (leaderBoard.length === 0) {
        leaderBoard.push({ score, players: [playerName] });
    } else {
        for (var i = 0; i < leaderBoard.length; i++) {
            //Scenario 2 : Check if anyone in the leaderboard has the same score
            if (leaderBoard[i].score === score) {
                leaderBoard[i].players.push(playerName);
                scoreFound = true;
            }
        }
        //Scenario 3 : The new winner has new score, 
        if (!scoreFound) {
            leaderBoard.push({ score, players: [playerName] });
            //Now sort the leaderboard with scores
            leaderBoard.sort(function (a, b) { return a.score - b.score });
        }
    }

    for (var i = 0; i < leaderBoard.length; i++) {
        leaderBoard[i].rank = i + 1;
    }
    console.table(leaderBoard.slice(0, 3)); //Top-3 only
    var choice = readlineSync.question("Do you want to continue : (y/n)");
    if (choice === 'y' || choice === 'Y') {
        playGame();
    } else {
        console.log("Bye Bye! Exiting...");
    }
}


playGame();





function randomNumber(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}




/*
    (0,9) => Numbers between 0 and 9 but not 0,9 Exclusive
    [0,9] => Numbers between 0-9 and 0,9 are inclusive
    (0,9] => 0 is exclusive, 9 is inclusive 
    [0,9) => 0 is inclusive, 9 is exclusive

    Integer (z) - Zahlen (Non frictional number)

*/