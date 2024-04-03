import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiEdit } from 'react-icons/fi';

import DecoratedInput from 'components/DecoratedInput';

export default function MyInput({ value, onChange }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <DecoratedInput
      inputRef={ref}
      inputLabel="Enter your name"
      inputName="Your name"
      inputPlaceholder="Input Your name"
      inputValue={value}
      handleChange={onChange}
      icon={<FiEdit />}
    />
  );
}

MyInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
