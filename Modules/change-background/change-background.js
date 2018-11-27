'use strict';

const random = require('./random');

/**
 * Change aléatoirement le fond
 * @param {HTMLElement} element L'élement à modifier
 */
function changeBackground(element) {
  const r = random.getIntInclusive(0, 255);
  const g = random.getIntInclusive(0, 255);
  const b = random.getIntInclusive(0, 255);
  element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

module.exports = changeBackground;
