/*Analyze the following code block and write the output along with 4-5 lines of reasoning.*/
var num = 1;
var num2 = 44;
var obj = {
    [num + 40]: "Hello",
    "Hola": "Bye",
    [num2]: [num, num2],
    [num + num2]: "123"
}
console.log(obj.Hola)
console.log(obj["Hola"]);
console.log(obj[41]);
console.log(obj[45]);
console.log(obj[44]);
/*The code block initializes two variables: num with the value 1 and num2 with the value 44.
The obj object is declared and contains multiple properties defined using computed property names.
[num + 40] evaluates to 41, so "Hello" is assigned as the value of the 41 property.
"Hola": "Bye" explicitly defines a property with the key "Hola" and the value "Bye".
[num2] evaluates to 44, so the value assigned to the 44 property is an array [1, 44].
[num + num2] evaluates to 45, so "123" is assigned as the value of the 45 property.

console.log(obj.Hola) and console.log(obj["Hola"]) both access the value of the "Hola" property, resulting in outputting "Bye".

console.log(obj[41]) accesses the value of the 41 property, resulting in outputting "Hello".
console.log(obj[44]) accesses the value of the 44 property, resulting in outputting "123". 

console.log(obj[44]) access the value of [num2] evaluates to 44, so the value assigned to the 44 property is an array [1, 44].therfore we will get 1, 44
*/