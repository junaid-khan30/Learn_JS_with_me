/*Analyze the following code block and write the output along with 4-5 lines of reasoning.*/
var t = 10;
var g = "12";
var tt = false;
var gname = "prash";
g = +g;
gname = +gname;
console.log(typeof t, typeof g, typeof tt);
console.log(gname);
var pp = "99";
console.log(-pp);
console.log(typeof -pp, typeof pp);

/*
var t = 10; assigns the value 10 to the variable t.
var g = "12"; assigns the string value "12" to the variable g.
var tt = false; assigns the boolean value false to the variable tt.
var gname = "prash"; assigns the string value "prash" to the variable gname.
g = +g; uses the unary plus operator + to convert the string value in g to a number. The value of g becomes the numeric value 12.
gname = +gname; attempts to convert the string value in gname to a number. However, since the string "prash" cannot be parsed as a valid number, the conversion returns NaN (Not-a-Number). Therefore, gname becomes NaN.
console.log(typeof t, typeof g, typeof tt); prints the types of the variables t, g, and tt.
The type of t is number (typeof t evaluates to "number").
The type of g is number (typeof g evaluates to "number").
The type of tt is boolean (typeof tt evaluates to "boolean").
The output of this line is "number number boolean".
console.log(gname); prints the value of gname, which is NaN.
The output of this line is NaN.
var pp = "99"; assigns the string value "99" to the variable pp.
console.log(-pp); applies the unary negation operator - to pp, attempting to convert it to a negative number. Since pp is a string that can be parsed as a valid number, the value becomes -99.
The output of this line is -99.
console.log(typeof -pp, typeof pp); prints the types of the unary negation of pp and pp itself.
The type of -pp is number (typeof -pp evaluates to "number").
The type of pp is string (typeof pp evaluates to "string").
The output of this line is "number string". */