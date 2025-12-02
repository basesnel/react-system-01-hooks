import { useState } from 'react';
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

const TaskListP01 = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <List message="There is no elements in list.">
      {tasks.map(task => (
        <Item key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </Item>
      ))}
    </List>
  );
};

const Task = ({ task, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <Input
          inputName={`TaskP01 ${task.id}`}
          inputValue={task.text}
          handleChange={e => {
            onChange({ ...task, text: e.target.value });
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
          onChange({ ...task, done: e.target.checked });
        }}
      />
      {taskContent}
      <IconButton
        icon={<RiDeleteBinFill />}
        caption="delete"
        onClick={() => onDelete(task.id)}
      />
    </ItemLabel>
  );
};

TaskListP01.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onChangeTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskListP01;
