//OTHER WAY OF WRITING SET INTERVAL 

var count = 0;
var abc = () => {
    console.log(`The value of count is : ${++count}`);
}

setInterval(abc,2000);
