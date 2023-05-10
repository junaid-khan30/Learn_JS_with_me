var score = [56, 78, 99, 100, 88, 11, 0, 91, 89, 75];
var person = { fname: "Prash", score: 100}

var scoreData = [
   { fname: "Sam", score: 56 },
   { fname: "Sania", score: 56 },
   { fname: "Adnan", score: 56 },
   { fname: "Yaseera", score: 56 },
];
//array Operations 
scoreData.push(({fname: "Abhinav", score: -10}));//NOTE: .push() will always insert at the end of Array
scoreData.unshift(({fname: "Prash", score: 100 }));//NOTE: .unshift() will always insert at the 0th position
console.log(scoreData);
scoreData.splice(2,2);//Deletes the items from array

console.log(scoreData);