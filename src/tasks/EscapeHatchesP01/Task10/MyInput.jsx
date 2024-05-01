import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiEdit } from 'react-icons/fi';

import Input from 'components/Input';

export default function MyInput({ shouldFocus, label, name, value, onChange }) {
  const ref = useRef(null);

  useEffect(() => {
    shouldFocus && ref.current.focus();
  }, [shouldFocus]);

  return (
    <Input
      inputRef={ref}
      inputLabel={label}
      inputName={name}
      inputValue={value}
      handleChange={onChange}
      icon={<FiEdit />}
    />
  );
}

MyInput.propTypes = {
  shouldFocus: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
