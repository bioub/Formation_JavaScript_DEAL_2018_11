const fs = require('fs-extra');
const path = require('path');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function removeAndMkdir(path) {
  await fs.remove(path);
  await fs.mkdir(path);
}

async function buildJs() {
  const datas = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  for (const data of datas) {
    await fs.appendFile(appJsDistPath, data);
  }

  console.log('build JS DONE');
}

async function buildHtml() {
  const data = await fs.readFile(indexHtmlPath);
  let content = data.toString();

  /*
  content = content.replace('<script src="./js/horloge.js"></script>', '');
  content = content.replace(
    '<script src="./js/index.js"></script>',
    '<script src="./app.js"></script>',
  );
  */

  content = content.replace(
    /<script.*><\/script>/s,
    '<script src="./app.js"></script>',
  );

  await fs.writeFile(indexHtmlDistPath, content);
  console.log('build HTML DONE');
}

(async () => {
  await removeAndMkdir(distPath);

  await Promise.all([
    buildJs(),
    buildHtml(),
  ]);

  console.log('DONE');
})();
