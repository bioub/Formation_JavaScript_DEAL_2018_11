
const random = {
  // 1 - method properties
  get() {
    return Math.random();
  },

  // 2 - default params
  getArbitrary(min = 0, max = 100) {
    return Math.random() * (max - min) + min;
  },

  getInt(min = 0, max = 100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  getIntInclusive(min = 0, max = 100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  },
}

// importer un API d'un autre fichier dans Node.js (notion de Module)
const readline = require('readline');

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
    this.rl.question('Quel est le nombre à deviner ? ', (reponse) => {
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


const game = new Jeu();
game.jouer();
