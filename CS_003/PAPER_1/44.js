
var tt = [1, 2, 5, 8, 9, 0];
var abc = [[1, 2, 3], [8, 9, 10], [1], [0, 0, 0, 0, 100], tt];
console.log(abc.length);
console.log(abc[0][2]);
console.log(abc[3][4]);
var xyz = [[[1, 2, 3], [8, 9, 10]], [[11, 12, 13], [18, 19, 100]]];
console.log(xyz.length);
console.log(xyz[1][1][2]);

/*
console.log(abc.length);: Outputs the length of the array abc, which is 5. So, it prints 5.
console.log(abc[0][2]);: Accesses the third element of the first array within abc, resulting in the output 3.
console.log(abc[3][4]);: Accesses the fifth element of the fourth array within abc, resulting in the output 100.
console.log(xyz.length);: Outputs the length of the array xyz, which is 2. So, it prints 2.
console.log(xyz[1][1][2]);: Accesses the third element of the second array within the second array of xyz, resulting in the output 100.
*/