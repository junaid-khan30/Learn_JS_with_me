//Write a Program to Read the FIle Data, Convert the File Data into UPPERCASE
//and create the new File with the new buffer, Delete the original file after creating new file.

var fs = require("fs");

fs.readFile("data.txt", (err,data) => {
    if (err) {
        console.log(err);
    }else {
        var newData
    }
})