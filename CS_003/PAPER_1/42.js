var abc = [1, 2, 4, 5, 6];
var obj = { a: 1, b: 2, c: 3 };
var xyz = [obj, { 1: 1, 2: 'b' }, { fname: 'prash' }];
console.log(xyz[0]);
console.log(xyz[2]);
console.log(xyz[2].fname);
console.log(xyz[2]['fname']);
console.log(xyz[1][2]);

/*
console.log(xyz[0]);: Outputs the first element of the array xyz, which is the object obj. So, it prints { a: 1, b: 2, c: 3 }.
console.log(xyz[2]);: Outputs the third element of the array xyz, which is the object { fname: 'prash' }. So, it prints { fname: 'prash' }.
console.log(xyz[2].fname);: Accesses the fname property of the third element in the array, resulting in the output prash.
console.log(xyz[2]['fname']);: Similar to the previous line, it also accesses the fname property and prints prash.
console.log(xyz[1][2]);: Accesses the property with key 2 in the second element of the array, resulting in the output b.
*/