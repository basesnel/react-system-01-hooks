import PropTypes from 'prop-types';
import { RiAddCircleFill } from 'react-icons/ri';
import { MiniForm } from 'components';

const AddTaskP01 = ({ onAddTask }) => {
  return (
    <MiniForm
      onFormSubmit={text => {
        onAddTask(text);
      }}
      filling="Add element"
      icon={<RiAddCircleFill />}
    />
  );
};

AddTaskP01.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default AddTaskP01;
