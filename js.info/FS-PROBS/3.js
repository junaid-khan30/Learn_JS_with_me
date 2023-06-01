var fs = require("fs");

fs.readFile("old.txt", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        var newContent = data.toString().toUpperCase();
        fs.writeFile("NEWFILE.txt", newContent, (err) => {
            if (err) {
                console.log(err);
            } else {
                fs.unlink("old.txt", (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(("Old File Got Deleted and New File is created"));
                    }
                })
            }
        })
    }
});