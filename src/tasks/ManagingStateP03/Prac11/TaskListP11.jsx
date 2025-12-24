import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { RiSave3Fill, RiFileEditFill, RiDeleteBinFill } from 'react-icons/ri';
import { FiEdit3 } from 'react-icons/fi';
import {
  List,
  Item,
  ItemLabel,
  IconButton,
  Input,
  ItemCheckedText,
} from 'components';
import { TasksContext, TasksDispatchContext } from './TasksContext';

const TaskListP11 = () => {
  const tasks = useContext(TasksContext);
  return (
    <List message="There is no elements in list.">
      {tasks.map(task => (
        <Item key={task.id}>
          <Task task={task} />
        </Item>
      ))}
    </List>
  );
};

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <Input
          inputName={`TaskP01 ${task.id}`}
          inputValue={task.text}
          handleChange={e => {
            dispatch({
              type: 'changed',
              task: { ...task, text: e.target.value },
            });
          }}
          icon={<FiEdit3 />}
        />
        <IconButton
          icon={<RiSave3Fill />}
          caption="save"
          onClick={() => setIsEditing(false)}
        />
      </>
    );
  } else {
    taskContent = (
      <>
        <ItemCheckedText content={task.text} checked={task.done} />
        <IconButton
          icon={<RiFileEditFill />}
          caption="edit"
          onClick={() => setIsEditing(true)}
        />
      </>
    );
  }

  return (
    <ItemLabel>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          dispatch({
            type: 'changed',
            task: { ...task, done: e.target.checked },
          });
        }}
      />
      {taskContent}
      <IconButton
        icon={<RiDeleteBinFill />}
        caption="delete"
        onClick={() => dispatch({ type: 'deleted', id: task.id })}
      />
    </ItemLabel>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TaskListP11;
