import { useImmer } from 'use-immer';

import AddTodo from '../intendedComponents/AddTodo';
import TaskList from '../intendedComponents/TaskList';

import { initialTodosList } from 'constants';

export default function Task04() {
  const [todos, updateTodos] = useImmer(initialTodosList);

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
