//WRITE A JS PROGRAM TO PRINT ROT-13 ENCODED VALUES
var readlineSync = require("readline-sync");
function convertToRot13(input) {
    var output = "";
    var input = readlineSync.question("Enter Alphabet : ");
    for (var i = 0; i < input.length; i++) {
        var charCode = input.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {  // Uppercase letters
            output += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {  // Lowercase letters
            output += String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
        } else {
            output += input.charAt(i);  // Non-alphabetic characters
        }
    }

    return output;
}

var input = "Hello";
var encoded = convertToRot13(input);
console.log(encoded);
