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
    i: ["prash", [2, 3, 4, 56],
        {
            fname: "Prash",
            lname: "BM",
            age: 555
        }],
    prash: "winner"
}
console.log(obj.i);
/* we have declared as variable and assigned objects as value to it
Inside Object we fun, human, gg, i and prash as key names
fun has string value "js", human has object as key value, gg has String value "99",i has array as key value Inside this array we have String, Sub-Array and Object as key values
prash has string value "winner"

console.log(obj.i) will print i property which has key value's given as [ 'prash', [ 2, 3, 4, 56 ], { fname: 'Prash', lname: 'BM', age: 555 } ]
*/