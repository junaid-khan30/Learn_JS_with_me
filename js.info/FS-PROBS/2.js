//WrIte a Program to Read the File Data, Convert the File Data into UPPERCASE
//and create a new File with the new buffer. Delete the original file after creating new file.

var fs = require("fs");

fs.readFile("data.txt",(err,data)=> {
    if(err){
        console.log(err);
    }else{
        var newData = data.toString().toUpperCase();
        fs.writeFile("NEWDATA.txt",newData,(err)=> {
            if(err){
                console.log(err);
            }else {
                fs.unlink("data.txt",(err)=> {
                    console.log(err);
                })
            }
        })

    }
});
//this type of confused nested is called CALLBACKHELL (CBH)
