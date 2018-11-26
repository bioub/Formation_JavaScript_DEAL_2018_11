function externe(msg) {
  // portée de closure
  // dans ce cas, la portée est sauvegardé
  // tant que interne est appelable

  // si besoin libérer la mémoire avec
  // msg = null;
  function interne() {
    console.log(msg);
  }
  return interne;
}

const helloFct = externe('Hello');
helloFct(); // Hello

// pile d'appels
// ^
// |
// |
// |
// |externe - interne
// +------------------------> temps

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}
// 3 3 3

for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 1000);
}
// 0 1 2
