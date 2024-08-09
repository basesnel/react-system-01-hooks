import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiEdit } from 'react-icons/fi';
import { Input } from 'components';

const MyInputT09 = props => {
  const { value, onChange } = props;

  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <Input
      inputRef={ref}
      inputType="text"
      inputLabel="Enter your name"
      inputName="nameT09"
      inputPlaceholder="Input Your name"
      inputValue={value}
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
