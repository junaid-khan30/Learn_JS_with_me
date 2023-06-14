const obj = {
    fname: "Johnny",
    age: 55,
    sayHai: function ()  {
        console.log(this.fname, this.age);
    }
}
console.log(obj.fname);
console.log(obj.age);
obj.sayHai();

/*
The keyword in Javascript refers to the current execution context 
or the object on which a method is being invoked.

It allows you to access properties and methods within the current object context
*/