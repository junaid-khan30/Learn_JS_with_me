var abc = {
    a: [9, 99, 999],
    b: [1, 2, 3, 4, 5],
    c: ["abc", { a: 11, b: 12 }]
}
console.log(abc.a[2]);
console.log(abc.b[2]);
console.log(abc.c[1].b);

/*
console.log(abc.a[2]);: Accesses the third element of the array stored in the property a of the object abc. It prints 999.
console.log(abc.b[2]);: Accesses the third element of the array stored in the property b of the object abc. It prints 3.
console.log(abc.c[1].b);: Accesses the b property of the object stored in the second element of the array in the property c of the object abc. It prints 12.
*/