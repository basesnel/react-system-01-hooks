import { useState } from 'react';
import PropTypes from 'prop-types';
import { RiAddCircleFill } from 'react-icons/ri';
import { MiniForm } from 'components';

const AddTask = ({ onAddTask }) => {
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

AddTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default AddTask;
