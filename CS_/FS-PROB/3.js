const fs = require('fs');

// Reading from a file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
      }
      console.log('File content:', data);
});

/*
This code snippet imports the Node.js file system module (fs). 
It then asynchronously reads the content of a file named "example.txt" in UTF-8 encoding. 
If an error occurs during the reading process, it logs the error message to the console. 
Otherwise, it prints the content of the file to the console. The callback function receives two parameters: err,
 which contains any error that may occur during the reading process, and data, which contains the content of the file once it's read.
*/