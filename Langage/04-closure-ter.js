function externe(msg) {
  // portée de closure
  // dans ce cas, la portée est sauvegardé
  // tant que interne est appelable
  setTimeout(function interne() {
    console.log(msg);
  }, 1000);
}

externe('Hello');

// pile d'appels
// ^
// |
// |
// |
// |externe           interne
// +------------------1s------> temps
