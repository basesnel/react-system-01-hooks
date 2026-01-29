import { forwardRef, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { FiEdit3 } from 'react-icons/fi';
import { FlexBox, Button } from 'components';

import styles from './styles.module.css';

const MyInput = forwardRef((props, ref) => {
  const { icon, type, name } = props;
  const { field, wrap, input, pictogram } = styles;

  const realInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus();
    },
  }));

  return (
    <div className={field}>
      <div className={wrap}>
        <input type={type} name={name} className={input} ref={realInputRef} />
        <span className={pictogram}>{icon}</span>
      </div>
    </div>
  );
});

const Prac08 = () => {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <FlexBox wrapped="wrap">
      <MyInput name="inputP08" type="text" icon={<FiEdit3 />} ref={inputRef} />
      <Button caption="Focus the input" onClick={handleClick} />
    </FlexBox>
  );
};

MyInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

MyInput.defaultProps = {
  icon: null,
};

export default Prac08;
