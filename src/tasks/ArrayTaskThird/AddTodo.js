import { useState } from 'react';

import { FiEdit } from 'react-icons/fi';

import DecoratedInput from 'components/DecoratedInput';
import DecoratedButton from 'components/DecoratedButton';

import css from './AddTodo.module.css';

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');

  return (
    <>
      <DecoratedInput
        inputType="text"
        inputName="title"
        inputValue={title}
        inputLabel="Add todo"
        handleChange={e => setTitle(e.target.value)}
        icon={<FiEdit className={css.icon} />}
      />
      <DecoratedButton
        caption="Add"
        onClick={() => {
          setTitle('');
          onAddTodo(title);
        }}
      />
    </>
  );
}
