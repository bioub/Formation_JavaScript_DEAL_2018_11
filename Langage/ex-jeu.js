function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}


// importer un API d'un autre fichier dans Node.js (notion de Module)
const readline = require('readline');

// on configure readline pour lire une ligne sur le clavier
// et afficher des questions dans le terminal
const rl = readline.createInterface(process.stdin, process.stdout);

function jouer() {

  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' - '));
  }

  rl.question('Quel est le nombre à deviner ? ', (reponse) => {

    const entierSaisi = parseInt(reponse);

    if (isNaN(entierSaisi)) {
      console.log('Erreur: il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      return jouer();
    }

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      return jouer();
    }

    console.log('Gagné');
    rl.close();
  });
}

const entierAlea = getRandomIntInclusive(0, 100);
const essais = [];
jouer();

// console.log('Fin');

// pile d'appels
// ^
// |
// |                     question       question
// |question             jouer          jouer
// |jouer    -     ..... cb       ..... cb       ......
// +---------------------ENTREE---------ENTREE------------------------> temps
//                       Vous avez...   Vous avez...
