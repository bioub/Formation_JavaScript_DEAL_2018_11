const fs = require('fs-extra');

try {
  fs.ensureFileSync('./logs/app.log');
  fs.appendFileSync('./logs/app.log', 'Ligne 1\n');
  fs.appendFileSync('./logs/app.log', 'Ligne 2\n');
  fs.appendFileSync('./logs/app.log', 'Ligne 3\n');
  const data = fs.readFileSync('./logs/app.log');
  console.log(data.toString());
}
catch (err) {
  console.log(err);
}
