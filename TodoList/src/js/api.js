import axios from 'axios';

async function fetchTodos() {
  const url = 'https://jsonplaceholder.typicode.com/todos';

  const res = await axios.get(url);
  return res.data.map((t) => ({id: t.id, text: t.title, done: t.completed}))
    .slice(0, 10);
}

export {
  fetchTodos,
}
