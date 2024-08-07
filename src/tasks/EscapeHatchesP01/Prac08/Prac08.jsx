import { forwardRef, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { FiEdit3 } from 'react-icons/fi';
import { FlexBox, Button } from 'components';

import styles from './styles.module.css';

const MyInput = forwardRef((props, ref) => {
  const { icon } = props;

  const realInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus();
    },
  }));

  return (
    <div className={styles.field}>
      <div className={styles.wrap}>
        <input {...props} className={styles.input} ref={realInputRef} />
        <span className={styles.icon}>{icon}</span>
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
