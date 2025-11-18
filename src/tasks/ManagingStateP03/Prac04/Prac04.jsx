import { useImmerReducer } from 'use-immer';
import { Title } from 'components';
import AddTask from './AddTask';
import TaskList from './TaskList';
import tasksReducer from './tasksReducer';

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

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
      <Title level={3} caption="Prague itinerary" />
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default Prac04;
