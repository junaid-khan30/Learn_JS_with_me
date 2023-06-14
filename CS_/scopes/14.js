const obj1 = {
    a: 1,
    b: {
        aa: 11,
        bb: 22,
        cc: () => {
            console.log(this);
        }
    },
    c: () => {
        console.log(this);
    }
}
obj1.b.cc();
obj1.c();
console.log(this);