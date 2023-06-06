//BASE64 encoding 
var readlineSync = require("readline-sync");
function base64Encode(input) {
    var input = readlineSync.question("ENTER THE CHARACTER YOU WANT TO ENCODED : ");
    var base64Chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  
    var output = "";
    var padding = 0;
  
    for (var i = 0; i < input.length; i += 3) {
      var char1 = input.charCodeAt(i);
      var char2 = input.charCodeAt(i + 1);
      var char3 = input.charCodeAt(i + 2);
  
      var enc1 = char1 >> 2;
      var enc2 = ((char1 & 3) << 4) | (char2 >> 4);
      var enc3 = ((char2 & 15) << 2) | (char3 >> 6);
      var enc4 = char3 & 63;
  
      if (isNaN(char2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(char3)) {
        enc4 = 64;
      }
  
      output +=
        base64Chars.charAt(enc1) +
        base64Chars.charAt(enc2) +
        base64Chars.charAt(enc3) +
        base64Chars.charAt(enc4);
    }
  
    return output;
  }
  
  // Example usage:
  var input = "Hello, World!";
  var encoded = base64Encode(input);
  console.log(encoded);
  