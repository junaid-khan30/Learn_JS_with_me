console.log(22 && 44);
console.log(55 && 0 && 22);
console.log(0 && 2 && 5);
console.log(22 || 44);
console.log(55 || 0 || 22);
console.log(0 || 2 || 5);
console.log("" && "pritvi");

/* 
1) Reason:  When both the operand values are truthy, The logical AND operator (&&) returns the value of the second operand if the first operand is truthy. 

2) Reason: the first operand (55) is truthy, but the second operand (0) is falsy. The logical AND operator returns the falsy value (0) as soon as it encounters one, without evaluating the rest of the expression. Therefore, the output is 0.

3)Reason: The first operand (0) is falsy, so the expression immediately evaluates to 0 without evaluating the rest of the operands. 

4)Reason: When both operands are truthy,The logical OR operator (||) returns the value of the first operand. In this case, 22 is truthy, so the expression evaluates to 22. 

5)Reason: The first operand (55) is truthy, so the expression immediately evaluates to 55 without evaluating the rest of the operands. The logical OR operator returns the first truthy value it encounters.

6)Reason: The first operand (0) is falsy, so it evaluates the second operand (2). Since 2 is truthy, the expression evaluates to 2. It does not need to evaluate the third operand (5).

7)Reason: The first operand (an empty string) is falsy, so the expression immediately evaluates to the first falsy value it encounters, which is an empty string (""). The logical AND operator returns the falsy value without evaluating the second operand ("pritvi").*/