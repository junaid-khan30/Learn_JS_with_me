//setInterval 

var count =0;
setInterval(()=>{
    console.log(`I am a lazy fellow today ... : ${++count} `);
},1500);

/* he setInterval function takes two arguments: a function and a time interval in milliseconds. In this case, the interval is set to 1500 milliseconds, or 1.5 seconds.

Inside the setInterval function, we have an arrow function that logs the message "I am a lazy fellow today ..." to the console. The arrow function () => { ... } is an anonymous function without any parameters.

So, when this code runs, it will output the message "I am a lazy fellow today ..." to the console every 1.5 seconds until the program is stopped or the interval is cleared. The purpose of this code is to demonstrate how to use setInterval to execute a function repeatedly at a specific time interval.*/