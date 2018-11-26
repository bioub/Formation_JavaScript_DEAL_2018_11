// En JS, on manipule des objets existants (du langage):
console.log('typeof Math', typeof Math); // object
console.log('typeof JSON', typeof JSON); // object

// Navigateur
console.log('typeof document', typeof document); // object
console.log('typeof window', typeof window); // object

// Node.js
console.log('typeof process', typeof process); // object

// Navigateur + Node.js
console.log('typeof console', typeof console); // object

// Un objet JS est un dictionnaire (un système clé/valeur)
console.log(Math.PI); // 3.14......
console.log(Math.sum); // undefined

// ajouter une clé/valeur
Math.sum = function(a, b) { return a + b; };
console.log('Math.sum(1, 2)', Math.sum(1, 2)); // 3

// modifier une clé/valeur
Math.sum = function(a, b) { return Number(a) + Number(b); };

// supprimer une clé/valeur
delete Math.sum;

// Mauvaise pratique de modifier les objets globaux
// (Math, String, Array, console, process)

// On peut créer ses propres objets :

// 3 cas possibles :

// 1 - Objet mono-instanciés (créé 1 seule fois)
// => object literal
const myMath = {
  sum: function(a, b) { return Number(a) + Number(b); }
};

console.log('myMath.sum(1, 2)', myMath.sum(1, 2)); // 3

// 2 - Objet multi-instanciés (créés plusieurs fois)
// très simple à créer ET SANS méthode (fonction)
// => object literal

const coords1 = {
  x: 10,
  y: 20,
  // Mauvaise pratique
  // une fonction getInfos par objet coords
  // getInfos: function() { return 'infos' },
};

const coords2 = {
  x: 40,
  y: 64,
  // Mauvaise pratique
  // une fonction getInfos par objet coords
  // getInfos: function() { return 'infos' },
};


// 3 - Objet multi-instanciés (créés plusieurs fois)
// compliqué à créer ET/OU avec méthode (fonction)
// => constructor function

function Contact(prenom) {
  this.prenom = prenom;
}

Contact.prototype.hello = function() {
  return 'Bonjour je m\'appelle ' + this.prenom;
};

const romain = new Contact('Romain');
const jean = new Contact('Jean');
console.log('typeof romain', typeof romain); // object
console.log(romain.prenom); // Romain
console.log(romain.hello()); // Bonjour je m'appelle Romain
console.log(romain.hasOwnProperty('prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false

