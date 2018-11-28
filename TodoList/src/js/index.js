import { addTodo } from "./todo-list";

const todoFormElt = document.querySelector('.todo-form');
const todoAddElt = document.querySelector('.todo-add');
const todoContainerElt = document.querySelector('.todo-container');

todoFormElt.addEventListener('submit', (event) => {
  event.preventDefault();

  const todo = {
    text: todoAddElt.value,
    done: false,
  };

  addTodo(todo, todoContainerElt);
});
