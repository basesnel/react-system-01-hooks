import { useState } from 'react';

import { nanoid } from 'nanoid';

import AddTodo from '../intendedComponents/AddTodo';
import TaskList from '../intendedComponents/TaskList';

import { initialTodosList } from 'constants';

const Task03 = () => {
  const [todos, setTodos] = useState(initialTodosList);

  const handleAddTodo = title => {
    setTodos([
      ...todos,
      {
        id: nanoid(),
        title: title,
        done: false,
      },
    ]);
  };

  const handleChangeTodo = nextTodo => {
    setTodos(
      todos.map(todo => {
        if (todo.id === nextTodo.id) {
          return { ...todo, title: nextTodo.title, done: nextTodo.done };
        } else {
          return todo;
        }
      })
    );
  };

  const handleDeleteTodo = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId));
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

export default Task03;
