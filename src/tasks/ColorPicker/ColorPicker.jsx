import { useState } from 'react';
import PropTypes from 'prop-types';
import { P, FlexBox } from 'components';

import styles from './styles.module.css';

const ColorPicker = props => {
  const { options } = props;

  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const makeOptionClassName = index => {
    return index === activeOptionIdx
      ? `${styles.option} ${styles.activeOption}`
      : styles.option;
  };

  const { label, color } = options[activeOptionIdx];

  return (
    <div className={styles.setOfOptions}>
      <P>
        Color is selected: <span style={{ color: color }}>{label}</span>
      </P>
      <FlexBox>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            aria-label={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveOptionIdx(index)}
          ></button>
        ))}
      </FlexBox>
    </div>
  );
};

ColorPicker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ColorPicker;
