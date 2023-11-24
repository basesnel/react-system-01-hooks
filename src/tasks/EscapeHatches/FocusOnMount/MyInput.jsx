import DecoratedInput from 'components/DecoratedInput';
import { useRef, useEffect } from 'react';
import { FiEdit } from 'react-icons/fi';

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
