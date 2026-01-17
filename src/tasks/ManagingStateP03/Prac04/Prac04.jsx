import { useImmerReducer } from 'use-immer';
import { H } from 'components';
import { initialTasks } from 'constants';
import { AddTaskP01, TaskListP01 } from '../IntendendComponents';
import tasksReducer from './tasksReducer';

let nextId = 3;

const Prac04 = () => {
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

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
      <H level={3}>Prague itinerary</H>
      <AddTaskP01 onAddTask={handleAddTask} />
      <TaskListP01
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default Prac04;
