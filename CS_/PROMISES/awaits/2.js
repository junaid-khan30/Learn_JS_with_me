var fs = require("fs/promises");

/* 
NOTE 1 : Async await are not replacement to Promises 
NOTE 2 : Async await is an extension to consume an existing promise

Step 1 : Entire async code must be wrapped in a function with a try catch block

*/

async function main(){
    try{
        var data = await fs.readFile("todos.json");
        console.log(JSON.parse(data));
    }catch (error){
        console.error(error);
    }
}
main();