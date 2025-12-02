import { useState } from 'react';
import { Heading } from 'components';
import { initialTasks } from 'constants';
import { AddTaskP01, TaskListP01 } from '../IntendendComponents';

let nextId = 3;
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

export default Prac01;
