import { addTodo } from "./todo-list";
import { remove } from "./dom";

const todoFormElt = document.querySelector('.todo-form');
const todoAddElt = document.querySelector('.todo-add');
const todoContainerElt = document.querySelector('.todo-container');
const todoToggleElt = document.querySelector('.todo-toggle');


todoFormElt.addEventListener('submit', (event) => {
  event.preventDefault();

  const todo = {
    text: todoAddElt.value,
    done: false,
  };

  addTodo(todo, todoContainerElt);
});

todoContainerElt.addEventListener('click', (event) => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  remove(event.target.parentNode);
});

todoToggleElt.addEventListener('click', (event) => {
  const checkboxesElt = todoContainerElt.querySelectorAll('input[type="checkbox"]');

  const checkboxes = Array.from(checkboxesElt);

  checkboxes.forEach((checkbox) => {
    checkbox.checked = todoToggleElt.checked;
  })
});

/*
Exercice :

1 / Dans addTodo, ajouter un bouton moins
Au clic de ce bouton moins, supprimer la balise div
parent
Indice MDN : parentNode, removeChild()

2 / Ajouter un case à cocher dans index.html
Ajouter une case à cocher dans addTodo
Au clic de la case à cocher de index.html
Cocher ou décocher toutes les autres

Indice MDN : querySelectorAll, Array.from
checkboxElt.checked = true pour cocher
checkboxElt.checked = false pour décocher

*/
