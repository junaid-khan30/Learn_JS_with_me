function base64Encoding (inputStr){
    var inputStr =  inputStr.split("");
    //Step1 : Split the word into ASCII Characters
    console.log(inputStr);
    var asciiChars = [];
    for(var i=0; i<inputStr[i].length; i++){
        asciiChars.push(inputStr[i].charCodeAt(0));
    }
    console.log(asciiChars);
}
base64Encoding("THS");