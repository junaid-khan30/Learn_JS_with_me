/*
JS LEGIT SYNTAXES: 
 1) Strings: we can use both '' and "" for string in JS 
 When to use single quotaion and double quotation ?
 a : if you want to print '' in output you need to put "" outside in var
     if you want to print "" in output you need to put '' outside in var

How to escape character 
a : line 17 (with backslash \) and 19
*/
var fname = 'Junaid';
var lname = "Khan";
var  city = 'Hyderabad';

var bio = "Junaid' Khan lives in Hyderabad";
var bio2 = 'Junaid "Khan used to live in Banglore';
var story = "Monkey \" eat in class";

var story2 = 'I \'love \' making\' money';

var apple = "I love apples";
var loop = "I am stuck in the Matrix";

console.log(fname, lname, city);
console.log(bio);
console.log(bio2);
console.log(story);
console.log(story2);

console.log(apple + " and " + loop);