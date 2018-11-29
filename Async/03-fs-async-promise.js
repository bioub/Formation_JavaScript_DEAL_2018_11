const fs = require('fs-extra');

// API Promise
// lib: bluebird, q...
// ES6: natif

fs.ensureFile('./logs/app.log')
  .then(() => fs.appendFile('./logs/app.log', 'Ligne 1\n'))
  .then(() => fs.appendFile('./logs/app.log', 'Ligne 2\n'))
  .then(() => fs.appendFile('./logs/app.log', 'Ligne 3\n'))
  .then(() => fs.readFile('./logs/app.log'))
  .then((data) => console.log(data.toString()))
  .catch((err) => console.log(err));

