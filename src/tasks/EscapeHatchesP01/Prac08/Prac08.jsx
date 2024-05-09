import PropTypes from 'prop-types';

import { forwardRef, useRef, useImperativeHandle } from 'react';
import { FiEdit3 } from 'react-icons/fi';

import Button from 'components/Button';
import FlexBox from 'components/FlexBox';

import css from './Prac08.module.css';

const MyInput = forwardRef((props, ref) => {
  const { icon } = props;
  const { field, wrapInput, input, iconInput } = css;

  const realInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus();
    },
  }));

  return (
    <div className={field}>
      <div className={wrapInput}>
        <input {...props} className={input} ref={realInputRef} />
        <span className={iconInput}>{icon}</span>
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
      <MyInput
        name="Prac08input"
        type="text"
        icon={<FiEdit3 />}
        ref={inputRef}
      />
      <Button caption="Focus the input" onClick={handleClick} />
    </FlexBox>
  );
}

MyInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

MyInput.defaultProps = {
  icon: null,
};
