import { useState } from 'react';
import PropTypes from 'prop-types';
import { RiAddCircleFill } from 'react-icons/ri';
import { MiniForm } from 'components';
import { myTodos } from 'constants';

const { createTodo } = myTodos;

const NewTodo = props => {
  const { onAdd } = props;

  const [text, setText] = useState('');

  function handleAddClick(text) {
    setText('');
    onAdd(createTodo(text));
  }

  return (
    <>
      <MiniForm
        onFormSubmit={handleAddClick}
        filling={`Add todo-element ${text}`}
        icon={<RiAddCircleFill />}
      />
    </>
  );
};

NewTodo.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default NewTodo;
