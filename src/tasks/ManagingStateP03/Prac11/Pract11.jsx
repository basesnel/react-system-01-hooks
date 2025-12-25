import { Heading } from 'components';
import { useReducer } from 'react';
import TaskListP11 from './TaskListP11';
import { TasksContext, TasksDispatchContext } from 'contexts';
import { AddTaskP11 } from '../IntendendComponents';

const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

const initialTasks = [
  { id: 0, text: 'Philosopher’s path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false },
];

const Prac10 = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <Heading level={3}>Day off in Kyoto</Heading>
        <AddTaskP11 />
        <TaskListP11 />
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export default Prac10;
