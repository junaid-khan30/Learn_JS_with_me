var globalVar = 'I am a global variable';

function globalFunction() {
    console.log(globalVar); // accessible
  }
  
  globalFunction(); // Output: 'I am a global variable'
  console.log(globalVar); // Output: 'I am a global variable'


  function localFunction() {
    
  