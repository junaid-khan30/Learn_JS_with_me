var data = [
    { value: 23, key: `number` },
    { value: 44, key: `number` },
    { value: 55, key: `number` },
    { value: 108, key: `number` },
    { value: 11, key: `number` },
    { value: 77, key: `number` },
    { value: 57, key: `number` },
    { value: 200, key: `number` },
];

function extractEven(data) {
    var evenArray = [];
    for(var i =0; i<data.length; i++){
        if (data[i].value % 2 == 0){
            evenArray.push(data[i]);
        }
    }
    return evenArray;
}

console.log(extractEven(data));