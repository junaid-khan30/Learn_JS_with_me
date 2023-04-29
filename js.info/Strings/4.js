var str = `Hello`;
console.log(str[2]);
console.log(str.at(2));
//To get last character 
console.log(str[str.length-1]);//o
console.log(str.at(-1));

//As you can see, the .at(pos) method has a benefit of allowing negative position. If pos is negative, then it’s counted from the end of the string.

//So .at(-1) means the last character, and .at(-2) is the one before it, etc.

//The square brackets always return undefined for negative indexes, for instance:
console.log(str[-2])//undefined
console.log(str.at(-2));

//We can also iterate over characters using for..of:

for(var char of "Hello"){
    console.log(char);
}
