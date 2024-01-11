import { useState } from 'react';
import { initialTodos, createTodo } from './todos';

export default function TformDataWithoutEffect() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);

  const visibleTodos = showActive
    ? todos.filter(todo => !todo.completed)
    : todos;

  const countActiveTodos = todos.reduce((prevCount, todo) => {
    return todo.completed ? prevCount + 0 : prevCount + 1;
  }, 0);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={e => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <NewTodo onAdd={newTodo => setTodos([...todos, newTodo])} />
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      <footer>{countActiveTodos} todos left</footer>
    </>
  );
}

function NewTodo({ onAdd }) {
  const [text, setText] = useState('');

  function handleAddClick() {
    setText('');
    onAdd(createTodo(text));
  }

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button type="button" onClick={handleAddClick}>
        Add
      </button>
    </>
  );
}
