import { useState } from 'react';
import PropTypes from 'prop-types';
import { RiAddCircleFill } from 'react-icons/ri';
import { MiniForm } from 'components';

const AddTaskP11 = ({ onAddTask }) => {
  const [text, setText] = useState('');

  return (
    <MiniForm
      onFormSubmit={text => {
        onAddTask(text);
        setText('');
      }}
      filling={`Add element ${text}`}
      icon={<RiAddCircleFill />}
    />
  );
};

AddTaskP11.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default AddTaskP11;
