import { useState } from 'react';

import { RiSave3Fill } from 'react-icons/ri';
import { RiFileEditFill } from 'react-icons/ri';
import { RiDeleteBinFill } from 'react-icons/ri';
import { FiEdit3 } from 'react-icons/fi';

import List from 'components/List';
import Item from 'components/Item';
import ItemLabel from 'components/ItemLabel';
import IconButton from 'components/IconButton';
import Input from 'components/Input';
import ItemCheckedText from 'components/ItemCheckedText';

export default function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <List message="There is no elements in list.">
      {todos.map(todo => (
        <Item key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </Item>
      ))}
    </List>
  );
}

function Task({ todo, onChange, onDelete }) {
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
}
