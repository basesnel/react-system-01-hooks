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

const TaskList = props => {
  const { todos, onChangeTodo, onDeleteTodo } = props;

  return (
    <List message="There is no elements in list.">
      {todos.map(todo => (
        <Item key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </Item>
      ))}
    </List>
  );
};

const Task = props => {
  const { todo, onChange, onDelete } = props;

  const [isEditing, setIsEditing] = useState(false);

  let todoContent;

  if (isEditing) {
    todoContent = (
      <>
        <Input
          inputType="text"
          inputName={`Todo ${todo.id}`}
          inputValue={todo.title}
          handleChange={e => {
            onChange({
              ...todo,
              title: e.target.value,
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
    todoContent = (
      <>
        <ItemCheckedText content={todo.title} checked={todo.done} />
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
        name={todo.id}
        checked={todo.done}
        onChange={e => {
          onChange({ ...todo, done: e.target.checked });
        }}
      />
      {todoContent}
      <IconButton
        icon={<RiDeleteBinFill />}
        caption="delete"
        onClick={() => onDelete(todo.id)}
      />
    </ItemLabel>
  );
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onChangeTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

Task.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskList;
