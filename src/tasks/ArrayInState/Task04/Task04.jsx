import { useImmer } from 'use-immer';
import { nanoid } from 'nanoid';
import { initialTodosList } from 'constants';
import { AddTodoT03T04, TaskListT03T04 } from '../intendedComponents';

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
      <AddTodoT03T04 onAddTodo={handleAddTodo} />
      <TaskListT03T04
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
};

export default Task04;
