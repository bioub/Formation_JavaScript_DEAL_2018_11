import { prepend } from "./dom";

/**
 * Ajoute une todo à la liste
 * @param {object} todo La todo à ajouter
 * @param {number} todo.id L'id de la todo
 * @param {string} todo.text Le texte
 * @param {boolean} todo.done A cocher ou non
 * @param {HTMLElement} containerElt
 */
function addTodo(todo, containerElt) {
  const divElt = document.createElement('div');

  const inputElt = document.createElement('input');
  inputElt.type = 'text';
  inputElt.required = true;
  inputElt.value = todo.text;

  divElt.appendChild(inputElt); // <div><input></div>

  prepend(containerElt, divElt);
}

export {
  addTodo,
}
