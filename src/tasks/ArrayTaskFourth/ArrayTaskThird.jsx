import { useImmer } from 'use-immer';

import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, updateTodos] = useImmer(initialTodos);

  const handleAddTodo = title => {
    updateTodos(draft => {
      draft.push({
        id: todos.length,
        title: title,
        done: false,
      });
    });
  };

  const handleChangeTodo = nextTodo => {
    updateTodos(draft => {
      const updateTodo = draft.find(t => t.id === nextTodo.id);
      updateTodo.title = nextTodo.title;
      updateTodo.done = nextTodo.done;
    });
  };

  const handleDeleteTodo = todoId => {
    updateTodos(draft => draft.filter(t => t.id !== todoId));
    // updateTodos(draft => {
    //   const index = draft.findIndex(t => t.id === todoId);
    //   draft.splice(index, 1);
    // });
  };

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
