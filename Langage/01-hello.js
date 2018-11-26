/**
 * Additionne 2 paramètres
 * @param {number} a Le 1er param
 * @param {number} b Le 2e param
 * @returns {number} La somme
 */
function sum(a, b) {
  return a + b;
}

for (let i = 0; i < 3; i++) {
  console.log(sum(i, i));
}
