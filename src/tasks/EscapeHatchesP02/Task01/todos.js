let nextID = 0;

const createTodo = (text, completed = false) => {
  return {
    id: nextID++,
    text,
    completed,
  };
};

const initialTodos = [
  createTodo('Get apples', true),
  createTodo('Get oranges', true),
  createTodo('Get carrots'),
];

export { createTodo, initialTodos };
