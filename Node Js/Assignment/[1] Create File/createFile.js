const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, "ArdiOsmani.txt");

fs.writeFile(filePath, "Hello World!", (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }

  console.log('File path:', filePath);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File content:', data);
  });
});
