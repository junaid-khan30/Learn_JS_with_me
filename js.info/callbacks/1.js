/*In JavaScript (Async Programming)
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