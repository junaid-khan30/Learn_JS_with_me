/*Analyze the following code block and write the output along with 4-5 lines of reasoning.*/
var obj = {
    fun: "js",
    human: {
        fname: "Prash",
        alive: true,
        "yo yo": "yes yes",
        1: 22,
        33: 44
    },
    gg: "99",
    99: 89,
    i: ["prash", [2, 3, 4, 56],
        {
            fname: "Prash",
            lname: "BM",
            age: 555
        }],
    prash: "winner"
}
console.log(99 in obj);
/*The code block defines an object named obj with various properties and nested objects.
The 99 property is directly assigned the value 89.
The console.log(99 in obj) statement checks if the property 99 exists in the obj object.
Since the property 99 is explicitly defined in the object, the expression 99 in obj evaluates to true.
Therefore, the output will be true. */