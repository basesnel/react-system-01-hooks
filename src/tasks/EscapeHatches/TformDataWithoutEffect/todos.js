let nextID = 0;

export function createTodo(text, completed = false) {
  return {
    id: nextID++,
    text,
    completed,
  };
}

export const initialTodos = [
  createTodo('Get apples', true),
  createTodo('Get oranges', true),
  createTodo('Get carrots'),
];
