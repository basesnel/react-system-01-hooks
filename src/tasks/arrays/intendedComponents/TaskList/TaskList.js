import { useState } from 'react';

import { RiSave3Fill } from 'react-icons/ri';
import { RiFileEditFill } from 'react-icons/ri';
import { RiDeleteBinFill } from 'react-icons/ri';

import List from 'components/List';
import ListitemII from 'components/ListitemII';
import DecoratedIconButton from 'components/DecoratedIconButton';

import css from './TaskList.module.css';

export default function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <List message="There is no elements in list.">
      {todos.map(todo => (
        <ListitemII
          key={todo.id}
          content={
            <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
          }
        />
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
        <input
          value={todo.title}
          onChange={e => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <DecoratedIconButton
          caption={<RiSave3Fill />}
          onClick={() => setIsEditing(false)}
        />
      </>
    );
  } else {
    todoContent = (
      <>
        <span className={css['item-content']}>{todo.title}</span>
        <DecoratedIconButton
          caption={<RiFileEditFill />}
          onClick={() => setIsEditing(true)}
        />
      </>
    );
  }

  return (
    <label className={css['item-flex']}>
      <input
        type="checkbox"
        name={todo.id}
        checked={todo.done}
        onChange={e => {
          onChange({ ...todo, done: e.target.checked });
        }}
      />
      {todoContent}
      <DecoratedIconButton
        caption={<RiDeleteBinFill />}
        onClick={() => onDelete(todo.id)}
      />
    </label>
  );
}
