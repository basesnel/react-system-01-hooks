import { useState } from 'react';
import { RiAddCircleFill } from 'react-icons/ri';

import DecoratedMiniForm from 'components/DecoratedMiniForm';

// import css from './AddTodo.module.css';

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');

  return (
    <>
      <DecoratedMiniForm
        onFormSubmit={title => {
          onAddTodo(title);
          setTitle('');
        }}
        filling={`Add element ${title}`}
        icon={<RiAddCircleFill />}
      />
    </>
  );
}
