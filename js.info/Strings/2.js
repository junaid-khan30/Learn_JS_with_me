/* SPECIAL CHARACTERS */
///It is still possible to create multiline strings with single and double quotes by using a so-called “newline character”, written as \n, which denotes a line break:

var guestlist = "Guest:\n *John\n *horskinson\n *brook\n";
console.log(guestlist);

//both are similar just written differently
var str = "Hello\nWorld";//two lines using \n
var str2 =`Hello
World`;//two lines using backtick and without \n
console.log(str);
console.log(str2);

//all special characters start with a backslash character \. It is also called an “escape character”.
//Because it’s so special, if we need to show an actual backslash \ within the string, we need to double it:
console.log(`The backslash: \\`);//The backslash: \