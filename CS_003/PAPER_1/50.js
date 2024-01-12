var a = {
    code: '.in'
};
var g = {
    key: 'value'
};
var b = 'key';
var ths = {
    [b]: 'value',
    b: 1234,
    b: 4567,
    [a]: "old is gold",
    [g]: "but i like diamond"
};
ths[a] = "i m still old";
ths[b] = "different";
ths.b = "i m new";
console.log(ths);

/*
The object a is defined with a property code having the value '.in'.
The object g is defined with a property key having the value 'value'.
The variable b is assigned the string value 'key'.
The object ths is created with properties [b], b, [a], and [g], 
where [b] and [a] use the values of b and a as property names.
The assignments ths[a] = "i m still old", ths[b] = "different", 
and ths.b = "i m new" modify the values of properties in the ths object.
The final console.log(ths); prints the modified ths object. 
The properties are accessed using the property names stored in variables (a and b), 
resulting in the output where the keys are a mix of string literals and the values of the variables a and b. 
Note that duplicate property names are overwritten.
*/