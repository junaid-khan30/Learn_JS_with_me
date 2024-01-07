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

/*var t = 10;: Declares a variable t and assigns it the value 10.
var g = "12";: Declares a variable g and assigns it the string value "12".
var tt = false;: Declares a variable tt and assigns it the boolean value false.
var gname = "prash";: Declares a variable gname and assigns it the string value "prash".
g = +g;: Converts the string in g to a number using the unary plus (+) operator.
gname = +gname;: Attempts to convert the string in gname to a number using the unary plus (+) operator. However, since the string is not a valid numeric representation, it results in NaN (Not a Number).
console.log(typeof t, typeof g, typeof tt);: Outputs the types of t, g, and tt, which are number, number, and boolean respectively.
console.log(gname);: Outputs NaN since the attempt to convert the string to a number resulted in NaN.
var pp = "99";: Declares a variable pp and assigns it the string value "99".
console.log(-pp);: Attempts to convert the string in pp to a number and negates it. Outputs -99.
console.log(typeof -pp, typeof pp);: Outputs the types of -pp and pp, which are number and string respectively. */