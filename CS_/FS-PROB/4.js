const fs = require('fs');

const newContent = 'This is the new content to append to the file.';

// Appending to a file asynchronously
fs.appendFile('example.txt', newContent, (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
      }
      
});
