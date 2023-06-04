/*

    Synchronus Programming ? (Blocking )

    Asynchronous Programming ? (Non Blocking)

    Single Threaded Programming Language ?

    Multi Threaded Programming Language ? Java/C++ , JS (Worker Threads)

    What is a Thread in Operating System?

    What is Process in Operating System 
    
    Find Difference between Process & Thread ?
*/

/*

    What makes your Computer Faster? Explain the CPU Architecture 


    CPU Architure Types : x86, ARM, M1/M2 

What makes your Computer Faster :
    1) CPU Speed(Processor Speed) : Frequency   
    2) Number Of Cores (Helps in Achieving Parallel Processing)
    3) Memory (RAM)
    4) Storage Drive Types : (HDD/SSD)
    5) GPU (Graphics Processing Unit)
    6) Network Connectivity (Bandwidth/Throughput)


    Process : A program is in active execution state


    Parallel Processing :

  Synchronus Programming (Blocking) :

    * One Instruction At A Time (Blocking Manner)

    Synchronous programming refers to a programming paradigm in which the execution of program instructions occurs in a sequential 
    and blocking manner. In other words, each operation is completed before moving on to the next one, and the program waits for 
    each operation to finish before proceeding to the next line of code.

    In synchronous programming, when a function or operation is called, the program execution is blocked until that function or
    operation completes its task. 
    This means that if there is a long-running task or a delay, the program will be idle and unresponsive during that time. 
    It follows a one-at-a-time execution model, where the subsequent operations cannot start until the current one is finished.

    Pros / Cons : 

  Asynchronous Programming  (Non Blocking)

  Asynchronous programming is a programming paradigm that allows the execution of tasks to be non-blocking and concurrent. 
  In contrast to synchronous programming, where operations are executed one after another, asynchronous programming enables the program
   to initiate a task and continue executing other operations without waiting for the task to complete. 
   It allows the program to be more responsive and efficient, especially when dealing with time-consuming or I/O-bound operations.

In asynchronous programming, when a task is initiated, the program doesn't wait for its completion. 
Instead, it proceeds to execute the next line of code or operation immediately. 
When the task completes or reaches a certain milestone, it notifies the program through a callback function, an event, or a promise, 
allowing the program to handle the result or continue with the next steps.


    In JavaScript (Async Programming)
        1) CallBacks (FCB)
            A Function passed another function as an argument (FCB), 
            which is then invoked inside the outer function to complete some kind of routine or action.
        2) Promises
            - What is A Promise ?
                * The Promise object represents the eventual completion (or failure) of an ASYNCHRONOUS operation and its resulting value.
            - How to consume a Promise ?
                * .then()
                  .catch()
            Note : its easy to use promise created by others than using our made promise
            - How to create a Promise ?
        3) Async - Await
        4) Generators

Asynchronous programming can be implemented using various techniques and constructs, including callbacks, promises,
 async/await syntax, and event-driven programming. 
These mechanisms provide ways to handle the completion or errors of asynchronous tasks and maintain the flow of the program.


In JSON, double quotes are option if the values are numbers.


*/

function addNumbers(a, b) {
    console.log("Starting addition...");
    var result = a + b;
    console.log("Addition complete.");
    return result;
}

console.log("Before addition");
var sum = addNumbers(3, 4);
console.log("After addition");
console.log("Sum:", sum);