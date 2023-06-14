const obj = {
    fname: "Johnny",
    age: 55,
    sayHai: () => {
        console.log(obj.fname, obj.age);
    }
}
console.log(obj.fname);
console.log(obj.age);
obj.sayHai();