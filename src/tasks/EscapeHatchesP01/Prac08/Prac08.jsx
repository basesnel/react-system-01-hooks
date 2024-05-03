import { forwardRef, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';

import { FiEdit3 } from 'react-icons/fi';

import Button from 'components/Button';
import FlexBox from 'components/FlexBox';

import css from './Prac08.module.css';

const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus();
    },
  }));

  return (
    <div className={css.field}>
      <div className={css['wrap-input']}>
        <input {...props} className={css.input} ref={realInputRef} />
        <span className={css.icon}>{props.icon}</span>
      </div>
    </div>
  );
});

export default function Prac08() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <FlexBox>
      <MyInput name="Prac08input" icon={<FiEdit3 />} ref={inputRef} />
      <Button caption="Focus the input" onClick={handleClick} />
    </FlexBox>
  );
}

MyInput.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.node,
};

MyInput.defaultProps = {
  name: null,
  icon: null,
};
