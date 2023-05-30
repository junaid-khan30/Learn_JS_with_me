//setInterval 
// If I want to stop the count with particular count 

var count = 0;
var abc = () => {
    if (count == 10) {
        return clearInterval(prashBlock);
    }
    console.log(`The value of count is : ${++count}`);
}

var prashBlock = setInterval(abc, 2000);

