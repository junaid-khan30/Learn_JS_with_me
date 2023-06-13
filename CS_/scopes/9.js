let a = {fname : "Prash", city: "Brisbane"};
let b = a;
let c = {fun: "Movie", sad: "Story"};
let d = {fname : "Prash", city: "Brisbane"};
console.log(a == b);
console.log(a == a);
console.log(c == c);
console.log(a == c);
console.log(a == d);//In JS, no two objects are identical though they have same properties 

b.city = "Banglore";
console.log(a);