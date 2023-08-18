var fs = require("fs");
fs.readFile('lowercase.txt', (err, data) => {
    if (err) {
        throw err;
    }
    var fileData = data.toString().toUpperCase();
    console.log(`File converted to Uppercase : ${fileData}`);
    fs.writeFile('uppercase.txt', fileData, (err) => {
       if (err) {
        //    throw err;
      //  }
      //  console.log('Data written successfully!');
       // fs.unlink('lowercase.txt', (err) => {
          //  if (err) {
           //     throw err;
          //  }
            console.log('File successfully deleted.');
     //   });
    });
});