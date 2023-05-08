var scores = [56, 78, 99, 100, 88, 11,, 0, 91, 89, 75];
var person = {fname: "Prash", score: 100}

var scoreData = [
    { fname: "Sam", score: 56},
    {fname: "Sania", score: 99},
    {fname: "Yaseera", score: 89},
    {fname: "Adnan", score: 0},
    {fname: "Hanzala", score: 58},
    {fname: "Ritvik", score: 88},
];
//array Operations 
scoreData.push(({ fname: "Abhinav", score: -10 }));//NOTE : push() will always insert at the emd of Array
scoreData.unshift(({ fname: "Junaid", score: 100})); //NOTE : .unshift() will always insert at the 0th position 

console.log(scoreData);
