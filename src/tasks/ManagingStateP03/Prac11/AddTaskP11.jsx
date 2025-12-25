import { useContext } from 'react';
import { RiAddCircleFill } from 'react-icons/ri';
import { TasksDispatchContext } from 'contexts';
import { MiniForm } from 'components';

let nextId = 3;

const AddTaskP11 = () => {
  const dispatch = useContext(TasksDispatchContext);

  return (
    <MiniForm
      onFormSubmit={text => {
        dispatch({ type: 'added', id: nextId++, text: text });
      }}
      filling="Add element"
      icon={<RiAddCircleFill />}
    />
  );
};

export default AddTaskP11;
