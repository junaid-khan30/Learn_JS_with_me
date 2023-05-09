//Array.at
var array1 = [5, 12, 6, 412, 44];
var index = 2;
console.log(` ${index}  is ${array1.at(index)}`);//"Expected output is "Using an index of 2 the item returned is 6"
 index = -2;
 console.log(` ${index}  is ${array1.at(index)}`);
 //Expected output is "Using an index of -2 itme returned is 412"

 //SYNTAX
// at(index)

//Return last array with function 
var cart = ["apple", "mango", "banana"];

function returnlast(fruit){
    return fruit.at(-1);
}
var item1 = returnlast(cart);
console.log(item1);

//Add an item at the last
cart.push("orange");
var item2 = returnlast(cart);
console.log(item2);

//COMPARING METHOD 
//getting last but one with length syntax
//lets say we have an array called colors
var colors = ['Red', 'Green', 'White'];
var lengthWay = colors[colors.length -1];
console.log(lengthWay);
colors.push('black');
var newcolor = colors;
console.log(newcolor);

//// Using slice() method. Note an array is returned
var sliceWay = colors.slice(-2, -1);
console.log(sliceWay[0]);//After push(updating value of color) we get white 

//Using at() method
var atWay = colors.at(-2);
console.log(atWay);//white