const fs = require('fs-extra');

// Uniquement possible si notre code est basé
// sur Promise

async function main() {
  try {
    await fs.ensureFile('./logs/app.log');
    await fs.appendFile('./logs/app.log', 'Ligne 1\n');
    await fs.appendFile('./logs/app.log', 'Ligne 2\n');
    await fs.appendFile('./logs/app.log', 'Ligne 3\n');
    const data = await fs.readFile('./logs/app.log');
    console.log(data.toString());
  }
  catch (err) {
    console.log(err);
  }
}

main();
