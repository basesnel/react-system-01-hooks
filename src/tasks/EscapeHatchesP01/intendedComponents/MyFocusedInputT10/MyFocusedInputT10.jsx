import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiEdit } from 'react-icons/fi';
import { Input } from 'components';

const MyFocusedInputT10 = props => {
  const { shouldFocus, label, name, value, onChange } = props;

  const ref = useRef(null);

  useEffect(() => {
    shouldFocus && ref.current.focus();
  }, [shouldFocus]);

  return (
    <Input
      inputRef={ref}
      inputType="text"
      inputLabel={label}
      inputName={name}
      inputValue={value}
      handleChange={onChange}
      icon={<FiEdit />}
    />
  );
};

MyFocusedInputT10.propTypes = {
  shouldFocus: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default MyFocusedInputT10;
