setTimeout(function cbA() {
  console.log('A');
}, 500);

setTimeout(function cbB() {
  console.log('B');
}, 1000);

setTimeout(function cbC() {
  console.log('C');
}, 0);

setTimeout(function cbD() {
  console.log('D');
}, 500);

/*
setTimeout(function() {
  console.log('E');
}, Math.random() * 1001);

setTimeout(function() {
  console.log('F');
}, Math.random() * 1001);
*/

console.log('Fin');

// pile d'appels
// ^
// |
// |
// |                              log       log log      log
// |st - st - st - st - log ..... cbC ..... cbA cbD .... cbB
// +------------------------------2ms-------501-----------------> temps
//                      Fin       C         A   D        B

// file d'attente (0ms) : cbC
// file d'attente (2ms) :
// file d'attente (500ms) : cbA cbD
// file d'attente (501ms) : cbD
// file d'attente (502ms) :
// file d'attente (1000ms) : cbB
// file d'attente (1001ms) : 
