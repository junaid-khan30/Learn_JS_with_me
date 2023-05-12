var readlineSync = require('readline-sync');

var leaderBoard = [
    { rank: 1, score: 4, name: ['sam', 'sania'] },
    { rank: 2, score: 5, name: ['ritvik', 'hanzala'] },
    { rank: 3, score: 6, name: ['adnan'] }
];


function playGame() {
    var targetNumber = randomNumber(1, 100);
    console.log(targetNumber);
    var playerName = readlineSync.question("Enter your name : ");
    var guess = readlineSync.questionInt("Take a Guess : ");
    var score = 0;

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
    var userData = { rank: 1, score: ++score, player: [playerName] }
    console.log(userData);
    console.log(`You won with ${++score} attempts. Congratulations!!!`);
}
playGame();
console.table(leaderBoard);
function randomNumber(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}





