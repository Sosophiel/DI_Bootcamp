// const fs = require('fs');

// fs.readFile('text.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });



// const fs = require('fs');

// const content = 'Hello everyone !';

// fs.writeFile('text.txt', content, 'utf-8, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(content);
// });


const deleteFile = ('text.txt', callback) => {
    
    fs.unlink(filePath, (error) => {
      if (!error) {
        console.log(err);
      } else {
        console.log('Error deleting the file');
      }
    })
  };


