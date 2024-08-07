import { useState } from 'react';
import PropTypes from 'prop-types';
import { RiAddCircleFill } from 'react-icons/ri';
import { MiniForm } from 'components';
import { myTodos } from 'constants';

const { createTodo } = myTodos;

const NewTodoT01 = props => {
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

NewTodoT01.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default NewTodoT01;
