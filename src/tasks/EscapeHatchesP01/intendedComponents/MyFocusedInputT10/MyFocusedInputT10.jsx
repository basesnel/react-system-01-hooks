import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiEdit } from 'react-icons/fi';
import { TextInput } from 'components';

const MyFocusedInputT10 = props => {
  const { shouldFocus, label, name, value, placeholder, onChange } = props;

  const ref = useRef(null);

  useEffect(() => {
    shouldFocus && ref.current.focus();
  }, [shouldFocus]);

  return (
    <TextInput
      inputRef={ref}
      name={name}
      value={value}
      label={label}
      placeholder={placeholder}
      onChange={onChange}
      icon={<FiEdit />}
    />
  );
};

MyFocusedInputT10.propTypes = {
  shouldFocus: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default MyFocusedInputT10;
