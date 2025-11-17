import { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { Title } from 'components';

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

const Prac01 = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = text => {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  };

  const handleChangeTask = task => {
    setTasks(
      tasks.map(t => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  };

  const handleDeleteTask = taskId => {
    setTasks(tasks.filter(t => t.id !== taskId));
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

export default Prac01;
