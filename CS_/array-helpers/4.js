var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

 var result = arr.map((ele)=>{
    console.log(ele);
    return "Donkey"
});

console.log("------------");
var result2 = arr.forEach((ele)=>{
    console.log(ele);
    return "Donkey"
});

console.log(result);
console.log(result2);

//Array.map() return ele
//Array.forEach() doesn't return ele