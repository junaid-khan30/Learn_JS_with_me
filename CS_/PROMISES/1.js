//riddle 
var bool = true;

setTimeout(() => {
    bool = false;
},3000);

while(bool) {
    console.log("loading ..");
}

/* The output of the code is resulting in an infinite loop because the while loop is continuously running as long as the variable bool remains true.

In the code provided, the initial value of bool is true. After that, a setTimeout function is called with a delay of 3000 milliseconds (3 seconds). This function sets the value of bool to false after the specified delay.

However, the setTimeout function is asynchronous, which means it doesn't block the execution of the program. The while loop is executed immediately after the setTimeout function is called, and it continues running indefinitely because there is no other code that modifies the value of bool inside the loop.

Since the value of bool is never changed within the loop, it remains true forever, resulting in an infinite loop. The console.log statement inside the loop will keep printing "loading .." repeatedly, causing the output to appear infinite.

To prevent this infinite loop, you can use a different approach such as using a callback function inside the setTimeout or utilizing the Promise object to handle asynchronous behav*/