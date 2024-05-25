let nextId = 0;
let calls = 0;

const getVisibleTodos = (todos, showActive) => {
  console.log(`getVisibleTodos() was called ${++calls} times`);
  const activeTodos = todos.filter(todo => !todo.completed);
  const visibleTodos = showActive ? activeTodos : todos;
  return visibleTodos;
};

const createTodo = (text, completed = false) => {
  return {
    id: nextId++,
    text,
    completed,
  };
};

const initialTodos = [
  createTodo('Get apples', true),
  createTodo('Get oranges', true),
  createTodo('Get carrots'),
];

export { getVisibleTodos, createTodo, initialTodos };
