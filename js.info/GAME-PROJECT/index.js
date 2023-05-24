var readlineSync = require('readline-sync');

/*
   (0,9) => Numbers between 0 and 9 but not 0,9 Exclusive
   [0,9] => Numbers between 0-9 and 0,9 are inclusive 
   [0,9) => 0 is inclusive and 9 is exclusive 

    Interger (z) - Zahlen 

*/

function playGame() {
    console.log(Math.random());//0-1(exclusive)
    console.log(Math.random() * 10);// 0-9(including float numbes)
    console.log(Math.floor(Math.random()* 10)); //0-9(without float value )

    console.log(Math.floor(Math.random() * 10) + 1); //[1,10]

    console.log(Math.floor(Math.random() * 10) + 5); //[5, 14]

    console.log(Math.floor(Math.random() * 100) + 50);//[50, 149]
}
playGame();

function pureRandom(min, max) {
    console.log(Math.floor(Math.random() * max) + min);
}
pureRandom(10, 20);

//to get exact min and max number
function pureRandom(min, max) {
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}
pureRandom(10, 20);