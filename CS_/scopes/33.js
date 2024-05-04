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


