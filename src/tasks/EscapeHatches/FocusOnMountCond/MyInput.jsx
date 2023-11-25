import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiEdit } from 'react-icons/fi';

import DecoratedInput from 'components/DecoratedInput';

export default function MyInput({ shouldFocus, label, name, value, onChange }) {
  const ref = useRef(null);

  useEffect(() => {
    shouldFocus && ref.current.focus();
  }, [shouldFocus]);

  return (
    <DecoratedInput
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
