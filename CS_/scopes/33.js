// Global scope variable
var globalVar = "I'm global";

function globalScopeExample() {
    console.log(globalVar); // Accessible inside the function
}

globalScopeExample(); // Output: I'm global
console.log(globalVar); // Output: I'm global



//Function Scopes
function functionScopeExample() {
    var localVar = "I'm local";
    console.log(localVar); // Accessible inside the function
}

// console.log(localVar); // Error: localVar is not defined, because it's only accessible inside the function
functionScopeExample(); // Output: I'm local


var globalVar = "I'm in the global scope";
function foo() {
    console.log(globalVar); // Accessible
}

foo();

function foo() {
    
