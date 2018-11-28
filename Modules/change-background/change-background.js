'use strict';

// Module ES6
import { getRandomIntInclusive } from './random';

/**
 * Change aléatoirement le fond
 * @param {HTMLElement} element L'élement à modifier
 */
function changeBackground(element) {
  const r = getRandomIntInclusive(0, 255);
  const g = getRandomIntInclusive(0, 255);
  const b = getRandomIntInclusive(0, 255);
  element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

export { changeBackground };
