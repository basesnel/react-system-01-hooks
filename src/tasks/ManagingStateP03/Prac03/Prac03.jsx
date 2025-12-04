import { useReducer } from 'react';
import { Heading } from 'components';
import { initialTasks } from 'constants';
import tasksReducer from './tasksReducer';
import { AddTaskP01, TaskListP01 } from '../IntendendComponents';

let nextId = 3;

const Prac03 = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const handleAddTask = text => {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  };

  const handleChangeTask = task => {
    dispatch({
      type: 'changed',
      task: task,
    });
  };

  const handleDeleteTask = taskId => {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  };

  return (
    <>
      <Heading level={3}>Prague itinerary</Heading>
      <AddTaskP01 onAddTask={handleAddTask} />
      <TaskListP01
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default Prac03;
