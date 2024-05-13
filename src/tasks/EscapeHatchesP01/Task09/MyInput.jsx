import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import { FiEdit } from 'react-icons/fi';

import Input from 'components/Input';

const MyInput = props => {
  const { value, onChange } = props;

  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <Input
      inputRef={ref}
      inputLabel="Enter your name"
      inputName="Your name"
      inputPlaceholder="Input Your name"
      inputValue={value}
      handleChange={onChange}
      icon={<FiEdit />}
    />
  );
};

MyInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default MyInput;
