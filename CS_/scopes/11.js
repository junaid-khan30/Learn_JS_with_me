let obj1 = {
    a: 1, 
    b: 2
}

let obj2 = obj1;

console.log(obj1 == obj2);
obj2 = null;
console.log(obj1);
console.log(obj2);