const nbs = [2, 3, 4];

// programmation functionnelle
// style (paradigme) de programmation
// ou les fonctions remplacent les boucles/ifs...
// filter, map, forEach ES5 (IE9+ sinon polyfill)
nbs
// .filter(function cb(nb) { return nb % 2 === 0 })
.filter((nb) => nb % 2 === 0)
.map(function cb(nb) { return nb * nb })
.forEach(function cb(nb, i) {
  console.log(nb, i);
});

// console.log(typeof cb); // undefined
console.log('Fin');


// pile d'appels
// ^
// |
// |                         log  log
// |cb - cb - cb   cb - cb   cb - cb
// |filter       - map     - forEach  - cb
// +---------------------------------------> temps
//                           4    16    Fin
