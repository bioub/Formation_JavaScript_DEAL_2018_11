const fs = require('fs-extra');

// Callback hell / Pyramid of doom
fs.ensureFile('./logs/app.log', (err) => {
  if (err) {
    return console.log(err);
  }
  fs.appendFile('./logs/app.log', 'Ligne 1\n', (err) => {
    if (err) {
      return console.log(err);
    }
    fs.appendFile('./logs/app.log', 'Ligne 2\n', (err) => {
      if (err) {
        return console.log(err);
      }
      fs.appendFile('./logs/app.log', 'Ligne 3\n', (err) => {
        if (err) {
          return console.log(err);
        }
        fs.readFile('./logs/app.log', (err, data) => {
          if (err) {
            return console.log(err);
          }
          console.log(data.toString());
        });
      });
    });
  });
});

// ^
// |
// |ensureFile .......  appendFile
// +--------------------------------->
