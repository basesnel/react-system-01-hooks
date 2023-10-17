import { useImmer } from 'use-immer';

import AddTodo from '../intendedComponents/AddTodo';
import TaskList from '../intendedComponents/TaskList';

import { initialTodosList } from 'constants';

export default function ArrayTaskFourth() {
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
