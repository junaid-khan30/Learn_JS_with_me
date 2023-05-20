/*Analyze the following code block and write the output along with 4-5 lines of reasoning.*/
let obj = {
    for: 1,
    let: 2,
    return: 3
  };
console.log(obj.return);
/*The code block declares an object named obj using object literal syntax.
The object obj has three properties: for, let, and return.
In JavaScript, for, let, and return are reserved keywords used for specific language constructs and cannot be used as identifiers directly.
However, JavaScript allows using reserved keywords as property names within an object literal by wrapping them in quotes (e.g., "for", "let", "return").
The console.log(obj.return) statement accesses the value of the return property within the obj object, resulting in outputting 3. */