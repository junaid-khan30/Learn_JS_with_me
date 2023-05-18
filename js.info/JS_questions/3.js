var a = 22;
var arr = [2, 3, 4];
var b = 22;
a = b;
console.log(a == 2);
console.log(a == b);
console.log(a != b);
console.log(b !== a);

/*  variable a is declared and assigned the value 22.
    variable arr is declared and assigned an array with the values [2, 3, 4].
    variable b is declared and assigned the value 22.

    a = b;
This line of code assigns the value of b (which is 22) to a. So now, both a and b have the value 22.

console.log(a == 2);

The comparison a == 2 checks if the value of a is equal to 2. Since a is 22, which is not equal to 2, the output is false.

console.log(a == b);

The comparison a == b checks if the value of a is equal to the value of b. Both a and b have the value 22, so the output is true.

console.log(a != b);

The comparison a != b checks if the value of a is not equal to the value of b. Since both a and b have the value 22, which is equal, the output is false.

console.log(b !== a);

The comparison b !== a checks if the value of b is not strictly equal to the value of a. Since both b and a have the value 22 and they are of the same type, the output is false. */