import { useState } from 'react';

import PropTypes from 'prop-types';

import { RiAddCircleFill } from 'react-icons/ri';

import { MiniForm } from 'components';

const AddTodo = props => {
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
};

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodo;
