function base64Encoding(inputStr) {
    console.log("\n\nThe Entered String : ", inputStr);
    console.log(`\n\nStep 1 : Split the word ${inputStr} into ASCII Characters`);
    var inputStr = inputStr.split("");
    console.log('\n\nSplitting Input String Characters : ', inputStr);
    //Step 1 : Split the word into ASCII Characters
    var asciiChars = [];
    for (var i = 0; i < inputStr.length; i++) {
        asciiChars.push(inputStr[i].charCodeAt(0));
    }
    console.log('\n\nASCII Codes of Input String  : ', asciiChars);
    console.log(`\n----------------------------------------------------------`);
    //Step 2: Find the binaries of the above array in 8 bits segment
    console.log("\n\nStep 2: Find the binaries of the above array in 8 bits segment");
    var binariesArray = [];
    for (var i = 0; i < asciiChars.length; i++) {
        var binary = asciiChars[i].toString(2);
        while (binary.length < 8) {
            binary = "0" + binary;
        }
        binariesArray.push(binary);
    }
    console.log("\n\n8Bits Binary Array ", binariesArray);
    var binaryMerge = binariesArray.join('');
    console.log(`\n----------------------------------------------------------`);
    console.log("\n\nStep 3 : Merge all the binaries and split into 6 bits ");
    console.log("\n\nMerging all the binaries : ", binaryMerge);
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
    console.log("\n\n6 Bits Binary Segments : ", binaries6Bit);
    console.log(`\n----------------------------------------------------------`);
    console.log("\nStep 4 : Convert the 6 bit binaries into decimal numbers");
    var base64Numbers = [];
    for (var i = 0; i < binaries6Bit.length; i++) {
        base64Numbers.push(parseInt(binaries6Bit[i], 2));
    }
    console.log("\nDecimal Numbers of above 6-bit binary segments ", base64Numbers);
    console.log(`\n----------------------------------------------------------`);
    console.log(`\nStep 5 : Map the above decimals to Base64 character using base64 table`);
    var base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var encodedStr = '';
    for (var i = 0; i < base64Numbers.length; i++) {
        encodedStr += base64[base64Numbers[i]];
    }
    if (counter == 2) encodedStr += "=";
    if (counter == 4) encodedStr += "==";
    console.log(`\nThe Base-64 Encoded String of ${inputStr.join("")} is : ${encodedStr}\n\n`);
}

base64Encoding("prash");