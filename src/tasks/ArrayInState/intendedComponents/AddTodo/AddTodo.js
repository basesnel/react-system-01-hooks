import { useState } from 'react';
import { RiAddCircleFill } from 'react-icons/ri';

import PropTypes from 'prop-types';

import MiniForm from 'components/MiniForm';

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');

  return (
    <>
      <MiniForm
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

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
