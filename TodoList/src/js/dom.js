/**
 * Ajoute en newElt en premier enfant de containerElt
 * @param {Element} containerElt
 * @param {Element} newElt
 */
function prepend(containerElt, newElt) {
  if (containerElt.children.length) {
    containerElt.insertBefore(newElt, containerElt.firstElementChild);
  }
  else {
    containerElt.appendChild(newElt);
  }
}

export {
  prepend,
}
