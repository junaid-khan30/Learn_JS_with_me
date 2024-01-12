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