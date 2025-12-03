import { useReducer } from 'react';
import { Title } from 'components';
import tasksReducer from './tasksReducer';
import { initialTasks } from 'constants';
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
      <Title level={3} caption="Prague itinerary" />
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
