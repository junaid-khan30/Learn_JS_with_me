var leaderBoard = [
    { score: 2, players: ['Elon'] },
    { score: 3, players: ['Prash,Junaid'] },
    { score: 4, players: ['Yaseera'] },
    { score: 5, players: ['Harvey', 'Walter', 'Meera'] },

]


leaderBoard.push({ score: 1, players: ["Hanzala"] });
//Hanzala with score 1
leaderBoard.sort(function(a, b){return a.score - b.score});

console.table(leaderBoard.slice(0,4));