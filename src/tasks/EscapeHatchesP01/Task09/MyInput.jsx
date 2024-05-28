import { useRef, useEffect } from 'react';

import PropTypes from 'prop-types';

import { FiEdit } from 'react-icons/fi';

import { Input } from 'components';

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
