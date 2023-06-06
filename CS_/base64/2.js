function base64Encoding (inputStr){
    var inputStr =  inputStr.split("");
    //Step1 : Split the word into ASCII Characters
    console.log(inputStr);
    var asciiChars = [];
    for(var i=0; i<inputStr.length; i++){
        asciiChars.push(inputStr[i].charCodeAt(0));
    }
    //console.log(asciiChars);
    //Step 2: Find the binaries of the above array in 8 bits
    var binariesArray = [];
    for(var i=0; i<asciiChars.length;i++){
        var binary = asciiChars[i].toString(2);
        while(binary.length<8){
            binary = "0" + binary;
        }
        binariesArray.push(binary);
    }
    console.log(binariesArray);
    var binaryMerge = binariesArray.join('');
    console.log(binaryMerge);
    var binaries6Bit = [];
    for(var i =0; i<binaryMerge.length; i=i+6){
        binaries6Bit.push(binaryMerge.slice(i,i+6));
    }
    console.log(binaries6Bit);

}
base64Encoding("THS");