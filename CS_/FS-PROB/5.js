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

const fs = require('fs');

// Checking if a file exists
fs.access('example.txt', fs.constants.F_OK, (err) => {
    if (err) {
        console.error('File does not exist or is not accessible.');
        return;
      }
      console.log('File exists and is accessible.');
    });

    const fs = require('fs').promises;

async function readFileAsync() {
  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log('File content:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

readFileAsync();

const fs = require('fs').promises;

async function writeFileAsync(content) {
  try {
    await fs.writeFile('example.txt', content);
    console.log('Content has been written to the file.');
  } catch (err) {
    console.error('Error writing to file:', err);
  }
}

writeFileAsync('This is the content to write to the file.');


const fs = require('fs').promises;

async function appendFileAsync(newContent) {
  try {
    
  } catch (err) {
    console.error('Error appending to file:', err);
  }
}
appendFileAsync('This is the new content to append to the file.');
