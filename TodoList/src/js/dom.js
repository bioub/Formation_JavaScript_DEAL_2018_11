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

/**
 * Supprime l'élément
 * @param {Element} element
 */
function remove(element) {
  element.parentNode.removeChild(element);
}

export {
  prepend,
  remove,
}
