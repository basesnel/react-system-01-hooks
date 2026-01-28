import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiEdit } from 'react-icons/fi';
import { TextInput } from 'components';

const MyInputT09 = props => {
  const { value, onChange } = props;

  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <TextInput
      ref={ref}
      type="text"
      name="nameT09"
      value={value}
      label="Enter your name"
      placeholder="Type your name..."
      handleChange={onChange}
      icon={<FiEdit />}
    />
  );
};

MyInputT09.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MyInputT09;
