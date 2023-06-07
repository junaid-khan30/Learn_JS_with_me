var fs = require("fs/promises");

function base64Encoding(inputStr) {
    var inputStr = inputStr.split("");
    //Step 1 : Split the word into ASCII Characters
    var asciiChars = [];
    for (var i = 0; i < inputStr.length; i++) {
        asciiChars.push(inputStr[i].charCodeAt(0));
    }
    
    //Step 2: Find the binaries of the above array in 8 bits segment
   
    var binariesArray = [];
    for (var i = 0; i < asciiChars.length; i++) {
        var binary = asciiChars[i].toString(2);
        while (binary.length < 8) {
            binary = "0" + binary;
        }
        binariesArray.push(binary);
    }
   
    var binaryMerge = binariesArray.join('');
    
    var binaries6Bit = [];
    for (var i = 0; i < binaryMerge.length; i = i + 6) {
        binaries6Bit.push(binaryMerge.slice(i, i + 6));
    }
    //Handle the corner case : If the last element isn't 6bits
    if (binaries6Bit[binaries6Bit.length - 1].length != 6) {
        var counter = 0;
        while (binaries6Bit[binaries6Bit.length - 1].length < 6) {
            binaries6Bit[binaries6Bit.length - 1] += "0";
            counter++;
        }
    }
   
    var base64Numbers = [];
    for (var i = 0; i < binaries6Bit.length; i++) {
        base64Numbers.push(parseInt(binaries6Bit[i], 2));
    }
   
    var base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var encodedStr = '';
    for (var i = 0; i < base64Numbers.length; i++) {
        encodedStr += base64[base64Numbers[i]];
    }
    if (counter == 2) encodedStr += "=";
    if (counter == 4) encodedStr += "==";
    return encodedStr;
}


async function main(){
    try {
        var data = await fs.readFile("file.txt");
        data = data.toString();
        var encodedStr = base64Encoding(data);
        await fs.writeFile("file_encoded.txt", encodedStr);
        console.log("File has been encoded succesfully");
    } catch (error) {
        console.log(error);
    }
}
main();

// fs.readFile("file.txt")
//     .then((data)=>{
//         var data = data.toString();
//         var encodedStr = base64Encoding(data);
//         return fs.writeFile("file_encoded.txt", encodedStr);
//     })
//     .then(()=>{
//         console.log("File has been encoded succesfully");
//     })
//     .catch((err)=>{
//         console.log(err);
//     })