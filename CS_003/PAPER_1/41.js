
var obj = {
    a: 1,
    b: 2,
    c: 3,
    1: 'a',
    2: 'b',
    3: 'c'
}
console.table(obj);
console.log(obj.c);
console.log(obj['c']);
console.log(obj['1']);

/*
The console.table(obj); prints a tabular representation of the obj object, showing all the properties and their values.

The console.log(obj.c); prints the value of the 'c' property of the obj object, which is 3.

The console.log(obj['c']); prints the value of the 'c' property using square bracket notation, which is also 3.

The console.log(obj['1']); prints the value of the '1' property using square bracket notation. 
The key '1' is actually a string in this case (keys are always converted to strings), 
so it prints the value associated with the string '1', which is 'a'.
*/