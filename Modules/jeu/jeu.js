const random = require('./random'); // un fichier du projet (./ ou ../)
const readline = require('readline'); // dans le binaire de node
const chalk = require('chalk'); // dans le dossier node_modules

// 3 - class
class Jeu {
  constructor(options = {}) {
    //options = options || {};

    // 5 - destructurer options (en une ligne) avec default param (comme z page 130)
    // const min = options.min || 0;
    // const max = options.max !== undefined ? options.max : 100;
    const { min = 0, max = 100 } = options;


    this.rl = readline.createInterface(process.stdin, process.stdout);
    this.entierAlea = random.getIntInclusive(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      // 6 - template literal/string
      console.log(`Vous avez déjà joué ${this.essais.join(' - ')}`);
    }
    this.rl.question(chalk.blue('Quel est le nombre à deviner ? '), (reponse) => {
      const entierSaisi = Number.parseInt(reponse);
      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur: il faut saisir un nombre');
        return this.jouer();
      }
      this.essais.push(entierSaisi);
      if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        return this.jouer();
      }
      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        return this.jouer();
      }
      console.log('Gagné');
      this.rl.close();
    });
  }
}

module.exports = Jeu;
