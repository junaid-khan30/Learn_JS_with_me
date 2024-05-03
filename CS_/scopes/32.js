var globalVar = 'I am a global variable';

function globalFunction() {
    console.log(globalVar); // accessible
  }
  
  globalFunction(); // Output: 'I am a global variable'
  console.log(globalVar); // Output: 'I am a global variable'


  function localFunction() {
    var localVar = 'I am a local variable';
    console.log(localVar); // accessible
  }
  
  localFunction(); // Output: 'I am a local variable'
  console.log(localVar); // Error: localVar is not defined
  


  function outerFunction() {
    var outerVar = 'I am in the outer function';
    
    
  