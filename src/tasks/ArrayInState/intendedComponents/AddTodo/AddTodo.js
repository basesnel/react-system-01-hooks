import PropTypes from 'prop-types';

import { useState } from 'react';
import { RiAddCircleFill } from 'react-icons/ri';

import MiniForm from 'components/MiniForm';

export default function AddTodo(props) {
  const { onAddTodo } = props;

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
