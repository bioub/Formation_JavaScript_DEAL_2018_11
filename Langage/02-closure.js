function externe(msg) {
  // portée de closure
  function interne() {
    console.log(msg);
  }
  interne();
}

externe('Hello'); // Hello

// pile d'appels
// ^
// |
// |
// |interne
// |externe
// +------------------------> temps
