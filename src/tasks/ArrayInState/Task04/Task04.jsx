import { useImmer } from 'use-immer';
import { nanoid } from 'nanoid';

import AddTodo from '../intendedComponents/AddTodo';
import TaskList from '../intendedComponents/TaskList';

import { initialTodosList } from 'constants';

const Task04 = () => {
  const [todos, updateTodos] = useImmer(initialTodosList);

  const handleAddTodo = title => {
    updateTodos(draft => {
      draft.push({
        id: nanoid(),
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
};

export default Task04;
