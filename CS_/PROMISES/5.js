var count = 0;
var abc = () => {
    if (count == 10) {
        clearInterval(prashBlock);
    }else{
    console.log(`The value of count is : ${++count}`);
    }
}

var prashBlock = setInterval(abc, 2000);

