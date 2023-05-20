/*Analyze the following code block and write the output along with 4-5 lines of reasoning.*/
var a = {
    b: "Prash",
    c: "Hello"
}
var arr = [2, 5, 7, 8, 9, "abc", "xyz"];
console.log(typeof arr);
console.log(arr.length);
console.log(typeof null);
/* The code block declares an object a with two properties: b with the value "Prash" and c with the value "Hello".
The code block also declares an array arr with elements [2, 5, 7, 8, 9, "abc", "xyz"].
The console.log(typeof arr) statement outputs the type of the arr variable, which is an object since arrays in JavaScript are a specific type of object.
The console.log(arr.length) statement outputs the length of the arr array, which is 7 since it contains seven elements.
The console.log(typeof null) statement outputs the type of the null value, which is also an object. This is a quirk in JavaScript's type system where null is mistakenly classified as an object.*/