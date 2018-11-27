// Définir les fonctions random et les exporter
// (dans un objet)

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

module.exports = random;
