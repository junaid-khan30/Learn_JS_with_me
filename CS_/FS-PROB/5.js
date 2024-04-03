const fs = require('fs');

const content = 'This is the content to write to the file.';

// Writing to a file asynchronously
fs.writeFile('example.txt', content, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
      }
      console.log('Content has been written to the file.');
});
